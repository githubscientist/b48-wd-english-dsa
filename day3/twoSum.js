/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(N^2)
// var twoSum = function(nums, target) {
//     // Find all the pairs of the array nums
//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             // for every pair of numbers
//             // find the sum of the pair and
//             let sum = nums[i] + nums[j];
//             // check if the sum is equal to the target
//             if(sum == target){
//                 // if true, return the indices of the pair as an array       
//                 return [i, j];
//             }
//         }
//     }
// };

/*
    Time Complexity = ?

    For N = 4, total executions = 3 + 2 + 1 = 6
    For N = 5, total executions = 4 + 3 + 2 + 1 = 10
    For N = 6, total executions = 5 + 4 + 3 + 2 + 1 = 15

    total executions = sum of first N natural numbers - N
                     = [N * (N+1)]/2 - N
                     = [N^2 + N]/2 - N
                     = 1/2 N^2 + 1/2N - N
                     = 1/2 * N^2 - N/2 
                     = N^2 - N
                     = O(N^2)

    1/2 * N^2 - N/2 = 1/2[N^2 - N]
                    = 1/2[N * (N - 1)]
                    = [N * (N-1)]/2
*/

/*

i = 0
    (2, 7) ; j = 1
    (2, 11); j = 2
    (2, 15); j = 3

i = 1
    (7, 11); j = 2
    (7, 15); j = 3

i = 2
    (11, 15); j = 3
*/  

// Time Complexity: O(N)
var twoSum = function(nums, target) {
    // O(N)
    let nums2d = nums.map((value, index) => [index, value]);

    // sort the array nums2d in ascending order
    // O(N)
    nums2d.sort((a, b) => a[1] - b[1]);

    // create two pointers left & right
    // l -> index of the first element in nums
    // O(1)
    let l = 0;

    // r -> index of the last element in nums
    // O(1)
    let r = nums2d.length - 1;

    // O(N)
    // do the following iteratively until l >= r
    while(l < r){
        // add the numbers pointed by l & r <- sum
        let sum = nums2d[l][1] + nums2d[r][1];

        // check if the sum == target
        if(sum == target){
            // return the indices
            return [nums2d[l][0], nums2d[r][0]];
        } else if(sum < target){
            // check if the sum < target
            // l = l + 1
            l = l + 1;
        } else if(sum > target){
            // check if the sum > target
            // r = r - 1
            r = r - 1;
        }
    }
};

/*
    Total time complexity, T(N) = N + N + 1 + 1 + N
                                = 3N + 2
                                = O(N)
*/