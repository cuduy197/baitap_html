//Bien - Variable  (Cài đặt ext Quokka.js sau đó nhấn Ctrl + K + Q)
//Khoi tao
var myVar; // var, let, const
console.log(this);
console.log(myVar);

//Các kiểu biến - Data types

//undefined - không xác định
console.log(typeof myVar);

//String - ký tự
myVar = "";
console.log(typeof myVar);
myVar = ``;
console.log(typeof myVar);

//Number - số
myVar = 3;
console.log(typeof myVar);
myVar = NaN;
console.log(typeof myVar);
myVar = Infinity;
console.log(typeof myVar);

//Object - đối tượng
myVar = ["1", 2, {}];
console.log(typeof myVar);
myVar = { x: 0, y: "test" };
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);

//Function - hàm
myVar = function name(thamSo) {};
console.log(typeof myVar);
myVar = thamSo => {};
console.log(typeof myVar);
myVar = thamSo => "ok";
console.log(typeof myVar);
