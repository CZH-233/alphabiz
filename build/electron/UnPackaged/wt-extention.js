const{EventEmitter:EventEmitter}=require("events"),{ipcRenderer:ipcRenderer}=require("electron"),bencode=require("bencode"),payChunkSize=1e7,payPrice=1,payedMap=new Map,autoRenewMap=new Map,transactions=new Map,delayPaments=[],transactionMap=new Map,storedUser=localStorage.getItem("userInfo"),userInfo=storedUser?JSON.parse(storedUser):{user:"",sub:""};console.log("Init user",userInfo);let client=null;export const useClientEvents=e=>{client=e,client.userInfo=userInfo,client.on("request-renew",(e=>ipcRenderer.send("webtorrent-request-renew",e))),client.on("verify-payment",(e=>ipcRenderer.send("webtorrent-verify-payment",e)))};ipcRenderer.on("set-user",((e,t)=>{console.log("set user",t),userInfo.user=t.user,userInfo.sub=t.sub,localStorage.setItem("userInfo",JSON.stringify(userInfo)),client.torrents.forEach((e=>{e.wires.forEach((e=>{e._is_alphabiz_peer_&&e.alphabiz_protocol&&e.alphabiz_protocol._sendUserInfo()}))}))}));const onNewPayment=(e,t)=>{console.log("Payment info",t);const n=client.get(t.infoHash);if(t.payedSize=t.payed*payChunkSize/payPrice,transactions.set(t.id,t),!n||!n.wires.length){if(delayPaments.some((e=>e.id===t.id)))return;return delayPaments.push(t)}for(const o of n.wires)if(o.remoteSub&&o.remoteSub===t.remoteSubId){if(!o["alphabiz_protocol"])continue;o["alphabiz_protocol"]._send({ab_payment:JSON.stringify({infoHash:t.infoHash,peerId:t.peerId,subId:userInfo.sub,payed:t.payed,autoRenew:t.autoRenew,id:t.id})})}};ipcRenderer.on("payment-info",onNewPayment),ipcRenderer.on("restart-payment",onNewPayment),ipcRenderer.on("payment-verified",((e,t)=>{const n=client.get(t.infoHash);if(!n||!n.wires.length)return console.log("tr not found");for(const o of n.wires)if(o.remoteSub&&o.remoteSub===t.subId){if(!o["alphabiz_protocol"])continue;o["alphabiz_protocol"]._onPaymentVerified({infoHash:t.infoHash,peerId:t.peerId,subId:userInfo.sub,payed:t.payed,autoRenew:t.autoRenew,id:t.id})}})),ipcRenderer.on("finish-payment",((e,t)=>{const n=client.get(t.infoHash);if(!n||!n.wires.length)return console.log("finish: tr not found");for(const o of n.wires)if(o.remoteSub&&o.remoteSub===t.remoteSub){if(!o["alphabiz_protocol"])continue;o["alphabiz_protocol"]._send({ab_payment_finish:t.transactionId}),o.transactions&&o.transactions.includes(t.transactionId)&&o.transactions.splice(o.transactions.indexOf(t.transactionId),1)}})),ipcRenderer.on("close-payment",((e,t)=>{const n=client.get(t.infoHash);if(!n||!n.wires.length)return console.log("close: tr not found");for(const o of n.wires)if(o.remoteSub&&o.remoteSub===t.remoteSub){if(!o["alphabiz_protocol"])continue;o["alphabiz_protocol"]._send({ab_payment_close:JSON.stringify({infoHash:t.infoHash,id:t.id})})}}));const removeTransaction=e=>{if(console.log("To remove",e),!e||!e.infoHash)return;const t=e.infoHash,n=transactionMap.get(t);for(let o=0;o<n.length;o++)if(n[o].id===e.id){const e=n.splice(o,1);return void console.log("Removed transaction",e)}};export const useAlphabizProtocol=(e,t)=>{const n="alphabiz_protocol";class o extends EventEmitter{constructor(e){super(),this._wire=e,this._peerId=null,this._infoHash=null,this.isSeeding=t.isSeeding,this.download=t.download,this.prevDownloaded=0,this._user=userInfo.user||"",this._subId=userInfo.sub||"",this.remoteSub="",this._wire._setThrottleGroup=e=>this._setThrottleGroup(e),this._initUpload()}onHandshake(e,t){this._infoHash=e,this._peerId=t,this._sendUserInfo()}_sendUserInfo(){this._user=userInfo.user||"",this._subId=userInfo.sub||"",this._send({ab_peer:"_ab_"+this._peerId,ab_user:this._user,ab_sub:this._subId,ab_has_meta:t.metadata?1:0}),t.metadata||t.once("metadata",(()=>{this._send({ab_has_meta:1})}))}onExtendedHandshake(e){e.m&&e.m[n]||console.error("Client does not support",n)}_sendByteMap(){t.byteMap&&this._send({ab_byte_map:JSON.stringify(t.byteMap)})}_initUpload(){const e=this._wire;e.on("upload",(t=>{if(!this.remoteSub)return;const n=this.remoteSub,o=payedMap.get(n+this._infoHash)-t;if(isNaN(o))return;const s=transactionMap.get(this._infoHash);if(s&&s.length&&(s[0].payedSize-=t,s[0].payedSize<0)){const e=s.shift();ipcRenderer.send("webtorrent-payment-completed",{transactionId:e.id,infoHash:this._infoHash,remoteSub:this.remoteSub})}const i=e.uploadSpeed?e.uploadSpeed():1e6;autoRenewMap.get(n)&&o<5*i&&(autoRenewMap.set(n,!1),this._send({ab_renew:this._subId})),o<=0?(this._setThrottleGroup("mid"),payedMap.set(n+this._infoHash,0)):(this._setThrottleGroup("high"),payedMap.set(n+this._infoHash,o))})),t.on("done",(()=>{this._wire.transactions&&this._send({ab_task_done:this._wire.transactions.join("$")})})),t.on("byte-map-change",(()=>this._sendByteMap()))}_onAbPeer(e,n,o){if(e.startsWith("_ab_")){if(this._remotePeerId=e.substring(4),this._wire._is_alphabiz_peer_=!0,this._wire.ab_peer=e,this._wire.remoteUser=n,this._wire.remoteSub=o,this._wire.transactions=[],this.remoteSub=o,t._has_alphabiz_user_=!0,t.emit("ab_peer",e),o&&payedMap.get(o+this._infoHash)>0?this._onPaymentVerified({infoHash:t.infoHash,subId:o,autoRenew:autoRenewMap.get(o),payed:0},!0):this._setThrottleGroup("mid"),delayPaments.length)for(let e=0;e<delayPaments.length;e++){const t=delayPaments[e];t.infoHash===this._infoHash&&t.remoteSubId===this.remoteSub&&(this._send({ab_payment:JSON.stringify({infoHash:t.infoHash,subId:userInfo.sub,payed:t.payed,id:t.id,autoRenew:t.autoRenew})}),delayPaments.splice(e--,1))}this._sendByteMap(),this.isSeeding||this._sendPubKey()}}_onPubKey(){}_sendPubKey(){}_onAesKey(){}_sendAesKey(){}_setThrottleGroup(t){const n=this._wire._uploadThrottle;if(n&&n._group){if(!e.throttleGroups[t])throw new Error("level_not_found");return n._group===e.throttleGroups[t]||(n._group._removeThrottle(n),e.throttleGroups[t]._addThrottle(n),n._group=e.throttleGroups[t],this._send({ab_speed_group:t})),{code:0,message:"success"}}}_onSpeedGroup(e){this._wire.remoteGroup=e}_onPaymentReceived(t){console.log("receive"),e.emit("verify-payment",t)}_onPaymentVerified({infoHash:e,payed:n,autoRenew:o,id:s}){console.log("verified");const i=this.remoteSub;if(!i)return;if(this._setThrottleGroup("high"),transactions.has(s))return;const a=n*payChunkSize/payPrice;if(transactions.set(s,{infoHash:e,payed:n,autoRenew:o,id:s,payedSize:a}),e!==t.infoHash)return;if(isNaN(a))return;payedMap.has(i+this._infoHash)||payedMap.set(i+this._infoHash,0);const r=payedMap.get(i+this._infoHash);autoRenewMap.set(i,o),payedMap.set(i+this._infoHash,r+a),transactionMap.has(e)||transactionMap.set(e,[]);const d=transactionMap.get(e);d.push({infoHash:e,subId:i,payedSize:a,id:s,startPosition:this._wire.recieved}),this._send({ab_payment_accepted:s})}_onPaymentAccepted(e){this._wire.transactions.push(e)}_onPaymentCompleted(e){console.log("Completed",e,this.remoteSub),ipcRenderer.send("webtorrent-payment-completed",{transactionId:e,remoteSub:this.remoteSub,infoHash:this._infoHash}),this._wire.transactions.includes(e)&&this._wire.transactions.splice(this._wire.transactions.indexOf(e),1)}_onTaskDone(e){const t=e.split("$").filter((e=>e.length));if(console.log("Remote task done"),t.length)for(const n of t)this._onPaymentCompleted(n);payedMap.delete(this.remoteSub,this._infoHash)}_onPaymentFinished(e){console.log("Finished",e);const n=transactions.get(e);if(n){const o=this._wire.downloaded,s=o-this.prevDownloaded;s>.9*n.payedSize||t.done?(ipcRenderer.send("webtorrent-payment-finished",{id:e,remoteSub:this.remoteSub,infoHash:this._infoHash}),this.prevDownloaded+=s>n.payedSize?n.payedSize:s,console.log(`Payment is finished. Payed for ${n.payedSize}. Received ${s}. Done: ${t.done}`)):(this.prevDownloaded+=s,console.log(`Payment is marked as not-finished. Payed for ${n.payedSize}. Received ${s}`))}else ipcRenderer.send("webtorrent-payment-finished",{id:e,remoteSub:this.remoteSub,infoHash:this._infoHash})}_onPaymentClosed(e){console.log("Close",e),removeTransaction(e)}_onRenew(n){t.length-t.downloaded<5*t.downloadSpeed||e.emit("request-renew",{infoHash:this._infoHash,peerId:this._remotePeerId,subId:n})}onMessage(e){let t;try{t=bencode.decode(e.toString())}catch(n){return}if(t.ab_has_meta&&(this._wire.remote_has_meta=!0),t.ab_byte_map&&(this._wire.remote_byte_map=JSON.parse(t.ab_byte_map.toString())),t.ab_peer)return this._onAbPeer(t.ab_peer.toString(),t.ab_user&&t.ab_user.toString(),t.ab_sub&&t.ab_sub.toString());if(t.ab_speed_group)return this._onSpeedGroup(t.ab_speed_group.toString());if(t.ab_payment){const e=JSON.parse(t.ab_payment.toString());return console.log("Protocol payment",e),this._onPaymentReceived(e)}return t.ab_payment_completed?this._onPaymentCompleted(t.ab_payment_completed.toString()):t.ab_payment_accepted?this._onPaymentAccepted(t.ab_payment_accepted.toString()):t.ab_payment_finish?this._onPaymentFinished(t.ab_payment_finish.toString()):t.ab_payment_close?this._onPaymentClosed(JSON.parse(t.ab_payment_close.toString())):t.ab_task_done?this._onTaskDone(t.ab_task_done.toString()):t.ab_renew?(console.log("Renew request",t.ab_renew.toString()),this._onRenew(t.ab_renew.toString())):t.pubKey?this._onPubKey(t):t.aesKey?this._onAesKey(t):void 0}_send(e){const t=Object.entries(this._wire.extendedMapping).find((e=>e[1]===n)),o=t&&t[0];o>=0&&this._wire.extended(Number(o),bencode.encode(e))}onClose(){this._wire.recieved}}return o.prototype.name=n,o};