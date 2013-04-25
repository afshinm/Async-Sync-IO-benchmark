Async vs. Sync I/O benchmark in NodeJs
=======================

This is a simple test for benchmarking Async and Sync I/O in NodeJs

Read the post here: http://afshinm.name/async-vs-sync-io-benchmark-in-nodejs/

##How to run

Download the code and run:

    node async.js

Then run this Apache Benchmark command:

    ab -n 1000 -c 1000 -vhr http://localhost:8080/
    
