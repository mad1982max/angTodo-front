mainApp.controller('signController', function($scope, $http) {

  $scope.cleanErrField = function() {
    $scope.isErrMessage = false;
    $scope.errMessage = null
  }

  $scope.redirect = function(root) {
    $location.url(root);
  }

  $scope.inputData = {};
  $scope.isErrMessage = false;

  $scope.sign = function(inputData, authUser) {
    if(authUser.$valid) {

      console.log(inputData);
      $http({
        method: "POST",
        url: 'http://localhost:8080/users/create',
        data: inputData
        
      }).then(response => {
        console.log(response);
        if(response.data.success) {          
          $scope.redirect('/login')

        } else {
          $scope.errMessage = response.data.msg;
          $scope.isErrMessage = true;

          throw new Error('errrrrr');
        }
      }).catch(err => console.log('some.error', err.message));
      
    } else {
      $scope.isErrMessage = true;
    }    
  }
  
})