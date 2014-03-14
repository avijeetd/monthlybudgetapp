'use strict';

var myappControllers =  angular.module('myApp.controllers', []);

  myappControllers.controller('MyCtrl1',[ "$scope", "$http", "$log",   function(scope, http, log ) {
//	scope.expenses = [{"id":1,"amount":1234,"description":"namdhari","date":1384885800000},{"id":2,"amount":3000,"description":"total","date":1384885800000}];
	scope.expenses = [];
        scope.balances = [];
        
        scope.currentDate = new Date()
        scope.day = scope.currentDate.getDate()
        scope.month = scope.currentDate.getMonth() + 1
        scope.year = scope.currentDate.getFullYear()
        scope.currentdate = scope.year + "-" + scope.month + "-" + scope.day ;
        
        
        
	scope.getExpensesData = function(url, page,log) {
			http.get(url, page).success(function(data, status, headers, config) {
			scope.expenses = data;
			console.log('get expense data success'+data);
		}).error(function(data, status, headers, config) {
			alert('Error retrieving data ' + status);
		});
	}
        
        scope.getBalanceData = function(url, page,log) {
			http.get(url, page).success(function(data, status, headers, config) {
			scope.balances = data;
			console.log('get balance data success'+data);
		}).error(function(data, status, headers, config) {
			alert('Error retrieving data ' + status);
		});
	}
        
            
	scope.getExpenses = function() {		
		
            
            
            scope.getExpensesData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/expenses?month="+scope.month, null);
	}
        
        
        scope.getBalances = function() {
            
                //get current month
                //get all bucket types
                
		scope.getBalanceData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/expenses/balance?month="+scope.month, null);
	}
       
  }]);
  
  myappControllers.controller('MyCtrl2',[ "$scope","$http", "$log", function(scope,http, log) {
       
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        var currentdate = year + "-" + month + "-" + day ;
        
        scope.currentdate=currentdate;
        
        scope.postData = function(url, data,config) {
			http.post(url, data).success(function(data, status, headers, config) {
			console.log('post success'+ data );
		}).error(function(data, status, headers, config) {
			alert('Error posting data ' + data);
		});
	}
        
        //scope.expenseform = {"id":1,"amount":1234,"description":"namdhari","date":1384885800000};

       scope.saveExpenses = function(){
           scope.expenseform.id='1'; 
           scope.expenseform.date=currentdate;
            console.log(scope.expenseform);
            scope.postData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/expenses", scope.expenseform);
            scope.expenseform='';
        }
        
        scope.buckets = [];
        
        scope.getData = function(url, page,log) {
			http.get(url, page).success(function(data, status, headers, config) {
			scope.buckets = data;
			console.log('get Data success');
		}).error(function(data, status, headers, config) {
			alert('Error retrieving data ' + status);
		});
	}	
	scope.getBuckets = function() {		
		scope.getData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/bucketlimits", null);
	}
  }]);
  
   myappControllers.controller('MyCtrl3',[ "$scope","$http", "$log", function(scope,http, log) {
       
  
        scope.postData = function(url, data,config) {
			http.post(url, data).success(function(data, status, headers, config) {
			console.log('post success'+ data );
		}).error(function(data, status, headers, config) {
			alert('Error posting data ' + data);
		});
	}
        
        //scope.bucketform = {"bucketTypeId":1,"bucketType":"Misc","monthlyLimit":25000};

       scope.saveNewBucket = function(){
           scope.bucketform.bucketTypeId='1'; 
           console.log(scope.bucketform);
           scope.postData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/bucketlimits", scope.bucketform);
           scope.bucketform='';
        }
       
        scope.updateBucket = function(){
           
           console.log(scope.bucketform);
           scope.postData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/bucketlimits", scope.bucketform.bucketTypeId);
        }
        
      
        
        scope.buckets = [];
        
        scope.getData = function(url, page,log) {
			http.get(url, page).success(function(data, status, headers, config) {
			scope.buckets = data;
			console.log('get Data success');
		}).error(function(data, status, headers, config) {
			alert('Error retrieving data ' + status);
		});
	}
        
	scope.getBuckets = function() {		
		scope.getData("http://monthlybudgetapp.avijeetd.cloudbees.net/app/webresources/bucketlimits", null);
	}
        /*
        scope.setBucket = function(bucket) {		
	scope.bucketform = bucket;
              //  scope.bucketform = bucket;
	}
        */
    
  }]);
