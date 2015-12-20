

function main( ) {
    var fibObj = require("./huge_fib.js");
    var fibObj = new fibObj.HugeFib();

    var fibby;
    for(i = 0; i < 100; i++ ) {
        fibby = fibObj.getNext();
        console.log("i: " + fibby.index + " fib: " + fibby.fib);
    }
}