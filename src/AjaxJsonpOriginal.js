// Default jsonp settings默认设置
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );


// Insert callback into url or form data
// 回调插入
if ( jsonProp ) {
	s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
} else if ( s.jsonp !== false ) {
	// 比较一下我们自己写的
	// script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
	s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
}

// Install callback
// 比较一下我们自己写的
//  window[callbackName] = function(data) {
// };
overwritten = window[ callbackName ];
window[ callbackName ] = function() {
	responseContainer = arguments;
};


// Delegate to script最后返回的内容
return "script";