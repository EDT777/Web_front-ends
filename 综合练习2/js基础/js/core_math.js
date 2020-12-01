// Math对象

//生成[0,1)之间的随机数
var i = Math.random();
console.log(i);

//生成[0,100)的随机整数
i = Math.floor(100*Math.random());
console.log(i);

//四舍五入
i=Math.round(3.14);
console.log(i);

//向下取整
i = Math.round(3.14);
console.log(i);

//向上取整
i = Math.ceil(3.14);
console.log(i);

// 要注意负数时的情况
i = Math.round(-3.14);
console.log(i);
i = Math.ceil(-3.14);
console.log(i);
i=Math.round(-3.14);
console.log(i);

//开平方
i = Math.sqrt(16);
console.log(i);

//平方
i = Math.pow(2,10);
console.log(i);