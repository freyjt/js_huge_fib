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
            next = adder[1] + next;
        } else {
            remainder = 0;
            next = adder + next;
        }
    }
    if(remainder != 0) {
        next = remainder.toString() + next;
    }
    this.last = this.curr;
    this.curr = next;

}