function closeForm() {
  document.contactform.fname.value = '';
  document.contactform.lname.value = '';
  document.contactform.adresse.value = '';
  document.contactform.telefon.value = '';
  document.contactform.email.value = '';
  document.contactform.postcode.value = '';
  document.contactform.price.value = '';
  document.contactform.message.value = '';

  $('.cd-popup').removeClass('is-visible');
  $('.notification').addClass('is-visible');
}

$(document).ready(function($) {

  /* ------------------------- */
  /* Contact Form Interactions */
  /* ------------------------- */
  $('#contact').on('click', function(event) {
    event.preventDefault();
    $('.contact').addClass('is-visible');
  });

  //close popup when clicking x or off popup
  $('.cd-popup').on('click', function(event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') || $(event.target).is('.lightbox-close')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
    }
  });
});
        
    const scriptURL = 'https://script.google.com/macros/s/AKfycbweCxkwPIgl4nes4iEaib5vbFqM88bpTuSZKIiI5TSgpgTjMW0/exec'
    const form = document.forms['contactform']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        closeForm();
    })