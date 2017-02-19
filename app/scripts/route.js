(function(){
	'use strict';

	angular
		.module('profile')
		.config(['$httpProvider','$provide', '$locationProvider', '$compileProvider', '$stateProvider', '$urlRouterProvider',
			function ($httpProvider, $provide, $locationProvider, $compileProvider, $stateProvider, $urlRouterProvider) {
				//$locationProvider.html5Mode(true);
				$locationProvider.hashPrefix('!');
				$urlRouterProvider.otherwise('/');
	    	$stateProvider
	    	 .state('portfolio',{
		        abstract: true,
		        templateUrl: 'views/home.html'
		      })
	    	.state('portfolio.home',{
        	url: '/',
        	views: {
	          'mainBody': {
	            templateUrl: 'views/info.html'
	          },
	          'sideBar': {
	            templateUrl: 'views/sidenav.html'
	          },
	          'links': {
	            templateUrl: 'views/links.html'
	          }
	        }

	      })
	      .state('portfolio.home.about',{
        	url: 'about',
        	views: {
	          'mainBody@portfolio': {
	            templateUrl: 'views/about.html'
	          },
	        }
	      })
	      .state('portfolio.home.skills',{
        	url: 'skills',
        	views: {
	          'mainBody@portfolio': {
	            templateUrl: 'views/skills.html'
	          },
	        }
	      })
			}]).run(['$rootScope', function ($rootScope) {

	  }]);

})();