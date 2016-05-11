angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http ) {



  $scope.login = function (user) {
    console.log(JSON.stringify(user));



    $http.post('http://192.168.6.55:8100/user/login',user).success(function(data){
      console.log("success!!")
    });
/*
    $http({
      url:'http://localhost:8088/user/login',
      method:'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data:user,

    })*/


/*    $http.post("http://localhost:8088/user/login",user).then(function(response) {
      response.header("Access-Control-Allow-Origin", "*");
      users = response.data.results;
      return response.data.results;
    });*/
 /*   .success(function(){
      console.log("success!!");
    })
      .error(function() {
        console.log("error!!");
      });

*/


  };

  $scope.userController = function ($scope,$http) {
  /*  $http.get("http://localhost:8088/user/all").success(function (response) {
      $scope.users = response;
    });*/

    $http({
      url:'http://192.168.6.55:8100/user/all',
      method:'GET'
    })
      .success(function(response){
      $scope.users = response;
    })
  }


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
