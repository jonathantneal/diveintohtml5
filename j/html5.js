// html5shiv (lite) | @afarkas @jdalton @jon_neal @rem | MIT/GPL2

// shiv elements on the document
"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section subline summary time video".replace(/\w+/g, function (nodeName) {
	document.createElement(nodeName);
});

// prepend html5 styles to the document
(function (element) {
	element.innerHTML = "x<style>article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,subline,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}</style>";

	document.documentElement.insertBefore(element.lastChild, document.documentElement.firstChild);
})(document.createElement("x"));