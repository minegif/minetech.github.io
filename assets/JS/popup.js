


document.addEventListener('DOMContentLoaded', function() {
    const strictCookieRadio = document.querySelector('input[id="strict"]');
    strictCookieRadio.checked = true;
    strictCookieRadio.disabled = true;
});




//ensuring radio buttons behave correctly allowing only one to be selected at a time

/*

document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"][name="radioGropu"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                radioButtons.forEach(rb => {
                    if (rb !== this) {
                        rb.checked = false;
                    }
                });
            }
        });
    });
});

*/



function openCookies() {
  // Specify the URL of the HTML page you want to open as a popup
  var url = 'cookies.html';
  
  // Specify the size and other properties of the popup window
  var width = 600;
  var height = 400;
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',resizable=yes,scrollbars=yes';

  // Open the popup window
  window.open(url, 'popupWindow', options);
}

function closePop() {
      window.close(); // Close the popup window
    }
    
    function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    
    const trackingCookieRadio = document.querySelector('input[id="radio3"]');
    const functionalityCookieRadio = document.querySelector('input[id="radio2"]');
    functionalityCookieRadio.checked = false;
   
    trackingCookieRadio.checked = false; 
   
}


function openPopupAccount() {
    document.getElementById("account").style.display = "block";
}

function closePopupAccount() {
    document.getElementById("account").style.display = "none";
    
 
}

function openLogin() {
	
	var acc =document.getElementById("account2");
	
	var log =document.getElementById("login");
	
		 log.style.display = "block";
		 acc.style.display="none";
   }

function openAccount() {
	
	var acc =document.getElementById("account2");
	
	var log =document.getElementById("login");
	
		 log.style.display = "none";
		 acc.style.display="block";
   }