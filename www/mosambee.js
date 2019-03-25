var exec = require('cordova/exec');

exports.coolMethod = function (name,mobile,amount,invoice, success, error) {
    cordova.exec(success, sayHelloFailure, "PaymentPlugin", "coolMethod", [name,mobile,amount,invoice]);
    console.log("here getting click");
    
	 function sayHelloFailure(data){
        alert("Fail: " + data);
        //document.getElementById("result").innerHTML = data;

      }
};
exports.printMethod = function (propertyNo,receiptNo,
            date,ownerName,mobileNo,totalamt,paidamt,outstandAmt,advanceAmt,time,orgName,payMode,chequeNo,
            chequeDate,bankName,cardNumber,user,wardNo,mobileTax,proprtyAddress,uuid,copy,zone,ward, success, error) {
    cordova.exec(sayHelloSuccess, sayHelloFailure, "CustomPlugin", "printer", [propertyNo,receiptNo,
            date,ownerName,mobileNo,totalamt,paidamt,outstandAmt,advanceAmt,time,orgName,payMode,chequeNo,
            chequeDate,bankName,cardNumber,user,wardNo,mobileTax,proprtyAddress,uuid,copy,zone,ward]);
    console.log("here getting click");
    
	 function sayHelloFailure(data){
        alert("Fail: " + data);
        //document.getElementById("result").innerHTML = data;

      }
};
