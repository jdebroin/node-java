
var java=require("..");
java.classpath.push(".");
var bufferTest = java.newInstanceSync("BufferTest");

var buf1 = bufferTest.getArrayOfBytesSync();
console.log("out: " + JSON.stringify(buf1));

var buf2 = new Buffer([5, 4, 3, 2, 1]);
bufferTest.setArrayOfBytesSync(buf2);

var buf3 = bufferTest.getArrayOfBytesSync();
console.log("out: " + JSON.stringify(buf3));
