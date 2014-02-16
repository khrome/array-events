array-events.js
===============

Is an Array extension class which adds asynchronous functions to Array as well as firing events on 'remove', 'add' or 'change'

events
------

*change* : fired any time an element is added 

emitter functions
-----------------


async functions
---------------

forEachEmission : execute serially

    [].forEachEmission(function(item, index, done){
        somethingAsynchronous(function(){
            done();
        });
    }, function(){
        //we're all done!
    });
    
forAllEmissions : execute all jobs in parallel

    [].forAllEmissions(function(item, index, done){
        somethingAsynchronous(function(){
            done();
        });
    }, function(){
        //we're all done!
    });
    
forAllEmissionsInPool : execute all jobs in parallel up to a maximum #, then queue for later

    [].forAllEmissionsInPool(poolSize, function(item, index, done){
        somethingAsynchronous(function(){
            done();
        });
    }, function(){
        //we're all done!
    });
    
utility functions
-----------------

contains : does the array contain this element?

    ['dog', 'cat', 'mouse'].contains('cat') //returns true;
    
combine : generate a new array that is the union of the provided arrays

    ['dog', 'cat'].combine(['mouse']) //returns a new array  ['dog', 'cat', 'mouse'];
    
erase : generate a new array without the member provided
    
    ['dog', 'cat', 'mouse'].erase('cat') //returns a new array ['dog', 'mouse'];
    

That's just about it, and even better you can open up the source and check it out yourself. Super simple.

Testing
-------
just run
    
    mocha

Enjoy,

-Abbey Hawk Sparrow