!function(){var a=angular.module("ArticlesLoader",[]);a.factory("Articles",["$http",function(a){return{get:function(b){a.get("data/article-data.json").success(function(a){b(a)})}}}]);var b=function(a,b,c){c.get(function(b){a.limit=8,a.articles=b,a.article_count=b.length,a.sortLabels=["Most Recent","Title"],a.sortLabel="Most Recent"}),a.articleOrder=function(b){switch(a.sortLabel){case"Title":return a.direction=!1,b.title;case"Most Recent":return a.direction=!0,new Date(b.date.plain)}},a.equalHeights=function(){},a.loadMore=function(){a.limit+=8}};a.controller("ArticlesController",["$scope","$http","Articles",b])}();