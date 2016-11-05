angular.module('hatcheryApp').controller('LoginController', function(accountService) {
this.allUsers = accountService.get();
console.log('in login');

});
