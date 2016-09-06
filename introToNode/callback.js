module.exports = function() {

    var maxTime = 1000;

    //call takes random amount of time : < 1s
    var evenDoubler = function(v, callback) {

        var waitTime = Math.floor(Math.random() * (maxTime + 1));
        var result = v % 2 != 0 ? new Error('Odd input!') : null

        setTimeout(function() { callback(result, v * 2, waitTime)}, waitTime);

    };

    var handleResults = function(err, results, time) {
        if(err) {
            console.log("Error: " + err.message);
        }
        else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
    };

    //We don't control when these callbacks get invoked
    evenDoubler(2, handleResults);
    evenDoubler(7, handleResults);
    evenDoubler(4, handleResults);

    //attempt to call it 10 times
    for(var i = 0; i < 10; i++) {
        console.log("Calling evenDoubler for value: " + i);
        evenDoubler(i, handleResults);
    }

    console.log('------');

    //Too much of a good thing
    //Christmas Tree problem
    //Smart use of named functions, modules, event emitters, and streams
    //will solve this problem

}