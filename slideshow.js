// This function from http://blogs.msdn.com/b/giorgio/archive/2009/04/14/how-to-detect-ie8-using-javascript-client-side.aspx
function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
    
// Based on slideshow from http://www.lateralcode.com/simple-slideshow/ 
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  // Looks terrible in IE8 during the fade
  var ieVersion = getInternetExplorerVersion();
  var fadeTime  = 1000;
  if (ieVersion > 0 && ieVersion < 9)
  {
    fadeTime = 0;
  }
  $('#slideshow > div:first')
    .fadeOut(fadeTime)
    .next()
    .fadeIn(fadeTime)
    .end()
    .appendTo('#slideshow');
},  8000);


