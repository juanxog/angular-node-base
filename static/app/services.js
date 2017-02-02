app.service('User', function($http,$q){

    var data = {};
    
    function SetUser(user){
    
       data["user"] = user;
       
    }   
    
    function test(){
    
       console.log("HOLA");
       
    }   
    
    
    return {
       
        test: test
       
    }
});




app.config(function($httpProvider){
    $httpProvider.interceptors.push(function($q) {
      return {
       'responseError': function(rejection) {
          //return $q.reject(rejection);
          return rejection;
        }
      }
    })
});