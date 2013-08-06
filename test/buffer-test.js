
var java = require("../testHelpers").java;

var nodeunit = require("nodeunit");
var util = require("util");

//java.classpath.push(".");
exports['Buffer'] = nodeunit.testCase({
    setUp: function(callback) {
        this.bufferTest = java.newInstanceSync("BufferTest");
        callback();
    },

    "get-set": function(test) {
        var buf1 = this.bufferTest.getArrayOfBytesSync();
        var buf2 = new Buffer([1, 2, 3, 4, 5]);
        test.deepEqual(buf1.toJSON(), buf2.toJSON());

        var buf3 = new Buffer([5, 4, 3, 2, 1]);
        this.bufferTest.setArrayOfBytesSync(buf3);

        var buf4 = this.bufferTest.getArrayOfBytesSync();
        test.deepEqual(buf3.toJSON(), buf4.toJSON());
        test.done();
    }
});
