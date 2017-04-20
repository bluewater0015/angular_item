
angular.module("Service",[])

//$rootScope  注入广播
.service('getData',['$http','$rootScope',function($http,$rootScope){
	return {
		"hotData":function(){
			//$http.jsonp(url,{"params":{参数}}).then(请求数据成功的函数，请求数据失败的函数)
			$http.jsonp("http://datainfo.duapp.com/shopdata/getBanner.php",{
				"params": {
					'callback': "JSON_CALLBACK"
				}
			}).then(function(response){
				//请求成功
				
				//response是一个返回值的对象，里面 包含了比如状态码，真正的数据
				//我们需要的数据 在response对象下的data
				
				//response.data又是一个json对象
				
				//通过广播把获取到的数据传输出去
				//我们在定义广播时，一定要定在根作用域下
				//broadcast有两个参数
				//第一个参数是广播的名字(我们给它取的名字)
				//第二个参数是我们要广播的数据
				$rootScope.$broadcast("hotdata",response.data);
				//console.log(response.data);	
			},function(error){
				alert("请求失败");
			})
		},
		"allData": function(){
			//$http.jsonp(url,{"params":{参数}}.then(请求数据成功的函数，请求数据失败的函数))
			$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php",{
				"params": {
					'callback': "JSON_CALLBACK"
				}
			}).then(function(response){
				$rootScope.$broadcast("alldata",response.data);
//				console.log(response.data);
			},function(error){
				alert("请求失败");
			})
		},
		"cartData":function(){
			//$http.jsonp(url,{"params":{参数}}.then(请求数据成功的函数，请求数据失败的函数))
			$http.jsonp("http://datainfo.duapp.com/shopdata/getCar.php",{
				"params": {
					'callback': "JSON_CALLBACK"
				}
			}).then(function(response){
				$rootScope.$broadcast("cartdata",response.data);
//				console.log(response.data);
			},function(error){
				alert("请求失败");
			})
		},
		"register": function(UserID,password){
			$http.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
				"params": {
					'status': "register",
					'userID': UserID,
					'password': password
				}
			}).then(function(response){
				if(response.data==0){
					console.log("用户名重名");
				}else if(response.data==2){
					console.log("数据库报错！");
				}else{
					console.log('注册成功');
					location.href = "index.html#/tabs/login";
				}
				console.log("数据请求成功");
			},function(error){
				console.log("数据请求失败");
			})
		},
		"login": function(UserID,password){
			//http.jsonp(url,{"params":{参数}}).then(function(response){},function(error){})
			$http.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
				"params": {
					"status": "login",
					"userID": UserID,
					"password": password
				}
			}).then(function(response){
				console.log(response);
				if(response.data == 0){
					console.log("用户名不存在");
				}else if(response.data ==2){
					console.log("用户名密码错误");
				}else{
					console.log("登录成功");
					location.href = "index.html";
				}
				console.log("数据请求成功");
			},function(error){
				alert("数据请求失败");
			})
		}
	}
}])
