// 数字和字符串的相互转换

// 数字转字符串
var i = 3.1415926;

var s = i+""; //自动隐形转换
s = String(i);
s = i.toString();
s = i.toString(2); //2进制
s = i.toString(8); //8进制
s = i.toString(16); //16进制

s = i.toFixed(2); //指定小数点位数

s = i.toExponential(4); //指数记数法, 参数是小数点位数

console.log(s);
console.log(typeof(s));



// 字符串转数字
s = "3.1415926";
i = +s;

i=s-0;

i= Number(s);
//这个方法只能基于十进制进行转换，并且字符串中不能出现非数字的字符，否则将返回NaN。
i=Number("3a");

//解析整数和浮点数，尽可能解析更多数值字符
i= parseFloat("3");

//parseInt只解析整数, 会尽可能解析更多数值字符
i = parseInt("3.14");
i = parseInt("333abc666");

//解析16进制
i = parseInt("0x10");
//指定进制数 合法的取值范围是2~36
i = parseInt("10",16);
i = parseInt("10",2);

console.log(i);
console.log(typeof(i));