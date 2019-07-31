

function getCookie (key) {
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


function get (url) {
  return fetch(
    url, { method: 'GET', credentials: 'include' }
  ).then(
    response => response.json()
  )
}

function post_json (url, csrf, data) {
  return fetch(
    url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf
      },
      body: data
    }
  ).then(
    response => response.json()
  )
}

function patch_json (url, csrf, data) {
  return fetch(
    url, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf
      },
      body: data
    }
  ).then(
    response => response.json()
  )
}


function post (url, csrf, data) {
  return fetch(
    url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'X-CSRFToken': csrf
      },
      body: data
    }
  ).then(
    response => response.json()
  )
}


export default  {
  getCookie,
  get,
  post,
  post_json,
  patch_json,
}