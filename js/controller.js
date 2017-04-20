// 把控制器的文件，定义成angular下的一个模块，然后再把该模块，注入到app.js里

//该模块的名字是随便取的。
//因为控制器需要数据请求的方法，所以需要把service.js里面定义的模块(ServiceModule)，注入到该文件里

angular.module('CtrlModule',['Service'])
/*firstCtrl*/

.controller("firstCtrl",['$scope','$ionicSlideBoxDelegate','getData',function($scope,$ionicSlideBoxDelegate,getData){
	//当$ionicSlideBoxDelegate 服务控制所有滑动框时触发该方法，用$getByHandle方法控制特定的滑动框实例
	//调用数据请求的函数
	getData.hotData();
	//$scope.$on 监听 接受广播数据
	//data就是广播的数据
	$scope.$on("hotdata",function(event,data){
		//$scope.hotList = data[0][3].split("\"")[1];	
		//$scope.hotList = JSON.parse(data[0].goodsBenUrl)[0];
		
		$scope.hotList = data;
		var arr = [];
		for(var i=0;i<data.length;i++){
			//push() 向数组末尾添加一个或者多个元素 并返回新的长度
			//JSON.parse() 将一个字符串转解析为一个JSON对象
			arr.push(JSON.parse(data[i].goodsBenUrl)[0]);
		}
		$scope.hotList = arr;
		//JSON.parse()将一个字符串解析成为一个JSON对象  
		//console.log(JSON.parse($scope.hotList));
		//console.log($scope.hotList);
	})
	
	//调用数据请求函数
	getData.allData();
	$scope.$on("alldata",function(event,data){
		$scope.listdata = data;
	})
	$scope.cartAdd = function(){
		location.href ="#/tabs/cart";
	}
	
	$scope.load_all = function(){
		console.log("aa");
		location.href = "index.html#/detail";
	}
}])
/*cartCtrl*/
.controller("cartCtrl",['$scope','getData',"$ionicHistory",function($scope,getData,$ionicHistory){
	getData.cartData();
	$scope.buy = function(){
		location.href = "index.html";
	}
	/*$scope.ret = function(){
		$ionicHistory.goBack();
	}*/
}])
/*classCtrl*/
.controller("classCtrl",['$scope',function($scope){
	$scope.isTrue = false;
	$scope.add = function(){
		$scope.isTrue = !$scope.isTrue;
	}
}])
/*ownCtrl*/
.controller("ownCtrl",['$scope',function($scope){
	
}])
/*moreCtrl*/
.controller("moreCtrl",['$scope',function($scope){
	
}])
/*MyCtrl*/
.controller('MyCtrl', function($scope){
	 $scope.shouldShowDelete = false;
	 $scope.shouldShowReorder = false;
	 $scope.listCanSwipe = true;
})

.controller("regCtrl",['$scope','getData',function($scope,getData){
	$scope.user = {};
	/*$scope.user.name = "";
	$scope.user.pwd = "";*/
	$scope.registera = function(){
		getData.register($scope.user.name,$scope.user.pwd);
	}
	$scope.reg_right = function(){
		location.href = "index.html#/tabs/login"
	}
	
}])
.controller("loginCtrl",['$scope','getData',function($scope,getData){
	$scope.made ={};
	$scope.login = function(){
		getData.login($scope.made.name,$scope.made.pwd);
	}
	$scope.login_right = function(){
		location.href = "index.html#/tabs/register";
	}
}])

.controller('indexCtrl',['$scope',function($scope){
	
}])

.controller('detailCtrl',['$scope',function($scope){
	
}])
