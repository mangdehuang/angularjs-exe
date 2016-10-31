function eventController($scope){
	$scope.count = 0;
	$scope.$on("myevent",function(){
		$scope.count++;
	});
}
