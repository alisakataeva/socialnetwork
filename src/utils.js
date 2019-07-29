

function getCookie (key) {
  var cookies = {};
  var document_cookies = document.cookie.split("; ");
  for (var i = 0; i <= document_cookies.length; i++) {
    var ckey = document_cookies[i].split('=')[0];
    var cval = document_cookies[i].split('=')[1];
    if (ckey === key) {
      return cval
    }
  }
  return null;
}


export default  {
  getCookie
}