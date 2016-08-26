var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/spike", {
        templateUrl: "/views/partials/spike.html",
        controller: "spikeController"
    }).
    when("/jet", {
        templateUrl: "/views/partials/jet.html",
        controller: "jetController"
    }).
    when("/ed", {
        templateUrl: "/views/partials/ed.html",
        controller: "edController"
    }).
    otherwise({
        redirectTo: "/spike"
    });
}]);