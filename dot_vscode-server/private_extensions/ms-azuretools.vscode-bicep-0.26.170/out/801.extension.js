"use strict";exports.id=801,exports.ids=[801],exports.modules={51801:(e,n,t)=>{t.r(n),t.d(n,{AppInsightsCore:()=>U,BaseCore:()=>q,BaseTelemetryPlugin:()=>b.s,CoreUtils:()=>R.jS,DiagnosticLogger:()=>v.wq,ESPromise:()=>W,ESPromiseScheduler:()=>J,EventHelper:()=>ne.fs,EventLatency:()=>s,EventPersistence:()=>f,EventPropertyType:()=>c,EventsDiscardedReason:()=>ee.x,FullVersionString:()=>R.xE,InternalAppInsightsCore:()=>O,InternalBaseCore:()=>D,LoggingSeverity:()=>a,MinChannelPriorty:()=>Y,NotificationManager:()=>M,PerfEvent:()=>h.Q6,PerfManager:()=>h.NS,ProcessTelemetryContext:()=>S.W0,TraceLevel:()=>d,Undefined:()=>re.bA,Utils:()=>R.Aq,ValueKind:()=>u,ValueSanitizer:()=>Z,Version:()=>R.Rx,_ExtendedInternalMessageId:()=>g,_InternalLogMessage:()=>v.WD,_InternalMessageId:()=>l,__getRegisteredEvents:()=>te.El,_throwInternal:()=>v.ZP,addEventHandler:()=>te.So,addEventListeners:()=>te.lQ,addPageHideEventListener:()=>te.Fc,addPageShowEventListener:()=>te.oS,addPageUnloadEventListener:()=>te.ee,areCookiesSupported:()=>P.gi,arrForEach:()=>o.Iu,arrIndexOf:()=>o.rD,arrMap:()=>o.W$,arrReduce:()=>o.KT,attachEvent:()=>te.Q3,cookieAvailable:()=>P.gi,createCookieMgr:()=>P.xN,createEnumStyle:()=>r.Hj,createGuid:()=>R.gj,createProcessTelemetryContext:()=>S.i8,createTraceParent:()=>oe.wk,createUniqueNamespace:()=>w.Z,createUnloadHandlerContainer:()=>x.P,dateNow:()=>o.x3,deleteCookie:()=>R.Yj,detachEvent:()=>te.Ym,disableCookies:()=>R.WD,disallowsSameSiteNone:()=>P.It,doPerf:()=>h.r2,dumpObj:()=>m.mm,eventOff:()=>te.ML,eventOn:()=>te.mB,extend:()=>R.X$,findW3cTraceParent:()=>oe.ef,formatTraceParent:()=>oe.L0,generateW3CId:()=>ne.cL,getCommonSchemaMetaData:()=>R.Go,getConsole:()=>m.U5,getCookie:()=>R.Ri,getCookieValue:()=>R.UM,getCrypto:()=>m.MY,getDocument:()=>m.YE,getExceptionName:()=>o.lL,getFieldValueType:()=>R.cq,getGlobal:()=>p.mS,getGlobalInst:()=>m.EH,getHistory:()=>m.JK,getIEVersion:()=>m.L0,getISOString:()=>o._u,getJSON:()=>m.hm,getLocation:()=>m.g$,getMsCrypto:()=>m.iN,getNavigator:()=>m.w3,getPerformance:()=>m.FJ,getSetValue:()=>o.c2,getTenantId:()=>R.EO,getTime:()=>R.WB,getWindow:()=>m.zk,hasDocument:()=>m.Wt,hasHistory:()=>m.tw,hasJSON:()=>m.Z,hasNavigator:()=>m.w9,hasOwnProperty:()=>o.mQ,hasWindow:()=>m.Vd,isArray:()=>o.cy,isArrayValid:()=>R.wJ,isBeaconsSupported:()=>m.Uf,isBoolean:()=>o.Lm,isChromium:()=>R.F2,isDate:()=>o.$P,isDocumentObjectAvailable:()=>R.g8,isError:()=>o.bJ,isFetchSupported:()=>m.R7,isFunction:()=>o.Tn,isIE:()=>m.lT,isLatency:()=>R.Hh,isNotTruthy:()=>o.wo,isNullOrUndefined:()=>o.hX,isNumber:()=>o.Et,isObject:()=>o.Gv,isReactNative:()=>m.lV,isSampledFlag:()=>oe.N7,isString:()=>o.Kg,isTruthy:()=>o.zz,isTypeof:()=>o.Ed,isUint8ArrayAvailable:()=>R.h3,isUndefined:()=>o.b0,isValidSpanId:()=>oe.wN,isValidTraceId:()=>oe.hX,isValidTraceParent:()=>oe.mJ,isValueAssigned:()=>R.yD,isValueKind:()=>R.m0,isWindowObjectAvailable:()=>R.P$,isXhrSupported:()=>m.xk,mergeEvtNamespace:()=>te.Hm,newGuid:()=>ne.aq,newId:()=>ie.Si,normalizeJsName:()=>o.cH,objCreate:()=>p.AQ,objDefineAccessors:()=>o.r,objForEachKey:()=>o.z,objFreeze:()=>o.N6,objKeys:()=>o.cG,objSeal:()=>o.js,openXhr:()=>R.H$,optimizeObject:()=>o.hW,parseTraceParent:()=>oe.ZI,perfNow:()=>ne.UU,proxyAssign:()=>o.qz,proxyFunctionAs:()=>o.RF,proxyFunctions:()=>o.o$,random32:()=>ie.VN,randomValue:()=>ie.Z1,removeEventHandler:()=>te.zh,removeEventListeners:()=>te.Wg,removePageHideEventListener:()=>te.sq,removePageShowEventListener:()=>te.vF,removePageUnloadEventListener:()=>te.Ds,safeGetCookieMgr:()=>P.um,safeGetLogger:()=>v.y0,sanitizeProperty:()=>R.TC,setCookie:()=>R.TV,setEnableEnvMocks:()=>m.cU,setProcessTelemetryTimings:()=>R.u9,setValue:()=>o.KY,strContains:()=>o.Ju,strEndsWith:()=>o.Cv,strFunction:()=>re.hW,strObject:()=>re._1,strPrototype:()=>re.vR,strStartsWith:()=>o.tG,strTrim:()=>o.EH,strUndefined:()=>re.bA,throwError:()=>o.$8,toISOString:()=>o._u,useXDomainRequest:()=>m.PV});var i=t(8747),r=t(96434),o=t(12497),a=(0,r.Hj)({CRITICAL:1,WARNING:2}),l=(0,r.Hj)({BrowserDoesNotSupportLocalStorage:0,BrowserCannotReadLocalStorage:1,BrowserCannotReadSessionStorage:2,BrowserCannotWriteLocalStorage:3,BrowserCannotWriteSessionStorage:4,BrowserFailedRemovalFromLocalStorage:5,BrowserFailedRemovalFromSessionStorage:6,CannotSendEmptyTelemetry:7,ClientPerformanceMathError:8,ErrorParsingAISessionCookie:9,ErrorPVCalc:10,ExceptionWhileLoggingError:11,FailedAddingTelemetryToBuffer:12,FailedMonitorAjaxAbort:13,FailedMonitorAjaxDur:14,FailedMonitorAjaxOpen:15,FailedMonitorAjaxRSC:16,FailedMonitorAjaxSend:17,FailedMonitorAjaxGetCorrelationHeader:18,FailedToAddHandlerForOnBeforeUnload:19,FailedToSendQueuedTelemetry:20,FailedToReportDataLoss:21,FlushFailed:22,MessageLimitPerPVExceeded:23,MissingRequiredFieldSpecification:24,NavigationTimingNotSupported:25,OnError:26,SessionRenewalDateIsZero:27,SenderNotInitialized:28,StartTrackEventFailed:29,StopTrackEventFailed:30,StartTrackFailed:31,StopTrackFailed:32,TelemetrySampledAndNotSent:33,TrackEventFailed:34,TrackExceptionFailed:35,TrackMetricFailed:36,TrackPVFailed:37,TrackPVFailedCalc:38,TrackTraceFailed:39,TransmissionFailed:40,FailedToSetStorageBuffer:41,FailedToRestoreStorageBuffer:42,InvalidBackendResponse:43,FailedToFixDepricatedValues:44,InvalidDurationValue:45,TelemetryEnvelopeInvalid:46,CreateEnvelopeError:47,CannotSerializeObject:48,CannotSerializeObjectNonSerializable:49,CircularReferenceDetected:50,ClearAuthContextFailed:51,ExceptionTruncated:52,IllegalCharsInName:53,ItemNotInArray:54,MaxAjaxPerPVExceeded:55,MessageTruncated:56,NameTooLong:57,SampleRateOutOfRange:58,SetAuthContextFailed:59,SetAuthContextFailedAccountName:60,StringValueTooLong:61,StartCalledMoreThanOnce:62,StopCalledWithoutStart:63,TelemetryInitializerFailed:64,TrackArgumentsNotSpecified:65,UrlTooLong:66,SessionStorageBufferFull:67,CannotAccessCookie:68,IdTooLong:69,InvalidEvent:70,FailedMonitorAjaxSetRequestHeader:71,SendBrowserInfoOnUserInit:72,PluginException:73,NotificationException:74,SnippetScriptLoadFailure:99,InvalidInstrumentationKey:100,CannotParseAiBlobValue:101,InvalidContentBlob:102,TrackPageActionEventFailed:103,FailedAddingCustomDefinedRequestContext:104,InMemoryStorageBufferFull:105,InstrumentationKeyDeprecation:106}),u=(0,r.Hj)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),s=(0,r.Hj)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}),c=(0,r.Hj)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),f=(0,r.Hj)({Normal:1,Critical:2}),d=(0,r.Hj)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),g=(0,o.N6)((0,i.Im)((0,i.Im)({},l),(0,r.Hj)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520}))),v=t(99015),h=t(5204),m=t(44180),p=t(75148),_=t(92457),S=t(8997),C=t(33540),P=t(91698),E=t(52111),I=t(95331),y=t(1972),T=500,A="Channel has invalid priority - ";function _addChannelQueue(e,n,t,i){n&&(0,o.cy)(n)&&n.length>0&&(n=n.sort((function(e,n){return e.priority-n.priority})),(0,o.Iu)(n,(function(e){e.priority<T&&(0,o.$8)(A+e.identifier)})),e.push({queue:(0,o.N6)(n),chain:(0,S.PV)(n,t,i)}))}var b=t(56489),F=function(e){function TelemetryInitializerPlugin(){var n,t,i=e.call(this)||this;function _initDefaults(){n=0,t=[]}return i.identifier="TelemetryInitializerPlugin",i.priority=199,_initDefaults(),(0,_.A)(TelemetryInitializerPlugin,i,(function(e,i){e.addTelemetryInitializer=function(e){var i={id:n++,fn:e};return t.push(i),{remove:function(){(0,o.Iu)(t,(function(e,n){if(e.id===i.id)return t.splice(n,1),-1}))}}},e.processTelemetry=function(n,i){for(var r=!1,a=t.length,l=0;l<a;++l){var u=t[l];if(u)try{if(!1===u.fn.apply(null,[n])){r=!0;break}}catch(e){(0,v.ZP)(i.diagLog(),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,o.lL)(e),{exception:(0,m.mm)(e)},!0)}}r||e.processNext(n,i)},e[y.nZ]=function(){_initDefaults()}})),i}return(0,i.qU)(TelemetryInitializerPlugin,e),TelemetryInitializerPlugin}(b.s),w=t(64252),x=t(49388),N="Plugins must provide initialize method",L="_notificationManager",z="SDK is still unloading...",k={loggingLevelConsole:1};function _createPerfManager(e,n){return new h.NS(n)}function _isPluginPresent(e,n){var t=!1;return(0,o.Iu)(n,(function(n){if(n===e)return t=!0,-1})),t}var D=function BaseCore(){var e,n,t,r,a,l,u,s,c,f,d,g,m,A,b,D,M,O,R,V=0;(0,_.A)(BaseCore,this,(function(_){function _initDefaults(){e=!1,_.config=(0,o.CP)(!0,{},k),_.logger=new v.wq(_.config),_._extensions=[],A=new F,n=[],t=null,r=null,a=null,l=null,u=null,c=null,s=[],f=null,d=null,g=null,m=!1,b=null,D=(0,w.Z)("AIBaseCore",!0),M=(0,x.P)(),R=null}function _createTelCtx(){return(0,S.i8)(_getPluginChain(),_.config,_)}function _initPluginChain(e,n){var t=function _validateExtensions(e,n,t){var i=[],r={};return(0,o.Iu)(t,(function(t){((0,o.hX)(t)||(0,o.hX)(t.initialize))&&(0,o.$8)(N);var a=t.priority,l=t.identifier;t&&a&&((0,o.hX)(r[a])?r[a]=l:(0,v.OG)(e,"Two extensions have same priority #"+a+" - "+r[a]+", "+l)),(!a||a<n)&&i.push(t)})),{all:t,core:i}}(_.logger,T,s);c=t.core,u=null;var i=t.all;if(g=(0,o.N6)(function createChannelQueues(e,n,t,i){var r=[];if(e&&(0,o.Iu)(e,(function(e){return _addChannelQueue(r,e,t,i)})),n){var a=[];(0,o.Iu)(n,(function(e){e.priority>T&&a.push(e)})),_addChannelQueue(r,a,t,i)}return r}(d,i,e,_)),f){var r=(0,o.rD)(i,f);-1!==r&&i.splice(r,1),-1!==(r=(0,o.rD)(c,f))&&c.splice(r,1),f._setQueue(g)}else f=function createChannelControllerPlugin(e,n){var t;function _getTelCtx(){return(0,S.i8)(null,n.config,n,null)}function _processChannelQueue(e,n,t,i){var r=e?e.length+1:1;function _runChainOnComplete(){0==--r&&(i&&i(),i=null)}r>0&&(0,o.Iu)(e,(function(e){if(e&&e.queue.length>0){var i=e.chain,o=n.createNew(i);o.onComplete(_runChainOnComplete),t(o)}else r--})),_runChainOnComplete()}var i=!1,r=(t={identifier:"ChannelControllerPlugin",priority:T,initialize:function(n,t,r,a){i=!0,(0,o.Iu)(e,(function(e){e&&e.queue.length>0&&(0,C.pI)((0,S.i8)(e.chain,n,t),r)}))},isInitialized:function(){return i},processTelemetry:function(n,t){_processChannelQueue(e,t||_getTelCtx(),(function(e){e[y.Oe](n)}),(function(){t[y.Oe](n)}))},update:function _doUpdate(n,t){var i=t||{reason:0};return _processChannelQueue(e,n,(function(e){e[y.Oe](i)}),(function(){n[y.Oe](i)})),!0}},t[y.S$]=function(){_processChannelQueue(e,_getTelCtx(),(function(e){e.iterate((function(e){e[y.S$]&&e[y.S$]()}))}),null)},t[y.$E]=function(){_processChannelQueue(e,_getTelCtx(),(function(e){e.iterate((function(e){e[y.$E]&&e[y.$E]()}))}),null)},t[y.uY]=function _doTeardown(n,t){var r=t||{reason:0,isAsync:!1};return _processChannelQueue(e,n,(function(e){e[y.Oe](r)}),(function(){n[y.Oe](r),i=!1})),!0},t.getChannel=function _getChannel(n){var t=null;return e&&e.length>0&&(0,o.Iu)(e,(function(e){if(e&&e.queue.length>0&&((0,o.Iu)(e.queue,(function(e){if(e.identifier===n)return t=e,-1})),t))return-1})),t},t.flush=function(n,t,i,r){var o=1,a=!1,l=null;function doCallback(){o--,a&&0===o&&(l&&(clearTimeout(l),l=null),t&&t(a),t=null)}return r=r||5e3,_processChannelQueue(e,_getTelCtx(),(function(e){e.iterate((function(e){if(e.flush){o++;var t=!1;e.flush(n,(function(){t=!0,doCallback()}),i)||t||(n&&null==l?l=setTimeout((function(){l=null,doCallback()}),r):doCallback())}}))}),(function(){a=!0,doCallback()})),!0},t._setQueue=function(n){e=n},t);return r}(g,_);i.push(f),c.push(f),_._extensions=(0,C.Xc)(i),f.initialize(e,_,i),(0,C.pI)(_createTelCtx(),i),_._extensions=(0,o.N6)((0,C.Xc)(c||[])).slice(),n&&function _doUpdate(e){var n=(0,S.nU)(_getPluginChain(),_);_._updateHook&&!0===_._updateHook(n,e)||n.processNext(e)}(n)}function _getPlugin(e){var n=null,t=null;return(0,o.Iu)(_._extensions,(function(n){if(n.identifier===e&&n!==f&&n!==A)return t=n,-1})),!t&&f&&(t=f.getChannel(e)),t&&(n={plugin:t,setEnabled:function(e){(0,C.Cr)(t)[y.AT]=!e},isEnabled:function(){var e=(0,C.Cr)(t);return!e[y.uY]&&!e[y.AT]},remove:function(e,n){void 0===e&&(e=!0);var i=[t];_removePlugins(i,{reason:1,isAsync:e},(function(e){e&&_initPluginChain(_.config,{reason:32,removed:i}),n&&n(e)}))}}),n}function _getPluginChain(){if(!u){var e=(c||[]).slice();-1===(0,o.rD)(e,A)&&e.push(A),u=(0,S.PV)((0,C.Xc)(e),_.config,_)}return u}function _removePlugins(e,n,t){if(e&&e.length>0){var i=(0,S.PV)(e,_.config,_),r=(0,S.tS)(i,_);r.onComplete((function(){var n=!1,i=[];(0,o.Iu)(s,(function(t,r){_isPluginPresent(t,e)?n=!0:i.push(t)})),s=i;var r=[];d&&((0,o.Iu)(d,(function(t,i){var a=[];(0,o.Iu)(t,(function(t){_isPluginPresent(t,e)?n=!0:a.push(t)})),r.push(a)})),d=r),t&&t(n)})),r.processNext(n)}else t(!1)}function _flushInternalLogs(){var e=_.logger?_.logger.queue:[];e&&((0,o.Iu)(e,(function(e){var n={name:b||"InternalMessageId: "+e.messageId,iKey:_.config.instrumentationKey,time:(0,o._u)(new Date),baseType:v.WD.dataType,baseData:{message:e.message}};_.track(n)})),e.length=0)}function _flushChannels(e,n,t,i){return f?f.flush(e,n,t||6,i):(n&&n(!1),!0)}function _logOrThrowError(e){var n=_.logger;n?(0,v.ZP)(n,2,73,e):(0,o.$8)(e)}_initDefaults(),_.isInitialized=function(){return e},_.initialize=function(n,r,l,u){m&&(0,o.$8)(z),_.isInitialized()&&(0,o.$8)("Core should not be initialized more than once"),n&&!(0,o.hX)(n.instrumentationKey)||(0,o.$8)("Please provide instrumentation key"),t=u,_[L]=u,_.config=n||{},function _initDebugListener(e){!0===e.disableDbgExt&&O&&(t[y.hf](O),O=null),t&&!O&&!0!==e.disableDbgExt&&(O=(0,I.M)(e),t[y.S8](O))}(n),function _initPerfManager(e){!e.enablePerfMgr&&a&&(a=null),e.enablePerfMgr&&(0,o.KY)(_.config,"createPerfMgr",_createPerfManager)}(n),n.extensions=(0,o.hX)(n.extensions)?[]:n.extensions,function _initExtConfig(e){var n=(0,o.c2)(e,E.x);n.NotificationManager=t}(n),l&&(_.logger=l),(s=[]).push.apply(s,(0,i.vz)((0,i.vz)([],r,!1),n.extensions,!1)),d=(n||{}).channels,_initPluginChain(n,null),g&&0!==g.length||(0,o.$8)("No channels available"),e=!0,_.releaseQueue()},_.getTransmissionControls=function(){var e=[];return g&&(0,o.Iu)(g,(function(n){e.push(n.queue)})),(0,o.N6)(e)},_.track=function(e){(0,o.KY)(e,E.a,_.config.instrumentationKey,null,o.wo),(0,o.KY)(e,"time",(0,o._u)(new Date),null,o.wo),(0,o.KY)(e,"ver","4.0",null,o.hX),!m&&_.isInitialized()?_createTelCtx().processNext(e):n.push(e)},_.getProcessTelContext=_createTelCtx,_.getNotifyMgr=function(){return t||(t=function _createDummyNotificationManager(){var e;return(0,p.AQ)(((e={})[y.S8]=function(e){},e[y.hf]=function(e){},e[y.Jr]=function(e){},e[y.EH]=function(e,n){},e[y.me]=function(e,n){},e))}(),_[L]=t),t},_[y.S8]=function(e){t&&t[y.S8](e)},_[y.hf]=function(e){t&&t[y.hf](e)},_.getCookieMgr=function(){return l||(l=(0,P.xN)(_.config,_.logger)),l},_.setCookieMgr=function(e){l=e},_.getPerfMgr=function(){return r||a||_.config&&_.config.enablePerfMgr&&(0,o.Tn)(_.config.createPerfMgr)&&(a=_.config.createPerfMgr(_,_.getNotifyMgr())),r||a||(0,h.Z4)()},_.setPerfMgr=function(e){r=e},_.eventCnt=function(){return n.length},_.releaseQueue=function(){if(e&&n.length>0){var t=n;n=[],(0,o.Iu)(t,(function(e){_createTelCtx().processNext(e)}))}},_.pollInternalLogs=function(e){b=e||null;var n=_.config.diagnosticLogInterval;return n&&n>0||(n=1e4),V&&clearInterval(V),V=setInterval((function(){_flushInternalLogs()}),n)},_.stopPollingInternalLogs=function(){V&&(clearInterval(V),V=0,_flushInternalLogs())},(0,o.o$)(_,(function(){return A}),["addTelemetryInitializer"]),_.unload=function(n,t,i){void 0===n&&(n=!0),e||(0,o.$8)("SDK is not initialized"),m&&(0,o.$8)(z);var r={reason:50,isAsync:n,flushComplete:!1},a=(0,S.tS)(_getPluginChain(),_);function _doUnload(e){r.flushComplete=e,m=!0,M.run(a,r),_.stopPollingInternalLogs(),a.processNext(r)}a.onComplete((function(){_initDefaults(),t&&t(r)}),_),_flushChannels(n,_doUnload,6,i)||_doUnload(!1)},_.getPlugin=_getPlugin,_.addPlugin=function(e,n,t,i){if(!e)return i&&i(!1),void _logOrThrowError(N);var r=_getPlugin(e.identifier);if(r&&!n)return i&&i(!1),void _logOrThrowError("Plugin ["+e.identifier+"] is already loaded!");var o={reason:16};function _addPlugin(n){s.push(e),o.added=[e],_initPluginChain(_.config,o),i&&i(!0)}if(r){var a=[r.plugin];_removePlugins(a,{reason:2,isAsync:!!t},(function(e){e?(o.removed=a,o.reason|=32,_addPlugin()):i&&i(!1)}))}else _addPlugin()},_.evtNamespace=function(){return D},_.flush=_flushChannels,_.getTraceCtx=function(e){return R||(R=(0,C.u7)()),R},_.setTraceCtx=function(e){R=e||null},(0,o.RF)(_,"addUnloadCb",(function(){return M}),"add")}))};function _runListeners(e,n,t,i){(0,o.Iu)(e,(function(e){if(e&&e[n])if(t)setTimeout((function(){return i(e)}),0);else try{i(e)}catch(e){}}))}var M=function NotificationManager(e){this.listeners=[];var n=!!(e||{}).perfEvtsSendAll;(0,_.A)(NotificationManager,this,(function(e){e[y.S8]=function(n){e.listeners.push(n)},e[y.hf]=function(n){for(var t=(0,o.rD)(e.listeners,n);t>-1;)e.listeners.splice(t,1),t=(0,o.rD)(e.listeners,n)},e[y.Jr]=function(n){_runListeners(e.listeners,y.Jr,!0,(function(e){e[y.Jr](n)}))},e[y.EH]=function(n,t){_runListeners(e.listeners,y.EH,!0,(function(e){e[y.EH](n,t)}))},e[y.me]=function(n,t){_runListeners(e.listeners,y.me,t,(function(e){e[y.me](n,t)}))},e[y.hc]=function(t){t&&(!n&&t.isChildEvt()||_runListeners(e.listeners,y.hc,!1,(function(e){t.isAsync?setTimeout((function(){return e[y.hc](t)}),0):e[y.hc](t)})))}}))},O=function(e){function AppInsightsCore(){var n=e.call(this)||this;return(0,_.A)(AppInsightsCore,n,(function(e,n){function _notifyInvalidEvent(n){var t=e.getNotifyMgr();t&&t.eventsDiscarded([n],2)}e.initialize=function(e,t,i,r){n.initialize(e,t,i||new v.wq(e),r||new M(e))},e.track=function(t){(0,h.r2)(e.getPerfMgr(),(function(){return"AppInsightsCore:track"}),(function(){null===t&&(_notifyInvalidEvent(t),(0,o.$8)("Invalid telemetry item")),function _validateTelemetryItem(e){(0,o.hX)(e.name)&&(_notifyInvalidEvent(e),(0,o.$8)("telemetry name required"))}(t),n.track(t)}),(function(){return{item:t}}),!t.sync)}})),n}return(0,i.qU)(AppInsightsCore,e),AppInsightsCore}(D),R=t(59091),V="version",H="properties",j=function(e){function AppInsightsCore(){var n=e.call(this)||this;return n.pluginVersionStringArr=[],n.pluginVersionString="",(0,_.A)(AppInsightsCore,n,(function(e,n){e.logger&&e.logger.queue||(e.logger=new v.wq({loggingLevelConsole:1})),e.initialize=function(t,i,r,a){(0,h.r2)(e,(function(){return"AppInsightsCore.initialize"}),(function(){if(t){t.endpointUrl||(t.endpointUrl="https://browser.events.data.microsoft.com/OneCollector/1.0/");var l=t.propertyStorageOverride;if(l&&(!l.getProperty||!l.setProperty))throw new Error("Invalid property storage override passed.");t.channels&&(0,o.Iu)(t.channels,(function(n){n&&(0,o.Iu)(n,(function(n){if(n.identifier&&n.version){var t=n.identifier+"="+n.version;e.pluginVersionStringArr.push(t)}}))}))}e.getWParam=function(){return"undefined"!=typeof document?0:-1},i&&(0,o.Iu)(i,(function(n){if(n&&n.identifier&&n.version){var t=n.identifier+"="+n.version;e.pluginVersionStringArr.push(t)}})),e.pluginVersionString=e.pluginVersionStringArr.join(";");try{n.initialize(t,i,r,a),e.pollInternalLogs("InternalLog")}catch(n){var u=e.logger,s=(0,m.mm)(n);-1!==s.indexOf("channels")&&(s+="\n - Channels must be provided through config.channels only!"),u.throwInternal(1,514,"SDK Initialization Failed - no telemetry will be sent: "+s)}}),(function(){return{config:t,extensions:i,logger:r,notificationManager:a}}))},e.track=function(t){(0,h.r2)(e,(function(){return"AppInsightsCore.track"}),(function(){var i=t;if(i){i.timings=i.timings||{},i.timings.trackStart=(0,R.WB)(),(0,R.Hh)(i.latency)||(i.latency=1);var r=i.ext=i.ext||{};r.sdk=r.sdk||{},r.sdk.ver=R.xE;var o=i.baseData=i.baseData||{};o[H]||(o[H]={});var a=o[H];a[V]||(a[V]=""),""!==e.pluginVersionString&&(a[V]=e.pluginVersionString)}n.track(i)}),(function(){return{item:t}}),!t.sync)}})),n}return(0,i.qU)(AppInsightsCore,e),AppInsightsCore}(O);const U=j;var B=function(e){function BaseCore(){var n=e.call(this)||this;return(0,_.A)(BaseCore,n,(function(e,n){e.initialize=function(t,i,r,o){t&&!t.endpointUrl&&(t.endpointUrl="https://browser.events.data.microsoft.com/OneCollector/1.0/"),e.getWParam=function(){return R.g8?0:-1};try{n.initialize(t,i,r,o)}catch(n){(0,v.ZP)(e.logger,1,514,"Initialization Failed: "+(0,m.mm)(n)+"\n - Note: Channels must be provided through config.channels only")}},e.track=function(e){var t=e;if(t){var i=t.ext=t.ext||{};i.sdk=i.sdk||{},i.sdk.ver=R.xE}n.track(t)}})),n}return(0,i.qU)(BaseCore,e),BaseCore}(D);const q=B;var Q=o.Tn;function _createPromiseAllOnResolvedFunction(e,n,t){return function(i){e[n]=i,t()}}const W=function(){function ESPromise(e){var n=0,t=null,i=[];function _processQueue(){if(i.length>0){var e=i.slice();i=[],setTimeout((function(){for(var n=0,t=e.length;n<t;++n)try{e[n]()}catch(e){}}),0)}}function _resolve(e){0===n&&(t=e,n=1,_processQueue())}function _reject(e){0===n&&(t=e,n=2,_processQueue())}(0,_.A)(ESPromise,this,(function(e){e.then=function(e,r){return new ESPromise((function(o,a){!function _enqueue(e,r,o,a){i.push((function(){var i;try{(i=1===n?Q(e)?e(t):t:Q(r)?r(t):t)instanceof ESPromise?i.then(o,a):2!==n||Q(r)?o(i):a(i)}catch(e){return void a(e)}})),0!==n&&_processQueue()}(e,r,o,a)}))},e.catch=function(n){return e.then(null,n)}})),function _initialize(){if(!Q(e))throw new TypeError("ESPromise: resolvedFunc argument is not a Function");try{e(_resolve,_reject)}catch(e){_reject(e)}}()}return ESPromise.resolve=function(e){return e instanceof ESPromise?e:e&&Q(e.then)?new ESPromise((function(n,t){try{e.then(n,t)}catch(e){t(e)}})):new ESPromise((function(n){n(e)}))},ESPromise.reject=function(e){return new ESPromise((function(n,t){t(e)}))},ESPromise.all=function(e){if(e&&e.length)return new ESPromise((function(n,t){try{for(var i=[],r=0,o=0;o<e.length;o++){var a=e[o];a&&Q(a.then)?(r++,a.then(_createPromiseAllOnResolvedFunction(i,o,(function(){0==--r&&n(i)})),t)):i[o]=a}0===r&&setTimeout((function(){n(i)}),0)}catch(e){t(e)}}))},ESPromise.race=function(e){return new ESPromise((function(n,t){if(e&&e.length)try{for(var _loop_1=function(i){var r=e[i];r&&Q(r.then)?r.then(n,t):setTimeout((function(){n(r)}),0)},i=0;i<e.length;i++)_loop_1(i)}catch(e){t(e)}}))},ESPromise}();var K=0,$=[],X=[],G=[];function _getTime(){return(new Date).getTime()}const J=function(){function ESPromiseScheduler(e,n){var t=0,i=(e||"<unnamed>")+"."+K;function _debugLog(e){var n=(0,p.mS)();n&&n.QUnit&&console&&console.log("ESPromiseScheduler["+i+"] "+e)}function _warnLog(e){n&&n.warnToConsole("ESPromiseScheduler["+i+"] "+e)}K++,(0,_.A)(ESPromiseScheduler,this,(function(e){var n=null,r=0;function _removeQueuedEvent(e,n){for(var t=0;t<e.length;t++)if(e[t].id===n)return e.splice(t,1)[0];return null}e.scheduleEvent=function(e,o,a){var l=i+"."+r;r++,o&&(l+="-("+o+")");var u=l+"{"+t+"}";t++;var s={evt:null,tm:_getTime(),id:u,isRunning:!1,isAborted:!1};return s.evt=n?function _waitForPreviousEvent(e,n){var t=new W((function(t,i){var r=_getTime()-n.tm,o=n.id;_debugLog("["+l+"] is waiting for ["+o+":"+r+" ms] to complete before starting -- ["+X.length+"] waiting and ["+$.length+"] running"),e.abort=function(n){e.abort=null,_removeQueuedEvent(X,l),e.isAborted=!0,i(new Error(n))},n.evt.then((function(n){_removeQueuedEvent(X,l),_startWaitingEvent(e).then(t,i)}),(function(n){_removeQueuedEvent(X,l),_startWaitingEvent(e).then(t,i)}))}));return X.push(e),t}(s,n):_startWaitingEvent(s),(n=s).evt._schId=u,s.evt;function _abortAndRemoveOldEvents(e){for(var n=_getTime(),t=n-6e5,i=e.length,r=0;r<i;){var o=e[r];if(o&&o.tm<t){var a=null;o.abort?(a="Aborting ["+o.id+"] due to Excessive runtime ("+(n-o.tm)+" ms)",o.abort(a)):a="Removing ["+o.id+"] due to Excessive runtime ("+(n-o.tm)+" ms)",_warnLog(a),e.splice(r,1),i--}else r++}}function _cleanup(e,t){var i=!1,r=_removeQueuedEvent($,e);if(r||(r=_removeQueuedEvent(G,e),i=!0),r){r.to&&(clearTimeout(r.to),r.to=null);var o=_getTime()-r.tm;t?i?_warnLog("Timed out event ["+e+"] finally complete -- "+o+" ms"):_debugLog("Promise ["+e+"] Complete -- "+o+" ms"):(G.push(r),_warnLog("Event ["+e+"] Timed out and removed -- "+o+" ms"))}else _debugLog("Failed to remove ["+e+"] from running queue");n&&n.id===e&&(n=null),_abortAndRemoveOldEvents($),_abortAndRemoveOldEvents(X),_abortAndRemoveOldEvents(G)}function _removeScheduledEvent(e,n){return function(t){return _cleanup(e,!0),n&&n(t),t}}function _waitForFinalResult(e,n,t,i){n.then((function(n){return n instanceof W?(_debugLog("Event ["+e+"] returned a promise -- waiting"),_waitForFinalResult(e,n,t,i),n):_removeScheduledEvent(e,t)(n)}),_removeScheduledEvent(e,i))}function _createScheduledEvent(e,n){var t=e.id;return new W((function(i,r){_debugLog("Event ["+t+"] Starting -- waited for "+(e.wTm||"--")+" ms"),e.isRunning=!0,e.abort=function(n){e.abort=null,e.isAborted=!0,_cleanup(t,!1),r(new Error(n))};var o=n(t);o instanceof W?(a&&(e.to=setTimeout((function(){_cleanup(t,!1),r(new Error("Timed out after ["+a+"] ms"))}),a)),_waitForFinalResult(t,o,(function(n){_debugLog("Event ["+t+"] Resolving after "+(_getTime()-e.tm)+" ms"),i(n)}),r)):(_debugLog("Promise ["+t+"] Auto completed as the start action did not return a promise"),i())}))}function _startWaitingEvent(n){var t=_getTime();return n.wTm=t-n.tm,n.tm=t,n.isAborted?W.reject(new Error("["+l+"] was aborted")):($.push(n),_createScheduledEvent(n,e))}}}))}return ESPromiseScheduler.incomplete=function(){return $},ESPromiseScheduler.waitingToStart=function(){return X},ESPromiseScheduler}();var Z=function(){function ValueSanitizer(e){var n=this,t={},i=[],r=[];function _getFieldSanitizer(e,n){var a,l=t[e];if(l&&(a=l[n]),!a&&null!==a){if((0,o.Kg)(e)&&(0,o.Kg)(n))if(r.length>0){for(var u=0;u<r.length;u++)if(r[u].handleField(e,n)){a={canHandle:!0,fieldHandler:r[u]};break}}else 0===i.length&&(a={canHandle:!0});if(!a&&null!==a){a=null;for(u=0;u<i.length;u++)if(i[u].handleField(e,n)){a={canHandle:!0,handler:i[u],fieldHandler:null};break}}l||(l=t[e]={}),l[n]=a}return a}function _handleProperty(e,n,t,i,r,a){if(e.handler)return e.handler.property(n,t,r,a);if(!(0,o.hX)(r.kind)){if(4096==(4096&i)||!(0,R.m0)(r.kind))return null;r.value=r.value.toString()}return _callFieldSanitizer(e.fieldHandler,n,t,i,r)}function _convertToProperty(e,n,t){return(0,R.yD)(t)?{value:t}:null}function _callFieldSanitizer(e,t,i,r,a){if(a&&e){var l=e.getSanitizer(t,i,r,a.kind,a.propertyType);if(l)if(4===r){var u={},s=a.value;(0,o.z)(s,(function(n,r){var o=t+"."+i;if((0,R.yD)(r)){var a=_convertToProperty(0,0,r);(a=_callFieldSanitizer(e,o,n,(0,R.cq)(r),a))&&(u[n]=a.value)}})),a.value=u}else{var c={path:t,name:i,type:r,prop:a,sanitizer:n};a=l.call(n,c)}}return a}e&&r.push(e),n.addSanitizer=function(e){e&&(i.push(e),t={})},n.addFieldSanitizer=function(e){e&&(r.push(e),t={})},n.handleField=function(e,n){var t=_getFieldSanitizer(e,n);return!!t&&t.canHandle},n.value=function(e,n,t,i){var r=_getFieldSanitizer(e,n);if(r&&r.canHandle){if(!r||!r.canHandle)return null;if(r.handler)return r.handler.value(e,n,t,i);if(!(0,o.Kg)(n)||(0,o.hX)(t)||""===t)return null;var a=null,l=(0,R.cq)(t);if(8192==(8192&l)){var u=-8193&l;if(a=t,!(0,R.yD)(a.value)||1!==u&&2!==u&&3!==u&&4096!=(4096&u))return null}else 1===l||2===l||3===l||4096==(4096&l)?a=_convertToProperty(e,n,t):4===l&&(a=_convertToProperty(e,n,i?JSON.stringify(t):t));if(a)return _handleProperty(r,e,n,l,a,i)}return null},n.property=function(e,n,t,i){var r=_getFieldSanitizer(e,n);if(!r||!r.canHandle)return null;if(!(0,o.Kg)(n)||(0,o.hX)(t)||!(0,R.yD)(t.value))return null;var a=(0,R.cq)(t.value);return 0===a?null:_handleProperty(r,e,n,a,t,i)}}return ValueSanitizer.getFieldType=R.cq,ValueSanitizer}(),Y=100,ee=t(31590),ne=t(32578),te=t(18413),ie=t(57679),re=t(47672),oe=t(68560)}};
//# sourceMappingURL=801.extension.js.map