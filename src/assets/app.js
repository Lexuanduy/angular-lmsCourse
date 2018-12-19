var app = angular.module('angularjs-starter', []);

  app.controller('MainCtrl', function($scope) {
    $scope.selectOptions = ["Mobile",
                            "Office",
                            "Home"     
    ];

  $scope.choices = [{"id": 1,"type":"Mobile","name":""}, 
                    {"id": 2,"type":"Mobile","name":""}];
    
  
  $scope.index = $scope.choices.length;
  
  $scope.addNewChoice = function() {
    var newItemNo = ++$scope.index;
    $scope.choices.push({'id':newItemNo, "type":"Mobile","name":""});
    
    
  };
    
  $scope.removeChoice = function(id) {
  
        if($scope.choices.length<=1){
            alert("input cannot be less than 1");
            return;
        }
  
  
        var index = -1;
    		var comArr = eval( $scope.choices );
    		for( var i = 0; i < comArr.length; i++ ) {
    			if( comArr[i].id === id) {
    				index = i;
    				break;
    			}
    		}
    		if( index === -1 ) {
    			alert( "Something gone wrong" );
    		}
    		$scope.choices.splice( index, 1 );
  };
  
});