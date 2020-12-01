//Date日期对象核心API
//获取当前时间
var d = new Date();
console.log(d);

//1970/01/01经过的毫秒数
d = new Date(9999999999);
d = new Date("2019-10-01");
console.log(d);
//注意月份是从0开始的
d = new Date(2020, 3, 8, 12, 36, 55, 666);
console.log(d);

d = new Date();
//获取日期属性
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMinutes());
console.log(d.getDay());
// 设置日期属性
d.setDate(22);
d.setFullYear(2012);


d = new Date();
//根据世界时，把 Date 对象转换为字符串。
var i = d.toUTCString();
console.log(i);

//返回本地时间字符串
i=d.toLocaleString();
console.log(i);