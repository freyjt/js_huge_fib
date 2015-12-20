module.exports = {
    HugeFib: HugeFib
}

function HugeFib( ) {
    this.last  = '1';
    this.curr  = '1';
    this.index =  2; //1 indexed
}
HugeFib.prototype.nextFib = function( ) {
    
    this.index += 1;
    var next = "";

    var remainder = 0;
    var i;
    var adder = 0;
    for(i = 0; i < this.curr.length; i++) {
        if( typeof(this.last[i]) !== 'undefined' ) {
            adder = parseInt(this.last[i]);
        } else { adder = 0; }

        adder += parseInt( this.curr[i] );
        adder += parseInt( remainder );

        adder  = adder.toString();

        //adder is between 0 and 19 inclusive
        if( adder.length > 1) {
            remainder = 1;
            next = next + adder[1];
        } else {
            remainder = 0;
            next = next + adder;
        }


    }
    if(remainder !== 0) {
        next = next + remainder.toString();
    }
    this.last = this.curr;
    this.curr = next;

}
HugeFib.prototype.getNext = function( ) {
    this.nextFib( );
    var i;
    var output = '';
    for(i = 0; i < this.curr.length; i++) {
        output = this.curr[i] + output ;
    }
    return { fib: output, index: this.index };
}
HugeFib.prototype.getCurrent = function( ) {
    return { fib: this.curr, index: this.index };
}