// content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
	  chrome.runtime.sendMessage({
		"message": "open_new_tab", 
		"url": $('.Carousel-currentSlide-1fcfro .CrossFadeImage-crossFade-10Sndv')[0].style.getPropertyValue('background-image').substring(5).replace('")','')
	  });
    }
  }
);