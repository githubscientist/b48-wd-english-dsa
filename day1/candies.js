/**
* @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// the function returns true if the totalCandies is greater than all the other kid's candies and false otherwise
// var isGreater = function(totalCandies, candies, i){
//     // assume that the totalCandies is greater than all the other kids candies
//     let assumption = true;

//     // iterate/traverse through the candies array except the index i <- index
//     for(let index=0; index<candies.length; index++){
//         // except the index i <- index
//         if(index != i){
//             // check and validate our assumption
//             if(totalCandies < candies[index]){
//                 // update the assumption
//                 assumption = false;
//             }
//         }
//     }

//     // return the assumption
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//                 break;
//             }
//         }
//     }
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// // Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // intialize a boolean array of length n -> candies.length <- result
//     let result = [];

//     // iterate/traverse the candies array <- i = 0 to candies.length-1
//     for(let i=0; i<candies.length; i++){
//         // for every kid's candy @ i
//         // find the total number of candies, totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kid's candies
//         // except the current kid @ index i
//         if(isGreater(totalCandies, candies, i)){
//             // if true -> push true to the result array
//             result.push(true);
//         } else {
//             // else if false -> push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array <- boolean of length n
//     return result;
// };

// Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     // intialize a boolean array of length n -> candies.length <- result
//     let result = [];

//     // find greatestCandy <- using the library function
//     let greatestCandy = Math.max(...candies);

//     // iterate/traverse the candies array <- i = 0 to candies.length-1
//     for(let i=0; i<candies.length; i++){
//         // for every kid's candy @ i
//         // find the total number of candies, totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than or equal to the greatestCandy
//         if(totalCandies >= greatestCandy){
//             // if true -> push true to the result array
//             result.push(true);
//         } else {
//             // else if false -> push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array <- boolean of length n
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => {
//         return (candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => {
//         return (candy + extraCandies >= greatestCandy);
//     });
// };

// Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// Time Complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

/*
    
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3] <- length n
              [0][1][2][3][4]
    extraCandies = 3

    result = [true, true, true, false, true] <- length n

    i = 0
        totalCandies = candies[i] + extraCandies
                     = candies[0] + extraCandies
                     = 2 + 3
                     = 5 >= [3, 5, 1, 3]
                            [1][2][3][4]
                    
        5 >= 3 true
        5 >= 5 true
        5 >= 1 true
        5 >= 3 true
    
    i = 1
        totalCandies = candies[i] + extraCandies
                     = candies[1] + extraCandies
                     = 3 + 3
                     = 6 >= [2, 5, 1, 3]
                            [0][2][3][4]
        
        6 >= 2
        6 >= 5
        6 >= 1
        6 >= 3
    
    i = 2
        totalCandies = candies[i] + extraCandies
                     = candies[2] + extraCandies
                     = 5 + 3
                     = 8 >= [2, 3, 1, 3]
                            [0][1][3][4]
    
    i = 3
        totalCandies = candies[i] + extraCandies
                     = candies[3] + extraCandies
                     = 1 + 3
                     = 4 >= [2, 3, 5, 3]
                            [0][1][2][4]
    
    i = 4
        totalCandies = candies[i] + extraCandies
                     = candies[4] + extraCandies
                     = 3 + 3
                     = 6 >= [2, 3, 5, 1]
                            [0][1][2][3]
    
    2. Algorithm

        - first approach: O(N^2)
        - second approach: O(N)

    // intialize a boolean array of length n -> candies.length <- result

    // iterate/traverse the candies array <- i = 0 to candies.length-1
        // for every kid's candy @ i
        // find the total number of candies, totalCandies = candies[i] + extraCandies

        // check if the totalCandies is greater than all the other kid's candies
        // except the current kid @ index i

            // if true -> push true to the result array
            // else if false -> push false to the result array
    
    // return the result array <- boolean of length n
*/