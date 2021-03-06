/*
 * Author: Vova Zaytsev <zaytsev@usc.edu>
 */
"use strict";

app.factory("NcldApiFactory", ["$http", "$location",
    function($http, $location) {

        return {

            getTestGraph: function(graphId) {
                return $http({
                    url:    "/prototype/json/" + graphId + ".json",
                    method: "GET"
                });
            }

        };


}]);
