// html5shiv (lite) | @afarkas @jdalton @jon_neal @rem | MIT/GPL2

// shiv elements on the document
"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section subline summary time video".replace(/\w+/g, function (nodeName) {
	document.createElement(nodeName);
});

// prepend html5 styles to the document
(function (element) {
	element.innerHTML = "x<style>article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,subline,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}</style>";

	var head = (document.getElementsByTagName("head")[0] || document.documentElement.getElementsByTagName("*")[0]);

	head.insertBefore(element.lastChild, head.firstChild);
})(document.createElement("x"));