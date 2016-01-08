(function () {
    'use strict';

    angular.module('jstestApp').factory('MenuService', ['$http', function ($http) {
        var service = {
                get: get
            };

        return service;

        function get () {
					return $http.get('/data/menu.json');
				}
			}]);
}());
