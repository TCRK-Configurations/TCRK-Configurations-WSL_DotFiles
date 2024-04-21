"use strict";exports.id=4,exports.ids=[4],exports.modules={57004:(e,n,t)=>{t.r(n),t.d(n,{BE_PROFILE:()=>p,NRT_PROFILE:()=>_,PostChannel:()=>ae,RT_PROFILE:()=>v});var a=t(8747),r=t(92457),i=t(5204),o=t(18413),s=t(64252),u=t(59091),c=t(12497),l=t(44180),d=t(31590),f=t(99015),h=t(56489),v="REAL_TIME",_="NEAR_REAL_TIME",p="BEST_EFFORT",y="POST",m="drop",g="send",T="requeue",S="rspFail",E="application/x-json-stream",b="cache-control",P="content-type",C="kill-tokens",B="kill-duration",R="time-delta-millis",x="client-version",w="client-id",M="time-delta-to-apply-millis",H="upload-time",A="apikey",k="AuthMsaDeviceTicket",I="AuthXToken",K="msfpc";function _getEventMsfpc(e){var n=(e.ext||{}).intweb;return n&&(0,u.yD)(n[K])?n[K]:null}function _getMsfpc(e){for(var n=null,t=0;null===n&&t<e.length;t++)n=_getEventMsfpc(e[t]);return n}var O=function(){function EventBatch(e,n){var t=n?[].concat(n):[],a=this,r=_getMsfpc(t);a.iKey=function(){return e},a.Msfpc=function(){return r||""},a.count=function(){return t.length},a.events=function(){return t},a.addEvent=function(e){return!!e&&(t.push(e),r||(r=_getEventMsfpc(e)),!0)},a.split=function(n,a){var i;if(n<t.length){var o=t.length-n;(0,c.hX)(a)||(o=a<o?a:o),i=t.splice(n,o),r=_getMsfpc(t)}return new EventBatch(e,i)}}return EventBatch.create=function(e,n){return new EventBatch(e,n)},EventBatch}(),L=t(47672),q=2e6,D=Math.min(q,65e3),F="metadata",Q="f",N=/\./,z=function Serializer(e,n,t,a){var o="data",s="baseData",l=!!a,d=n,f={};(0,r.A)(Serializer,this,(function(n){function _processPathKeys(e,n,a,r,i,o,s){(0,c.z)(e,(function(e,h){var v=null;if(h||(0,u.yD)(h)){var _=a,p=e,y=i,m=n;if(l&&!r&&N.test(e)){var g=e.split("."),T=g.length;if(T>1){y&&(y=y.slice());for(var S=0;S<T-1;S++){var E=g[S];m=m[E]=m[E]||{},_+="."+E,y&&y.push(E)}p=g[T-1]}}var b=r&&function _isReservedField(e,n){var t=f[e];return void 0===t&&(e.length>=7&&(t=(0,c.tG)(e,"ext.metadata")||(0,c.tG)(e,"ext.web")),f[e]=t),t}(_);if(v=!b&&d&&d.handleField(_,p)?d.value(_,p,h,t):(0,u.TC)(p,h,t)){var P=v.value;if(m[p]=P,o&&o(y,p,v),s&&"object"==typeof P&&!(0,c.cy)(P)){var C=y;C&&(C=C.slice()).push(p),_processPathKeys(h,P,_+"."+p,r,C,o,s)}}}}))}n.createPayload=function(e,n,t,a,r,i){return{apiKeys:[],payloadBlob:"",overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:e,isTeardown:n,isSync:t,isBeacon:a,sendType:i,sendReason:r}},n.appendPayload=function(t,a,r){var o=t&&a&&!t.overflow;return o&&(0,i.r2)(e,(function(){return"Serializer:appendPayload"}),(function(){for(var e=a.events(),i=t.payloadBlob,o=t.numEvents,s=!1,u=[],l=[],d=t.isBeacon,f=d?65e3:3984588,h=d?D:q,v=0,_=0;v<e.length;){var p=e[v];if(p){if(o>=r){t.overflow=a.split(v);break}var y=n.getEventBlob(p);if(y&&y.length<=h){var m=y.length;if(i.length+m>f){t.overflow=a.split(v);break}i&&(i+="\n"),i+=y,++_>20&&(i.substr(0,1),_=0),s=!0,o++}else y?u.push(p):l.push(p),e.splice(v,1),v--}v++}if(u&&u.length>0&&t.sizeExceed.push(O.create(a.iKey(),u)),l&&l.length>0&&t.failedEvts.push(O.create(a.iKey(),l)),s){t.batches.push(a),t.payloadBlob=i,t.numEvents=o;var g=a.iKey();-1===(0,c.rD)(t.apiKeys,g)&&t.apiKeys.push(g)}}),(function(){return{payload:t,theBatch:{iKey:a.iKey(),evts:a.events()},max:r}})),o},n.getEventBlob=function(n){try{return(0,i.r2)(e,(function(){return"Serializer.getEventBlob"}),(function(){var e={};e.name=n.name,e.time=n.time,e.ver=n.ver,e.iKey="o:"+(0,u.EO)(n.iKey);var t={},a=n.ext;a&&(e.ext=t,(0,c.z)(a,(function(e,n){_processPathKeys(n,t[e]={},"ext."+e,!0,null,null,!0)})));var r=e[o]={};r.baseType=n.baseType;var i=r[s]={};return _processPathKeys(n.baseData,i,s,!1,[s],(function(e,n,a){_addJSONPropertyMetaData(t,e,n,a)}),!0),_processPathKeys(n.data,r,o,!1,[],(function(e,n,a){_addJSONPropertyMetaData(t,e,n,a)}),!0),JSON.stringify(e)}),(function(){return{item:n}}))}catch(e){return null}}}))};function _addJSONPropertyMetaData(e,n,t,a){if(a&&e){var r=(0,u.Go)(a.value,a.kind,a.propertyType);if(r>-1){var i=e[F];i||(i=e[F]={f:{}});var o=i[Q];if(o||(o=i[Q]={}),n)for(var s=0;s<n.length;s++){var l=n[s];o[l]||(o[l]={f:{}});var d=o[l][Q];d||(d=o[l][Q]={}),o=d}o=o[t]={},(0,c.cy)(a.value)?o.a={t:r}:o.t=r}}}function retryPolicyGetMillisToBackoffForRetry(e){var n,t=Math.floor(1200*Math.random())+2400;return n=Math.pow(2,e)*t,Math.min(n,6e5)}const U=function KillSwitch(){var e={};(0,r.A)(KillSwitch,this,(function(n){n.setKillSwitchTenants=function(n,t){if(n&&t)try{var a=function _normalizeTenants(e){var n=[];return e&&(0,c.Iu)(e,(function(e){n.push((0,c.EH)(e))})),n}(n.split(","));if("this-request-only"===t)return a;for(var r=1e3*parseInt(t,10),i=0;i<a.length;++i)e[a[i]]=(0,c.x3)()+r}catch(e){return[]}return[]},n.isTenantKilled=function(n){var t=e,a=(0,c.EH)(n);return void 0!==t[a]&&t[a]>(0,c.x3)()||(delete t[a],!1)}}))};const W=function ClockSkewManager(){var e=!0,n=!0,t=!0,a="use-collector-delta",i=!1;(0,r.A)(ClockSkewManager,this,(function(r){r.allowRequestSending=function(){return e},r.firstRequestSent=function(){t&&(t=!1,i||(e=!1))},r.shouldAddClockSkewHeaders=function(){return n},r.getClockSkewHeaderValue=function(){return a},r.setClockSkew=function(t){i||(t?(a=t,n=!0,i=!0):n=!1,e=!0)}}))};var X,V="sendAttempt",j="&NoResponseBody=true",G=((X={})[1]=T,X[100]=T,X[200]="sent",X[8004]=m,X[8003]=m,X),Z={},J={};function _addCollectorHeaderQsMapping(e,n,t){Z[e]=n,!1!==t&&(J[n]=e)}function _getResponseText(e){try{return e.responseText}catch(e){}return""}function _hasHeader(e,n){var t=!1;if(e&&n){var a=(0,c.cG)(e);if(a&&a.length>0)for(var r=n.toLowerCase(),i=0;i<a.length;i++){var o=a[i];if(o&&(0,c.mQ)(n,o)&&o.toLowerCase()===r){t=!0;break}}}return t}function _addRequestDetails(e,n,t,a){n&&t&&t.length>0&&(a&&Z[n]?(e.hdrs[Z[n]]=t,e.useHdrs=!0):e.url+="&"+n+"="+t)}_addCollectorHeaderQsMapping(k,k,!1),_addCollectorHeaderQsMapping(x,x),_addCollectorHeaderQsMapping(w,"Client-Id"),_addCollectorHeaderQsMapping(A,A),_addCollectorHeaderQsMapping(M,M),_addCollectorHeaderQsMapping(H,H),_addCollectorHeaderQsMapping(I,I);var $=function HttpManager(e,n,t,a,o){this._responseHandlers=[];var s,d,h,v,_,p,T="?cors=true&"+P.toLowerCase()+"="+E,k=new U,I=!1,O=new W,q=!1,D=0,F=!0,Q=[],N={},X=[],Z=null,$=!1,Y=!1,ee=!1;(0,r.A)(HttpManager,this,(function(r){var U=!0;function _getSenderInterface(e,n){for(var t=0,a=null,r=0;null==a&&r<e.length;)1===(t=e[r])?(0,l.PV)()?a=_xdrSendPost:(0,l.xk)()&&(a=_xhrSendPost):2===t&&(0,l.R7)(n)?a=_fetchSendPost:q&&3===t&&(0,l.Uf)()&&(a=_beaconSendPost),r++;return a?{_transport:t,_isSync:n,sendPOST:a}:null}function _xdrSendPost(e,n,t){var a=new XDomainRequest;a.open(y,e.urlString),e.timeout&&(a.timeout=e.timeout),a.onload=function(){var e=_getResponseText(a);_doOnComplete(n,200,{},e),_handleCollectorResponse(e)},a.onerror=function(){_doOnComplete(n,400,{})},a.ontimeout=function(){_doOnComplete(n,500,{})},a.onprogress=function(){},t?a.send(e.data):o.set((function(){a.send(e.data)}),0)}function _fetchSendPost(e,n,t){var a,r=e.urlString,i=!1,s=!1,u=((a={body:e.data,method:y}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,a);t&&(u.keepalive=!0,2===e._sendReason&&(i=!0,r+=j)),U&&(u.credentials="include"),e.headers&&(0,c.cG)(e.headers).length>0&&(u.headers=e.headers),fetch(r,u).then((function(e){var t={},a="";e.headers&&e.headers.forEach((function(e,n){t[n]=e})),e.body&&e.text().then((function(e){a=e})),s||(s=!0,_doOnComplete(n,e.status,t,a),_handleCollectorResponse(a))})).catch((function(e){s||(s=!0,_doOnComplete(n,0,{}))})),i&&!s&&(s=!0,_doOnComplete(n,200,{})),!s&&e.timeout>0&&o.set((function(){s||(s=!0,_doOnComplete(n,500,{}))}),e.timeout)}function _xhrSendPost(e,n,t){var a=e.urlString;function _appendHeader(e,n,t){if(!e[t]&&n&&n.getResponseHeader){var a=n.getResponseHeader(t);a&&(e[t]=(0,c.EH)(a))}return e}function _getAllResponseHeaders(e){var n={};return e.getAllResponseHeaders?n=function _convertAllHeadersToMap(e){var n={};if((0,c.Kg)(e)){var t=(0,c.EH)(e).split(/[\r\n]+/);(0,c.Iu)(t,(function(e){if(e){var t=e.indexOf(": ");if(-1!==t){var a=(0,c.EH)(e.substring(0,t)).toLowerCase(),r=(0,c.EH)(e.substring(t+1));n[a]=r}else n[(0,c.EH)(e)]=1}}))}return n}(e.getAllResponseHeaders()):(n=_appendHeader(n,e,R),n=_appendHeader(n,e,B),n=_appendHeader(n,e,"kill-duration-seconds")),n}function xhrComplete(e,t){_doOnComplete(n,e.status,_getAllResponseHeaders(e),t)}t&&e.disableXhrSync&&(t=!1);var r=(0,u.H$)(y,a,U,!0,t,e.timeout);(0,c.z)(e.headers,(function(e,n){r.setRequestHeader(e,n)})),r.onload=function(){var e=_getResponseText(r);xhrComplete(r,e),_handleCollectorResponse(e)},r.onerror=function(){xhrComplete(r)},r.ontimeout=function(){xhrComplete(r)},r.send(e.data)}function _doOnComplete(e,n,t,a){try{e(n,t,a)}catch(e){(0,f.ZP)(s.diagLog(),2,518,(0,l.mm)(e))}}function _beaconSendPost(e,n,t){var a=200,r=e._thePayload,i=e.urlString+j;try{var o=(0,l.w3)();if(!o.sendBeacon(i,e.data))if(r){var u=[];(0,c.Iu)(r.batches,(function(e){if(u&&e&&e.count()>0){for(var n=e.events(),t=0;t<n.length;t++)if(!o.sendBeacon(i,Z.getEventBlob(n[t]))){u.push(e.split(t));break}}else u.push(e.split(0))})),_sendBatchesNotification(u,8003,r.sendType,!0)}else a=0}catch(e){s.diagLog().warnToConsole("Failed to send telemetry using sendBeacon API. Ex:"+(0,l.mm)(e)),a=0}finally{_doOnComplete(n,a,{},"")}}function _isBeaconPayload(e){return 2===e||3===e}function _adjustSendType(e){return Y&&_isBeaconPayload(e)&&(e=2),e}function _hasIdleConnection(){return!I&&D<n}function _clearQueue(){var e=X;return X=[],e}function _canSendPayload(e,n,t){var a=!1;return e&&e.length>0&&!I&&d[n]&&Z&&(a=0!==n||_hasIdleConnection()&&(t>0||O.allowRequestSending())),a}function _createDebugBatches(e){var n={};return e&&(0,c.Iu)(e,(function(e,t){n[t]={iKey:e.iKey(),evts:e.events()}})),n}function _sendBatches(n,t,a,r,o){if(n&&0!==n.length)if(I)_sendBatchesNotification(n,1,r);else{r=_adjustSendType(r);try{var c=n,v=0!==r;(0,i.r2)(h,(function(){return"HttpManager:_sendBatches"}),(function(i){i&&(n=n.slice(0));for(var s=[],c=null,f=(0,u.WB)(),h=d[r]||(v?d[1]:d[0]),_=(Y||_isBeaconPayload(r)||h&&3===h._transport)&&function _canUseSendBeaconApi(){return!F&&q&&(0,l.Uf)()}();_canSendPayload(n,r,t);){var p=n.shift();p&&p.count()>0&&(k.isTenantKilled(p.iKey())?s.push(p):(c=c||Z.createPayload(t,a,v,_,o,r),Z.appendPayload(c,p,e)?null!==c.overflow&&(n=[c.overflow].concat(n),c.overflow=null,_doPayloadSend(c,f,(0,u.WB)(),o),f=(0,u.WB)(),c=null):(_doPayloadSend(c,f,(0,u.WB)(),o),f=(0,u.WB)(),n=[p].concat(n),c=null)))}c&&_doPayloadSend(c,f,(0,u.WB)(),o),n.length>0&&(X=n.concat(X)),_sendBatchesNotification(s,8004,r)}),(function(){return{batches:_createDebugBatches(c),retryCount:t,isTeardown:a,isSynchronous:v,sendReason:o,useSendBeacon:_isBeaconPayload(r),sendType:r}}),!v)}catch(e){(0,f.ZP)(s.diagLog(),2,48,"Unexpected Exception sending batch: "+(0,l.mm)(e))}}}function _buildRequestDetails(e,n){var t={url:T,hdrs:{},useHdrs:!1};n?(t.hdrs=(0,u.X$)(t.hdrs,N),t.useHdrs=(0,c.cG)(t.hdrs).length>0):(0,c.z)(N,(function(e,n){J[e]?_addRequestDetails(t,J[e],n,!1):(t.hdrs[e]=n,t.useHdrs=!0)})),_addRequestDetails(t,w,"NO_AUTH",n),_addRequestDetails(t,x,u.xE,n);var a="";(0,c.Iu)(e.apiKeys,(function(e){a.length>0&&(a+=","),a+=e})),_addRequestDetails(t,A,a,n),_addRequestDetails(t,H,(0,c.x3)().toString(),n);var r=function _getMsfpc(e){for(var n=0;n<e.batches.length;n++){var t=e.batches[n].Msfpc();if(t)return encodeURIComponent(t)}return""}(e);if((0,u.yD)(r)&&(t.url+="&ext.intweb.msfpc="+r),O.shouldAddClockSkewHeaders()&&_addRequestDetails(t,M,O.getClockSkewHeaderValue(),n),h.getWParam){var i=h.getWParam();i>=0&&(t.url+="&w="+i)}for(var o=0;o<Q.length;o++)t.url+="&"+Q[o].name+"="+Q[o].value;return t}function _setTimingValue(e,n,t){e[n]=e[n]||{},e[n][s.identifier]=t}function _doPayloadSend(e,n,a,o){if(e&&e.payloadBlob&&e.payloadBlob.length>0){var f=!!r.sendHook,v=d[e.sendType];!_isBeaconPayload(e.sendType)&&e.isBeacon&&2===e.sendReason&&(v=d[2]||d[3]||v);var y=ee;(e.isBeacon||3===v._transport)&&(y=!1);var m=_buildRequestDetails(e,y);y=y||m.useHdrs;var g=(0,u.WB)();(0,i.r2)(h,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var d=0;d<e.batches.length;d++)for(var T=e.batches[d].events(),S=0;S<T.length;S++){var x=T[S];if($){var w=x.timings=x.timings||{};_setTimingValue(w,"sendEventStart",g),_setTimingValue(w,"serializationStart",n),_setTimingValue(w,"serializationCompleted",a)}x[V]>0?x[V]++:x[V]=1}_sendBatchesNotification(e.batches,1e3+(o||0),e.sendType,!0);var M={data:e.payloadBlob,urlString:m.url,headers:m.hdrs,_thePayload:e,_sendReason:o,timeout:_};(0,c.b0)(p)||(M.disableXhrSync=!!p),y&&(_hasHeader(M.headers,b)||(M.headers[b]="no-cache, no-store"),_hasHeader(M.headers,P)||(M.headers[P]=E));var H=null;v&&(H=function(n){O.firstRequestSent();var onComplete=function(n,a){!function _retryRequestIfNeeded(e,n,a,i){var o=9e3,l=null,d=!1,f=!1;try{var h=!0;if(typeof e!==L.bA){if(n){O.setClockSkew(n[R]);var v=n[B]||n["kill-duration-seconds"];(0,c.Iu)(k.setKillSwitchTenants(n[C],v),(function(e){(0,c.Iu)(a.batches,(function(n){if(n.iKey()===e){l=l||[];var t=n.split(0);a.numEvents-=t.count(),l.push(t)}}))}))}if(200==e||204==e)return void(o=200);(!function retryPolicyShouldRetryForStatus(e){return!(e>=300&&e<500&&408!=e&&429!=e||501==e||505==e)}(e)||a.numEvents<=0)&&(h=!1),o=9e3+e%1e3}if(h){o=100;var _=a.retryCnt;0===a.sendType&&(_<t?(d=!0,_doAction((function(){0===a.sendType&&D--,_sendBatches(a.batches,_+1,a.isTeardown,Y?2:a.sendType,5)}),Y,retryPolicyGetMillisToBackoffForRetry(_))):(f=!0,Y&&(o=8001)))}}finally{d||(O.setClockSkew(),function _handleRequestFinished(e,n,t,a){try{a&&s._backOffTransmission(),200===n&&(a||e.isSync||s._clearBackOff(),function _addCompleteTimings(e){if($){var n=(0,u.WB)();(0,c.Iu)(e,(function(e){e&&e.count()>0&&function _addEventCompletedTimings(e,n){$&&(0,c.Iu)(e,(function(e){_setTimingValue(e.timings=e.timings||{},"sendEventCompleted",n)}))}(e.events(),n)}))}}(e.batches)),_sendBatchesNotification(e.batches,n,e.sendType,!0)}finally{0===e.sendType&&(D--,5!==t&&r.sendQueuedRequests(e.sendType,t))}}(a,o,i,f)),_sendBatchesNotification(l,8004,a.sendType)}}(n,a,e,o)},a=e.isTeardown||e.isSync;try{v.sendPOST(n,onComplete,a),r.sendListener&&r.sendListener(M,n,a,e.isBeacon)}catch(e){s.diagLog().warnToConsole("Unexpected exception sending payload. Ex:"+(0,l.mm)(e)),_doOnComplete(onComplete,0,{})}}),(0,i.r2)(h,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(H)if(0===e.sendType&&D++,f&&!e.isBeacon&&3!==v._transport){var n={data:M.data,urlString:M.urlString,headers:(0,u.X$)({},M.headers),timeout:M.timeout,disableXhrSync:M.disableXhrSync},t=!1;(0,i.r2)(h,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{r.sendHook(n,(function(e){t=!0,F||e._thePayload||(e._thePayload=e._thePayload||M._thePayload,e._sendReason=e._sendReason||M._sendReason),H(e)}),e.isSync||e.isTeardown)}catch(e){t||H(M)}}))}else H(M)}))}),(function(){return{thePayload:e,serializationStart:n,serializationCompleted:a,sendReason:o}}),e.isSync)}e.sizeExceed&&e.sizeExceed.length>0&&_sendBatchesNotification(e.sizeExceed,8003,e.sendType),e.failedEvts&&e.failedEvts.length>0&&_sendBatchesNotification(e.failedEvts,8002,e.sendType)}function _doAction(e,n,t){n?e():o.set(e,t)}function _handleCollectorResponse(e){var n=r._responseHandlers;try{for(var t=0;t<n.length;t++)try{n[t](e)}catch(e){(0,f.ZP)(s.diagLog(),1,519,"Response handler failed: "+e)}if(e){var a=JSON.parse(e);(0,u.yD)(a.webResult)&&(0,u.yD)(a.webResult[K])&&v.set("MSFPC",a.webResult[K],31536e3)}}catch(e){}}function _sendBatchesNotification(e,n,t,r){if(e&&e.length>0&&a){var o=a[function _getNotificationAction(e){var n=G[e];return(0,u.yD)(n)||(n="oth",e>=9e3&&e<=9999?n=S:e>=8e3&&e<=8999?n=m:e>=1e3&&e<=1999&&(n=g)),n}(n)];if(o){var c=0!==t;(0,i.r2)(h,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){_doAction((function(){try{o.call(a,e,n,c,t)}catch(e){(0,f.ZP)(s.diagLog(),1,74,"send request notification failed: "+e)}}),r||c,0)}),(function(){return{batches:_createDebugBatches(e),reason:n,isSync:c,sendSync:r,sendType:t}}),!c)}}}r.initialize=function(e,n,t,a,r){var i;r||(r={}),T=e+T,ee=!!(0,c.b0)(r.avoidOptions)||!r.avoidOptions,h=n,v=n.getCookieMgr(),$=!h.config.disableEventTimings;var o=!!h.config.enableCompoundKey;s=t;var u=r.valueSanitizer,f=r.stringifyObjects;(0,c.b0)(r.enableCompoundKey)||(o=!!r.enableCompoundKey),_=r.xhrTimeout,p=r.disableXhrSync,q=!(0,l.lV)(),Z=new z(h,u,f,o);var y=a,m=r.alwaysUseXhrOverride?a:null,g=r.alwaysUseXhrOverride?a:null;if(!a){F=!1;var S=(0,l.g$)();S&&S.protocol&&"file:"===S.protocol.toLowerCase()&&(U=!1);var E=[];E=(0,l.lV)()?[2,1]:[1,2,3];var b=r.transports;b&&((0,c.Et)(b)?E=[b].concat(E):(0,c.cy)(b)&&(E=b.concat(E))),a=_getSenderInterface(E,!1),y=_getSenderInterface(E,!0),a||s.diagLog().warnToConsole("No available transport to send events")}(i={})[0]=a,i[1]=y||_getSenderInterface([1,2,3],!0),i[2]=m||_getSenderInterface([3,2],!0)||y||_getSenderInterface([1],!0),i[3]=g||_getSenderInterface([2,3],!0)||y||_getSenderInterface([1],!0),d=i},r._getDbgPlgTargets=function(){return[d[0],k,Z,d]},r.addQueryStringParameter=function(e,n){for(var t=0;t<Q.length;t++)if(Q[t].name===e)return void(Q[t].value=n);Q.push({name:e,value:n})},r.addHeader=function(e,n){N[e]=n},r.canSendRequest=function(){return _hasIdleConnection()&&O.allowRequestSending()},r.sendQueuedRequests=function(e,n){(0,c.b0)(e)&&(e=0),Y&&(e=_adjustSendType(e),n=2),_canSendPayload(X,e,0)&&_sendBatches(_clearQueue(),0,!1,e,n||0)},r.isCompletelyIdle=function(){return!I&&0===D&&0===X.length},r.setUnloading=function(e){Y=e},r.addBatch=function(e){if(e&&e.count()>0){if(k.isTenantKilled(e.iKey()))return!1;X.push(e)}return!0},r.teardown=function(){X.length>0&&_sendBatches(_clearQueue(),0,!0,2,2)},r.pause=function(){I=!0},r.resume=function(){I=!1,r.sendQueuedRequests(0,4)},r.sendSynchronousBatch=function(e,n,t){e&&e.count()>0&&((0,c.hX)(n)&&(n=1),Y&&(n=_adjustSendType(n),t=2),_sendBatches([e],0,!1,n,t||0))}}))};function defaultSetTimeout(e,n){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];return setTimeout(e,n,t)}function defaultClearTimeout(e){clearTimeout(e)}function createTimeoutWrapper(e,n){return{set:e||defaultSetTimeout,clear:n||defaultClearTimeout}}var Y="eventsDiscarded",ee="overrideInstrumentationKey",ne="maxEventRetryAttempts",te="maxUnloadEventRetryAttempts";const ae=function(e){function PostChannel(){var n,t=e.call(this)||this;t.identifier="PostChannel",t.priority=1011,t.version="3.2.3";var a,h,y,m,g,T,S,E=!1,b=[],P=null,C=!1,B=0,R=500,x=0,w=1e4,M={},H=v,A=null,I=null,K=0,L=0,q={},D=-1,F=!0,Q=!1,N=6,z=2;return(0,r.A)(PostChannel,t,(function(e,t){function _handleUnloadEvents(e){"beforeunload"!==(e||(0,l.zk)().event).type&&(Q=!0,h.setUnloading(Q)),_releaseAllQueues(2,2)}function _handleShowEvents(e){Q=!1,h.setUnloading(Q)}function _addEventToQueues(e,n){if(e.sendAttempt||(e.sendAttempt=0),e.latency||(e.latency=1),e.ext&&e.ext.trace&&delete e.ext.trace,e.ext&&e.ext.user&&e.ext.user.id&&delete e.ext.user.id,F&&(e.ext=(0,c.hW)(e.ext),e.baseData&&(e.baseData=(0,c.hW)(e.baseData)),e.data&&(e.data=(0,c.hW)(e.data))),e.sync)if(K||C)e.latency=3,e.sync=!1;else if(h)return F&&(e=(0,c.hW)(e)),void h.sendSynchronousBatch(O.create(e.iKey,[e]),!0===e.sync?1:e.sync,3);var t=e.latency,a=x,r=w;4===t&&(a=B,r=R);var i=!1;if(a<r)i=!_addEventToProperQueue(e,n);else{var o=1,s=20;4===t&&(o=4,s=1),i=!0,function _dropEventWithLatencyOrLess(e,n,t,a){for(;t<=n;){var r=_getEventBatch(e,n,!0);if(r&&r.count()>0){var i=r.split(0,a),o=i.count();if(o>0)return 4===t?B-=o:x-=o,_notifyBatchEvents(Y,[i],d.x.QueueFull),!0}t++}return _resetQueueCounts(),!1}(e.iKey,e.latency,o,s)&&(i=!_addEventToProperQueue(e,n))}i&&_notifyEvents(Y,[e],d.x.QueueFull)}function _sendEventsForLatencyAndAbove(e,n,t){var a=_queueBatches(e,n,t);return h.sendQueuedRequests(n,t),a}function _hasEvents(){return x>0}function _scheduleTimer(){if(D>=0&&_queueBatches(D,0,g)&&h.sendQueuedRequests(0,g),B>0&&!I&&!C){var e=M[H][2];e>=0&&(I=_createTimer((function(){I=null,_sendEventsForLatencyAndAbove(4,0,1),_scheduleTimer()}),e))}var n=M[H][1];!A&&!P&&n>=0&&!C&&(_hasEvents()?A=_createTimer((function(){A=null,_sendEventsForLatencyAndAbove(0===L?3:1,0,1),L++,L%=2,_scheduleTimer()}),n):L=0)}function _initDefaults(){n=null,E=!1,b=[],P=null,C=!1,B=0,R=500,x=0,w=1e4,M={},H=v,A=null,I=null,K=0,L=0,a=null,q={},y=void 0,m=0,D=-1,g=null,F=!0,Q=!1,N=6,z=2,T=null,S=createTimeoutWrapper(),h=new $(500,2,1,{requeue:_requeueEvents,send:_sendingEvent,sent:_eventsSentEvent,drop:_eventsDropped,rspFail:_eventsResponseFail,oth:_otherEvent},S),_initializeProfiles(),function _clearQueues(){q[4]={batches:[],iKeyMap:{}},q[3]={batches:[],iKeyMap:{}},q[2]={batches:[],iKeyMap:{}},q[1]={batches:[],iKeyMap:{}}}(),_setAutoLimits()}function _createTimer(e,n){0===n&&K&&(n=1);var t=1e3;return K&&(t=retryPolicyGetMillisToBackoffForRetry(K-1)),S.set(e,n*t)}function _clearScheduledTimer(){return null!==A&&(S.clear(A),A=null,L=0,!0)}function _releaseAllQueues(e,n){_clearScheduledTimer(),P&&(S.clear(P),P=null),C||_sendEventsForLatencyAndAbove(1,e,n)}function _getEventBatch(e,n,t){var a=q[n];a||(a=q[n=1]);var r=a.iKeyMap[e];return!r&&t&&(r=O.create(e),a.batches.push(r),a.iKeyMap[e]=r),r}function _performAutoFlush(n,t){h.canSendRequest()&&!K&&(y>0&&x>y&&(t=!0),t&&null==P&&e.flush(n,null,20))}function _addEventToProperQueue(e,n){F&&(e=(0,c.hW)(e));var t=e.latency,a=_getEventBatch(e.iKey,t,!0);return!!a.addEvent(e)&&(4!==t?(x++,n&&0===e.sendAttempt&&_performAutoFlush(!e.sync,m>0&&a.count()>=m)):B++,!0)}function _resetQueueCounts(){for(var e=0,n=0,_loop_1=function(t){var a=q[t];a&&a.batches&&(0,c.Iu)(a.batches,(function(a){4===t?e+=a.count():n+=a.count()}))},t=1;t<=4;t++)_loop_1(t);x=n,B=e}function _queueBatches(n,t,a){var r=!1,o=0===t;return!o||h.canSendRequest()?(0,i.r2)(e.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var e=[],t=4;t>=n;){var a=q[t];a&&a.batches&&a.batches.length>0&&((0,c.Iu)(a.batches,(function(n){h.addBatch(n)?r=r||n&&n.count()>0:e=e.concat(n.events()),4===t?B-=n.count():x-=n.count()})),a.batches=[],a.iKeyMap={}),t--}e.length>0&&_notifyEvents(Y,e,d.x.KillSwitch),r&&D>=n&&(D=-1,g=0)}),(function(){return{latency:n,sendType:t,sendReason:a}}),!o):(D=D>=0?Math.min(D,n):n,g=Math.max(g,a)),r}function _flushImpl(e,n){_sendEventsForLatencyAndAbove(1,0,n),_resetQueueCounts(),_waitForIdleManager((function(){e&&e(),b.length>0?P=_createTimer((function(){P=null,_flushImpl(b.shift(),n)}),0):(P=null,_scheduleTimer())}))}function _waitForIdleManager(e){h.isCompletelyIdle()?e():P=_createTimer((function(){P=null,_waitForIdleManager(e)}),.25)}function _initializeProfiles(){(M={})[v]=[2,1,0],M[_]=[6,3,0],M[p]=[18,9,0]}function _requeueEvents(n,t){var a=[],r=N;Q&&(r=z),(0,c.Iu)(n,(function(n){n&&n.count()>0&&(0,c.Iu)(n.events(),(function(n){n&&(n.sync&&(n.latency=4,n.sync=!1),n.sendAttempt<r?((0,u.u9)(n,e.identifier),_addEventToQueues(n,!1)):a.push(n))}))})),a.length>0&&_notifyEvents(Y,a,d.x.NonRetryableStatus),Q&&_releaseAllQueues(2,2)}function _callNotification(n,t){var a=e._notificationManager||{},r=a[n];if(r)try{r.apply(a,t)}catch(t){(0,f.ZP)(e.diagLog(),1,74,n+" notification failed: "+t)}}function _notifyEvents(e,n){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];n&&n.length>0&&_callNotification(e,[n].concat(t))}function _notifyBatchEvents(e,n){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];n&&n.length>0&&(0,c.Iu)(n,(function(n){n&&n.count()>0&&_callNotification(e,[n.events()].concat(t))}))}function _sendingEvent(e,n,t){e&&e.length>0&&_callNotification("eventsSendRequest",[n>=1e3&&n<=1999?n-1e3:0,!0!==t])}function _eventsSentEvent(e,n){_notifyBatchEvents("eventsSent",e,n),_scheduleTimer()}function _eventsDropped(e,n){_notifyBatchEvents(Y,e,n>=8e3&&n<=8999?n-8e3:d.x.Unknown)}function _eventsResponseFail(e){_notifyBatchEvents(Y,e,d.x.NonRetryableStatus),_scheduleTimer()}function _otherEvent(e,n){_notifyBatchEvents(Y,e,d.x.Unknown),_scheduleTimer()}function _setAutoLimits(){m=n&&n.disableAutoBatchFlushLimit?0:Math.max(1500,w/6)}_initDefaults(),e._getDbgPlgTargets=function(){return[h]},e.initialize=function(r,l,d){(0,i.r2)(l,(function(){return"PostChannel:initialize"}),(function(){var i=l;t.initialize(r,l,d);try{l.addUnloadCb;T=(0,o.Hm)((0,s.Z)(e.identifier),l.evtNamespace&&l.evtNamespace());var f=e._getTelCtx();r.extensionConfig[e.identifier]=r.extensionConfig[e.identifier]||{},n=f.getExtCfg(e.identifier),S=createTimeoutWrapper(n.setTimeoutOverride,n.clearTimeoutOverride),F=!n.disableOptimizeObj&&(0,u.F2)(),function _hookWParam(e){var t=e.getWParam;e.getWParam=function(){var e=0;return n.ignoreMc1Ms0CookieProcessing&&(e|=2),e|t()}}(i),n.eventsLimitInMem>0&&(w=n.eventsLimitInMem),n.immediateEventLimit>0&&(R=n.immediateEventLimit),n.autoFlushEventsLimit>0&&(y=n.autoFlushEventsLimit),(0,c.Et)(n[ne])&&(N=n[ne]),(0,c.Et)(n[te])&&(z=n[te]),_setAutoLimits(),n.httpXHROverride&&n.httpXHROverride.sendPOST&&(a=n.httpXHROverride),(0,u.yD)(r.anonCookieName)&&h.addQueryStringParameter("anoncknm",r.anonCookieName),h.sendHook=n.payloadPreprocessor,h.sendListener=n.payloadListener;var v=n.overrideEndpointUrl?n.overrideEndpointUrl:r.endpointUrl;e._notificationManager=r.extensionConfig.NotificationManager,h.initialize(v,e.core,e,a,n);var _=r.disablePageUnloadEvents||[];(0,o.ee)(_handleUnloadEvents,_,T),(0,o.Fc)(_handleUnloadEvents,_,T),(0,o.oS)(_handleShowEvents,r.disablePageShowEvents,T)}catch(n){throw e.setInitialized(!1),n}}),(function(){return{coreConfig:r,core:l,extensions:d}}))},e.processTelemetry=function(t,a){(0,u.u9)(t,e.identifier);var r=(a=e._getTelCtx(a)).getExtCfg(e.identifier),i=!!n.disableTelemetry;r&&(i=i||!!r.disableTelemetry);var o=t;i||E||(n[ee]&&(o.iKey=n[ee]),r&&r[ee]&&(o.iKey=r[ee]),_addEventToQueues(o,!0),Q?_releaseAllQueues(2,2):_scheduleTimer()),e.processNext(o,a)},e._doTeardown=function(e,n){_releaseAllQueues(2,2),E=!0,h.teardown(),(0,o.Ds)(null,T),(0,o.sq)(null,T),(0,o.vF)(null,T),_initDefaults()},e.setEventQueueLimits=function(e,n){w=e>0?e:1e4,y=n>0?n:0,_setAutoLimits();var t=x>e;if(!t&&m>0)for(var a=1;!t&&a<=3;a++){var r=q[a];r&&r.batches&&(0,c.Iu)(r.batches,(function(e){e&&e.count()>=m&&(t=!0)}))}_performAutoFlush(!0,t)},e.pause=function(){_clearScheduledTimer(),C=!0,h.pause()},e.resume=function(){C=!1,h.resume(),_scheduleTimer()},e.addResponseHandler=function(e){h._responseHandlers.push(e)},e._loadTransmitProfiles=function(e){!function _resetTransmitProfiles(){_clearScheduledTimer(),_initializeProfiles(),H=v,_scheduleTimer()}(),(0,c.z)(e,(function(e,n){var t=n.length;if(t>=2){var a=t>2?n[2]:0;if(n.splice(0,t-2),n[1]<0&&(n[0]=-1),n[1]>0&&n[0]>0){var r=n[0]/n[1];n[0]=Math.ceil(r)*n[1]}a>=0&&n[1]>=0&&a>n[1]&&(a=n[1]),n.push(a),M[e]=n}}))},e.flush=function(e,n,t){if(void 0===e&&(e=!0),!C)if(t=t||1,e)null==P?(_clearScheduledTimer(),_queueBatches(1,0,t),P=_createTimer((function(){P=null,_flushImpl(n,t)}),0)):b.push(n);else{var a=_clearScheduledTimer();_sendEventsForLatencyAndAbove(1,1,t),null!=n&&n(),a&&_scheduleTimer()}},e.setMsaAuthTicket=function(e){h.addHeader(k,e)},e.hasEvents=_hasEvents,e._setTransmitProfile=function(e){H!==e&&void 0!==M[e]&&(_clearScheduledTimer(),H=e,_scheduleTimer())},e._backOffTransmission=function(){K<4&&(K++,_clearScheduledTimer(),_scheduleTimer())},e._clearBackOff=function(){K&&(K=0,_clearScheduledTimer(),_scheduleTimer())},(0,c.r)(e,"_setTimeoutOverride",(function(){return S.set}),(function(e){S=createTimeoutWrapper(e,S.clear)})),(0,c.r)(e,"_clearTimeoutOverride",(function(){return S.clear}),(function(e){S=createTimeoutWrapper(S.set,e)}))})),t}return(0,a.qU)(PostChannel,e),PostChannel}(h.s)}};
//# sourceMappingURL=4.extension.js.map