angular.module("exampleApp.Filters", [])
    .filter("dayName", function () {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thureday", "Friday", "Saturday"];
        return function (input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        };
    })