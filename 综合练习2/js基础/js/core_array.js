// 数组核心API

var items = [1,2,3,4,5,6,7,8];
console.log(items);

items.push(50);
console.log(items);

var i = items.pop();
console.log(i);
console.log(items);

// 检测数组元素的每个元素是否都符合条件。
i = items.every(function(item){
	return item%2 == 0;
});
console.log(i);

// 检测数值元素，并返回符合条件所有元素的数组。
i = items.filter(function(item){
	return item%2 == 0;
});
console.log(i);

// 返回符合传入测试（函数）条件的第一个数组元素。
i = items.find(function(item){
	return item%2 == 0;
});
console.log(i);

//搜索数组中的元素，并返回它所在的位置。
i = items.indexOf(8);
console.log(i);

//通过指定函数处理数组的每个元素，并返回处理后的新数组。
i= items.map(function(element, index){
	return "位置"+index+ "的元素的平方："  + Math.sqrt(element);
});
console.log(i);

i=0;
// 数组每个元素都执行一次回调函数。
items.forEach(function(element){
	i+=element;
});
console.log(i);

//将数组元素计算为一个值（从左到右）。
i = items.reduce(function(total, element,index){
	return total + element;
});
console.log(i);

//扩展运算符
var arr1 = [1,2,3,4,5];
var arr2 = [1,2,5,6,7,8];
var arr3 = [...arr1, ...arr2];
console.log(arr3);