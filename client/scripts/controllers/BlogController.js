myApp.controller('BlogController', ['DataService', function(DataService){
    console.log('HEY! You. You are at the Blog Controller');
    var blog = this;
    blog.dataObject = DataService.dataObject;
}]);
