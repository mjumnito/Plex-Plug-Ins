(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Noln:function(e,t,r){"use strict";r.r(t);var a=r("pVnL"),i=r.n(a),n=(r("17x9"),r("q1tI")),s=r.n(n),o=r("RG42"),c=r("ZwMC"),l=r("irRM"),d=r("NeLh"),u=r("lAqu"),h=r("EVdn"),f=r.n(h),p=r("TyAO"),E=new Map;var m=function({url:e}){var t=f.a.Deferred();if(E.has(e))t.resolve({url:e,certificate:E.get(e)});else{var r=new window.XMLHttpRequest,a=()=>{r.removeEventListener("error",i,!1),r.removeEventListener("load",n,!1)},i=r=>{var{status:i}=r.target;a(),t.reject({url:e,status:i})},n=r=>{var{response:i,status:n}=r.target;if(a(),200===n){var s=new Uint8Array(i);t.resolve({url:e,certificate:s})}else t.reject({url:e,status:n})};r.responseType="arraybuffer",r.addEventListener("error",i,!1),r.addEventListener("load",n,!1),r.open("GET",e,!0),r.send()}return Object(p.a)(t.promise())};var v=function(e){var t=!1;return function(...r){if(!t)return t=!0,e(...r)}}(e=>{e.polyfill.installAll()}),C=r("A+r8"),g=r("8OQS"),R=r.n(g),y=s.a.createElement,{Component:T}=s.a;var _,A=class extends T{constructor(...e){super(...e),this.onTimeout=()=>{var{positionSeconds:e,durationSeconds:t,onEnd:r}=this.props,a=t-e;c.a.warn("[Player] Manually ending while stalled within the last %ss.",a),this.props.onBufferingChange&&this.props.onBufferingChange(!1),r()}}componentDidUpdate(e){var{healthCheckSecondsFromEnd:t,positionSeconds:r,durationSeconds:a,paused:i,onEnd:n}=this.props,s=!1;n&&a>0&&r>=a&&(s=!0,n());var o=r!==e.positionSeconds,c=i&&i!==e.paused,l=s||o||c;this._timeoutID&&l&&clearTimeout(this._timeoutID);var d=a-r;if(a>0&&n&&(!s&&!i)&&d>=0&&d<t){var u=Math.round(1e3*d)+250;clearTimeout(this._timeoutID),this._timeoutID=setTimeout(this.onTimeout,u)}}componentWillUnmount(){this._timeoutID&&clearTimeout(this._timeoutID)}render(){var e=this.props,{mediaComponent:t}=e,r=R()(e,["mediaComponent"]);return(y(t,r))}},w=r("9ym6"),O=s.a.createElement,{Component:b}=s.a,{Category:S,Code:P,Severity:I}=o.util.Error;function M(e){switch(e){case S.NETWORK:return Object(C.default)("Network");case S.TEXT:return Object(C.default)("Text");case S.MEDIA:return Object(C.default)("Media");case S.MANIFEST:return Object(C.default)("Manifest");case S.STREAMING:return Object(C.default)("Streaming");case S.DRM:return Object(C.default)("DRM");case S.PLAYER:return Object(C.default)("Player");case S.CAST:return Object(C.default)("Cast");case S.STORAGE:return Object(C.default)("Storage");default:return Object(C.default)("Unknown")}}function L(e){return["s"+e.code+" ("+M(e.category)+")"].concat(function(e){var{code:t,data:r}=e;switch(t){case P.BAD_HTTP_STATUS:return["URI: "+r[0],r[1]?"Status code: "+r[1]:null,r[2]?"Response text: "+r[2]:null,r[3]?"Response headers: "+JSON.stringify(r[3],null,2):null,r[4]?"NetworkingEngine.RequestType: "+r[4]:null];case P.MEDIA_SOURCE_OPERATION_FAILED:return["MediaError code: "+r[0]];case P.MEDIA_SOURCE_OPERATION_THREW:return["DOMException "+r[0].name+": "+r[0].message];case P.VIDEO_ERROR:return["MediaError code: "+r[0],r[1]?"Edge/IE Error code: "+r[1]:null,r[2]?"Chrome error details: "+r[2]:null];case P.INIT_DATA_TRANSFORM_ERROR:return["Exception "+r[0].name+": "+r[0].message]}}(e)).filter(e=>e).join(" – ")}function D(e,t){var r,a={},i=l.a[e.drm];return i===u.FAIRPLAY&&(a.fairPlayTransform=!1,a.advanced={[i]:{serverCertificate:t}},a.initDataTransform=e=>o.util.FairPlayUtils.initDataTransform(e,o.util.FairPlayUtils.defaultGetContentId(e),_.drmInfo().serverCertificate)),i&&(r=Object.assign({},a,{servers:{[i]:e.license}})),r}class N extends b{constructor(e,t){super(e,t),this.onNetworkEngineRequest=(e,t)=>{if(e===o.net.NetworkingEngine.RequestType.LICENSE)switch(this.props.drm){case d.PLAYREADY:delete t.headers.SOAPAction}},this.onFetchCertificateResolved=e=>{var{url:t,certificate:r}=e;this._serverCertificate=r,c.a.warn("[Player] Server certificate request succeeeded: %s",t),this.tryLoadMedia()},this.onFetchCertificateRejected=e=>{var{isCanceled:t,url:r,status:a}=e;t||(c.a.warn("[Player] Server certificate request failed (%d): %s",a,r),this._serverCertificate="invalid",this.tryLoadMedia())},this.onElementChange=e=>{this._mediaElement=e,this.tryLoadMedia()},this.onHTMLError=()=>{},this.onBufferingChange=({buffering:e})=>{},this.onError=({detail:e={}})=>{if(!this._hasUnmounted){var{category:t,code:r,severity:a}=e,i=L(e),n=a;t===S.DRM&&r===P.INIT_DATA_TRANSFORM_ERROR&&a===I.CRITICAL&&(n=I.RECOVERABLE),n===I.CRITICAL?(c.a.warn("[Player] A critical Shaka error occurred: "+i+"; the player cannot recover"),this.props.onError&&this.props.onError({code:"s"+r,category:M(t)})):n===I.RECOVERABLE?c.a.warn("[Player] A Shaka error occurred: "+i+"; the player will attempt to recover"):c.a.warn("[Player] A Shaka error occurred: "+i+"; the severity is unknown")}},v(o),_||(_=new o.Player),this.state={isReadyToPlay:!1},this._mediaElement,this._serverCertificate,this._serverCertificateCancelable}componentDidMount(){var{certificate:e}=this.props;e&&(this._serverCertificateCancelable=m({url:e}),this._serverCertificateCancelable.promise.then(this.onFetchCertificateResolved,this.onFetchCertificateRejected))}componentWillUnmount(){(this._hasUnmounted=!0,this._resetPrePlaybackFields(),_)&&(_.getNetworkingEngine().unregisterRequestFilter(this.onNetworkEngineRequest),_.resetConfiguration(),_.removeEventListener("buffering",this.onBufferingChange),_.removeEventListener("error",this.onError),_.detach(),_.unload())}_resetPrePlaybackFields(){this._serverCertificateCancelable&&(this._serverCertificateCancelable.cancel(),delete this._serverCertificateCancelable),delete this._mediaElement,delete this._serverCertificate}tryLoadMedia(){var{_mediaElement:e,_serverCertificate:t}=this,r=this.props.drm===d.FAIRPLAY;!e||r&&!t||(this._resetPrePlaybackFields(),this.loadMedia({mediaElement:e,serverCertificate:t}))}loadMedia({mediaElement:e,serverCertificate:t}){var r={streaming:{bufferingGoal:this.props.bufferingGoal,jumpLargeGaps:!0,retryParameters:{maxAttempts:1/0}},abr:{defaultBandwidthEstimate:this.props.defaultBandwidthEstimate},drm:D(this.props,t)};_.configure(r),_.attach(e),_.addEventListener("buffering",this.onBufferingChange),_.addEventListener("error",this.onError),_.getNetworkingEngine().registerRequestFilter(this.onNetworkEngineRequest),_.load(this.props.src,this.props.positionSeconds).then(()=>{_&&this.setState({isReadyToPlay:!0})},e=>{_&&this.onError({detail:e})})}render(){return O(A,i()({},this.props,{healthCheckSecondsFromEnd:this.props.bufferingGoal,mediaComponent:w.a,isReadyToPlay:this.state.isReadyToPlay,onElementChange:this.onElementChange,onError:this.onHTMLError}))}}N.displayName="ShakaMedia",N.defaultProps=Object.assign({},w.a.defaultProps,{bufferingGoal:70});t.default=N}}]);