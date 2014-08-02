(function(){

	var app = angular.module('ArticlesLoader', []);

	// Service
	app.factory('Articles', ['$http', function($http){
	  return{
	    get: function(callback){
	      $http.get('/data/article-data.json').success(function(data){
	        callback(data);
	      })
	    }
	  }
	}]);

	// Controller
	var ArticlesController = function($scope, $http, Articles){
		
		Articles.get(function(data){
			$scope.limit = 8;
	    $scope.articles = data; 
	    $scope.article_count = data.length;
	    $scope.sortLabels = ["Title", "Most Recent"];
			$scope.sortLabel = 'Title';

	  });

		$scope.articleOrder = function(article) {
			
			switch ($scope.sortLabel) {
        
        case "Title":
      		$scope.direction = false;
          return article.title;
          break;
        
        case "Most Recent":
      		$scope.direction = true;
					return new Date(article.date.plain);
          break;
			}
		};

		$scope.equalHeight = function(){

		};

		$scope.loadMore = function(){
			$scope.limit += 8;
		};
	};

	app.controller('ArticlesController', ['$scope', '$http', 'Articles', ArticlesController]);


	

}());