

angular.module('myApp', ['ionic','CtrlModule'])

.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
	//设置安卓机下面的tab选项卡，一直在下面
	$ionicConfigProvider.platform.android.tabs.position("bottom");
	$ionicConfigProvider.tabs.style('standard');
	
	
	//设置在安卓机下，头部的导航条标题一直居中
	$ionicConfigProvider.navBar.alignTitle('center');
	// $stateProvider ----> 调用它下面的state方法来定义一系列的路由

		//state方法里面有2个参数，

		//第一个参数就是ui-sref所需要的字符串
		//<a ui-sref="aa"></a>


		//第二个参数就是配置对象 {}
			//可以通过url，来给它设置路由  {url: '/home'}
			//controller，可以给路由下的模板设置控制器   {controller: 'MainCtrl'}
			//templateUrl/template  ,可以给路由设置显示的模板(设置页面)  {templateUrl: '模板的路径'}
			//abstract----> 可以把这个参数设置成true,这样的话，该路由就成了公共的一个部分
			//views ----> 这个参数，就是制定路由所显示在哪个ion-nav-view 
				//views: {}
					//这个对象里面是一个键值对的格式，键的值其实就是ion-nav-view上的name的属性值


	// $urlRouterProvider  -----> 调用他下面的otherwise方法来定义默认的路由
		//otherwise里面跟上路径就可以了
		//$urlRouterProvider.otherwise('tabs/article')
	
	$stateProvider

	.state('tabs',{
		//通过url，来给它设置路由 {url: '/home'} 主路由
		url: '/tabs',
		//abstract 可以把这个参数设置成为true，这样的话，该路由就成了公共的一个部分(让其他的路由公用)
		abstract: true,
		templateUrl: 'template/tabs.html'
	})
	//该路由它是基于前面选项卡路由的，所以
	.state('tabs.first',{
		url:'/first',
		//这个参数，就是制定路由显示子在哪个ion-nav-view(在index中)
		views: {
			"first-tab":{
				//可以给路由设置显示的模板  {template: '模板的路径'}
				templateUrl: 'template/first.html',
				controller: 'firstCtrl'
			}
		}
	})
	.state('tabs.classify',{
		url:'/classify',
		views: {
			"classify-tab":{
				templateUrl: "template/classify.html",
				controller:"classCtrl"
			}
		}
	})
	//views ----> 这个参数，就是制定路由所显示在哪个ion-nav-view 
	//views: {}
	//这个对象里面是一个键值对的格式，键的值其实就是ion-nav-view上的name的属性值
	.state('tabs.cart',{
		url:'/cart',
		views: {
			"cart-tab":{
				templateUrl: 'template/cart.html',
				controller: 'cartCtrl'
			}
		}
	})
	
	.state('tabs.own',{
		url:'/own',
		views:{
			"own-tab":{
				templateUrl: 'template/own.html',
				controller: 'ownCtrl'
			}
		}
	})
	.state('tabs.register',{
		url:'/register',
		views:{
			"own-tab":{
				templateUrl: 'template/register.html',
				controller: 'regCtrl'
			}
		}
	})
	.state('tabs.login',{
		url:'/login',
		views:{
			"own-tab":{
				//templateUrl 给路由设置显示的模板(页面)
				templateUrl: 'template/login.html',
				//给路由下的模板设置控制器
				controller: 'loginCtrl'
			}
		}
	})
	.state('detail',{
		url: '/detail',
		
				//templateUrl 给路由设置显示的模板
				templateUrl: 'template/detail.html',
				//给路由下的模板设置控制器
				controller: 'detailCtrl'
			
		
	})
	.state('tabs.more',{
		//通过url来设置路由
		url:'/more',
		views: {
			"more-tab":{
				templateUrl: 'template/more.html',
				controller: 'moreCtrl'
			}
		}
	})
	$urlRouterProvider.otherwise('/tabs/first')
}])
