mainApp.service('getDataService', function() {
  this.userData = null;
  this.setName = function(data) {
    this.userData = data;
  }
  this.getName = function() {
    return this.userData
  }
})