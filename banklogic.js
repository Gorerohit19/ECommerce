
    var balance=50000;

    exports.withdraw=function(amount){
        balance=balance-amount;
    };
    
    exports.deposit=function(amount){
        balance=balance + amount;
    };
      
    exports.getBalance=function(){
        return balance;
    };
