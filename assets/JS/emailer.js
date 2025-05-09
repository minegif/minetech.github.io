function sendEmail() {
  var subject = "SOFTWARE SALES"; // Custom subject
  var body = "Hello there, I would like to order for  software_name and need to know about its availability and price"; // Custom body text
  var recipient = "ivanmic47@gmail.com"; // Recipient email address

  // Construct mailto link with parameters
  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open user's email client with pre-filled email parameters
  window.open(mailtoLink);
}
