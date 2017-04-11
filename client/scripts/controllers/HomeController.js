myApp.controller('HomeController', ['DataService', function(DataService){
    var home = this;
    home.message = 'Welcome Home.';

    if(!home.someVal){
      home.someVal = 1;
    }
    home.someVal += 1;
    console.log(home.someVal);

    home.dataObject = DataService.dataObject;
}]);
