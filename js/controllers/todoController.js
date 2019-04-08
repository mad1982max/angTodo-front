
mainApp.controller('todoController', function($scope, $http, getDataService, todoAPI) {
  $scope.user = getDataService.getName();
  console.log('***', $scope.user);//receive data froom another controller
  $scope.token = localStorage.getItem('token');
  
  todoAPI.getTodoList($scope.token)
    .then(result => {
      if(result.data.success) {
        console.log('api', result.data.data);
        $scope.items = result.data.data;
      } else {
        throw new Error('some error')
      }      
    })
    .catch(err => console.log('err:', err))  

    $scope.filterAndCountLength = (arr, param, bool) => getSum(arr, param, bool)
  
    // $scope.changeParam = (id, param) => {
    //   console.log(id, param);
      
    //   let index = $scope.items.findIndex(val => val.id === id);
    //   console.log('index', index);
      
    //   let upgradeItem = $scope.items[index];
    //   upgradeItem[param] = !upgradeItem[param]
    //   $scope.items.splice(index, 1, upgradeItem);
    //   // console.log($scope.items);
      
    // }  
  
  let getSum = (arr, param, bool) => {
    console.log(arr, param, bool);
    
    return arr.filter(val => val[param] === bool).length
  }  
})