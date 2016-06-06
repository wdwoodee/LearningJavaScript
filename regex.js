// \需要转意
var reg = new RegExp("a(?=\\d)");
var strTest = "a9";
var a =reg.test(strTest);
console.log(a)
//print(a);

var reg = /a(?=\d)/
var strTest = "a9";
var a =reg.test(strTest);
console.log(a)

var str = "hostname dd*cc";
reg = new RegExp(".*?dd\\*cc.*?");
reg.test(str);

var str = "hostname dd*cc";
reg = /.*?dd\*cc.*?/;
reg.test(str);