app.directive('loading', function() {
  return {
    templateUrl: "views/directives/loading.html"
  };
});

app.directive("fileread", [function () {
    return {
        restrict: 'A',
        scope: {
            handler: '&'
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.file = changeEvent.target.files[0];
                });
            });
        }
    }
}]);

