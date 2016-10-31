/**
 *1.controller 方法
 *2.为一个app定义多个controller
 */ 

var app = angular.module("myApp",[]);
app.controller("myCtrl2",function($scope){
	$scope.aaa = "aa";
	$scope.array1 = [1,2,3];
	$scope.names = [
		{country:"a",name:"a1"},
		{country:"b",name:"b2"},
		{country:"b",name:"b2"},
		{country:"c",name:"c1"}
		];
});
app.controller("myCtrl",function($scope){
	$scope.lastname = "111";
	$scope.firstname = "222";
	$scope.fullname = function(){
		return $scope.lastname + $scope.firstname;
	};
	$scope.f2 = function(){
		return $scope.lastname;
	};
});

