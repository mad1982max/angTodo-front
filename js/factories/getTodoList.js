mainApp.factory('todoAPI', function($http) {
  let dataFactory = {};
  dataFactory.getTodoList = function(token) {
    return $http({
      method: "GET",
      url: 'http://localhost:8080/notes/',
      headers: {'x-access-token': token}
    })    
  }
  return dataFactory;
})