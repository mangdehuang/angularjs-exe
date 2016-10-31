var myModel = angular.module("HelloAngular",[]);
  myModel.controller("helloAngular",['$scope',
  	function HelloAngular($scope){
  		$scope.greeting = {
  			text:"hello"
  		};
  	}
  ]);