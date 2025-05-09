function sendEmail() {
  var subject = "Tailoring Enquiry"; // Custom subject
  var body = "Hello there, I would like to know more about your tailoring services and prices"; // Custom body text
  var recipient = "ivanmic47@gmail.com"; // Recipient email address

  // Construct mailto link with parameters
  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open user's email client with pre-filled email parameters
  window.open(mailtoLink);
}


function emailSend() {
  var subject = "Distribution Enquiry"; // Custom subject
  var body = "Hello there, I would like to know which places you supply to and also when that distribution is made"; // Custom body text
  var recipient = "ivanmic47@gmail.com"; // Recipient email address

  // Construct mailto link with parameters
  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open user's email client with pre-filled email parameters
  window.open(mailtoLink);
}


function emailSent() {
  var subject = "Renting Enquiry"; // Custom subject
  var body = "Hello there, I would like to know the terms and conditions for your outift renting services and how much you charge."; // Custom body text
  var recipient = "ivanmic47@gmail.com"; // Recipient email address

  // Construct mailto link with parameters
  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open user's email client with pre-filled email parameters
  window.open(mailtoLink);
}