// Declare function
 
exports.show=function(){
    var result=99;
    result++;
    console.log(result); 
};
exports.display=function(){
       var banner="Welcome to Javascript";
      console.log(banner);
};
// Arithmatic Opration
exports.add=function(num1, num2){
    var temp=num1 + num2;
    return temp;
};
exports.subtract=function(num1, num2){
     var temp=(num1 - num2);
     return temp;
};
// Invoke function
/*show();
display();
var newResult=add(100,50);
console.log("Addition Result =" + newResult);*/