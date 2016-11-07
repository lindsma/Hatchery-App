// jquery event listeners

$('body').on('click', '.close', function(event) {
  $('.modal').hide();
});

$('body').on('click', 'a.register', function(event) {
  $('.register.modal').show();
});

$('body').on('click', 'a.login', function(event) {
  $('.login.modal').show();
});

// $('body').on('keypress', function(event) {
//   if (event.which === 13) {
//     $('.modal').remove();
//   }
// });
