angular.module('starter.controllers', [])

.controller('newsCtrl', function($scope, News){
    $scope.news = News.all();
})

.controller('detailCtrl', function($scope, $stateParams, News){
    $scope.detail = News.get($stateParams.newsId);
})