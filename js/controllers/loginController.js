mainApp.controller('loginController', function($scope, $http, $location, getDataService) {

  $scope.cleanErrField = function() {
    $scope.isErrMessage = false;
    $scope.errMessage = null
  }

  $scope.inputData = {};
  $scope.isErrMessage = false;

  $scope.redirect = function(root) {
    $location.url(root);
  }

  $scope.login = function(inputData, authUser) {
    if(authUser.$valid) {
      $http({
        method: "POST",
        url: 'http://localhost:8080/users/login',
        data: inputData
      }).then(response => {
        console.log(response);
        if(response.data.success) {
          localStorage.setItem("token", response.data.data.token);
          $scope.items = response.data.data;
          getDataService.setName(inputData.email);//TODO:
          $scope.redirect('/todo');
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

// headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1AZ21haWwuY29tIiwiX2lkIjoiNWNhNjJmMTUxYmNjMTE0N2Y2NWU5NWJmIiwiaWF0IjoxNTU0NDAyODIyLCJleHAiOjE1NTQ0ODkyMjJ9.R1t1OYc3wWBkYAx3Zv9OF1gntuswYdrrXf4rvcbqkac'}