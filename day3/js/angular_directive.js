var myModule = angular.module("Mymodule",[]);
 myModule.directive("hello",function(){
 	return{
 		restrict:"E",
 		template:"<div>hi </div>",
 		replace:true
 	};
 });