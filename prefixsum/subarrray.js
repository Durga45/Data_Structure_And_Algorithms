var subarraySum = function(nums, k) {
    let currentSum = 0;
    let count = 0;
    let myMap = { 0: 1 }; 

    for (let num of nums) {
        currentSum += num;

        let diff = currentSum - k;

        if (diff in myMap) {
            count += myMap[diff];
        }

        if (currentSum in myMap) {
            myMap[currentSum] += 1;
        } else {
            myMap[currentSum] = 1;
        }
    }

    return count;
};
