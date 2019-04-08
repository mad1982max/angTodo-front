// let app = angular.module("todoApp", []);




// app.controller("appController", ($scope, $http) => {

//   $http({
//     method: "GET",
//     url: 'http://localhost:8080/notes/',
//     headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1AZ21haWwuY29tIiwiX2lkIjoiNWNhNjJmMTUxYmNjMTE0N2Y2NWU5NWJmIiwiaWF0IjoxNTU0NDAyODIyLCJleHAiOjE1NTQ0ODkyMjJ9.R1t1OYc3wWBkYAx3Zv9OF1gntuswYdrrXf4rvcbqkac'}
//   }).then(response => {
//     console.log(response);
//     if(response.data.success) {
//       $scope.items = response.data.data
//     } else {
//       throw new Error('errrrrr');
//     }
//   }).catch(err => console.log('some.error', err.message));

//   $scope.curUser = 'Maks';
  
  
  
//   $scope.items = todoList;
 
//   $scope.add = (data) => {
//     $scope.items.push({id: ++$scope.inc, name:data, isImportant: false, isActive: true, whenAdd: 'monday', duration: '1w'});
//   }

  

//   $scope.inc = $scope.items[$scope.items.length - 1].id;

//   $scope.filterAndCountLength = (arr, param, bool) => getSum(arr, param, bool)

//   $scope.changeParam = (id, param) => {
//     console.log(id, param);
    
//     let index = $scope.items.findIndex(val => val.id === id);
//     console.log('index', index);
    
//     let upgradeItem = $scope.items[index];
//     upgradeItem[param] = !upgradeItem[param]
//     $scope.items.splice(index, 1, upgradeItem);
//     // console.log($scope.items);
    
//   }
  
// })

// let todoList = [
//   {id:1, name: '1', isImportant: true, isActive: true, whenAdd: 'sunday', duration: '1w' },
//   {id: 2, name: '2', isImportant: true, isActive: true, whenAdd: 'monday', duration: '1h'},
//   {id: 3, name: '3', isImportant: true, isActive: true, whenAdd: 'tuesday', duration: '2h'},
//   {id: 4, name: '4', isImportant: true, isActive: true, whenAdd: 'wednesday', duration: '0.5h'},
// ]

// let getSum = (arr, param, bool) => {
//   return arr.filter(val => val[param] === bool).length
// }

