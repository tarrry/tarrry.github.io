// Get the iframe element
var iframe = document.getElementById('anime');

// Access the content of the iframe
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

// Find and remove ad elements
var adElements = iframeDoc.getElementsByClassName('ad-class');
for (var i = 0; i < adElements.length; i++) {
    adElements[i].style.display = 'none';
}
