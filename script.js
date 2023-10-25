document.addEventListener("DOMContentLoaded", function() {

  let contactButton = document.querySelector(".contact");
  let contactFormLink = "page/contact.html";
  contactButton.addEventListener("click", function() {
    // alert("Vous avez cliqué sur le bouton 'Contactez-moi'");
    window.location.href = contactFormLink;
  });

  let cvButton = document.querySelector(".boutton");
  cvButton.addEventListener("click", function() {
    // alert("Vous avez cliqué sur le bouton 'Télécharger mon CV'");
    contactButton.scrollIntoView({ behavior: 'smooth' });
  });
});
