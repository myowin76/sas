(function(){

	var app = angular.module('ArticlesLoader', []);

	var ArticlesController = function($scope, $http){
		
		$scope.init = function(){
			$http.get("/data/article-data.json").success(function(data){
				
				$scope.article_count = data.length;
				$scope.articles = data;

				$scope.sortLabels = ["Title", "Most Recent"];

				$scope.sortLabel = 'Title';

			}).error(function(error) {
 
      });
		};


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
			
		}

		$scope.loadMore = function(){
			console.log("load more please");
		};
	};

	app.controller('ArticlesController', ['$scope', '$http', ArticlesController]);

}());