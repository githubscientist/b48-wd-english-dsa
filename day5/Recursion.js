/*
    Recursion: Algorithm

    Recursion is a function that calls itself!

    Example:
*/



// recursion function
// function printHello() {
//     console.log('hello');
//     printHello();
// }

// printHello();

/*
    printHello()
        - console.log('hello')
        - printHello()  
            - console.log('hello')
            - printHello()
                - console.log('hello')
                - printHello()
                    ...
                    ...
                    ...
*/


// to print hello message for N times

// iterative function
// let times = 5;

// for (let i = 1; i <= times; i++){
//     console.log('hello');
// }

// recursive function
function printHello(times) {
    if (times == 0) return;

    console.log('hello');
    printHello(times - 1);
}

let times = 5;
printHello(times);

/*
    Recursion Tree:

    printHello(3)
        - console.log('hello')
        - printHello(2)
            - console.log('hello')
            - printHello(1)
                - console.log('hello')
                - printHello(0)
                    - 0 == 0; true; return
*/