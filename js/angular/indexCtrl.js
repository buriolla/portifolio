'use strict';
app.controller('indexCtrl', function($scope, $translate) {
    $scope.lang = 'br';
    $scope.changeLanguage = function () {
        if($scope.lang == 'br') {
            $translate.use('en');
            $scope.lang = 'en';
        } else {
            $translate.use('br');
            $scope.lang = 'br';
        }
    };
});