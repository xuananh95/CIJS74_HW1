/**
 * function to find the most frequent element in an array and its number of occurence
 * @param {*} arr input array
 * @returns {value: mostFrequentElement, count: maxCount} object containing the most frequent value and its number of occurences
 */

const getMostFrequentElement = (arr) => {
    if (arr.length == 0){
        return null;
    }
    let temp = {};
    let mostFrequentElement = arr[0], maxCount = 1;
    // loop through the array
    for (let i = 0; i < arr.length; i++){
        // if the element is not a key in the object, create a new key-value pair
        if (temp[arr[i]] == undefined){
            temp[arr[i]] = 1;
        }
        // if the element is already in the object, increase the number of occurence of the element
        else {
            temp[arr[i]] += 1;
        };
        // compare the element's number of occurence to the current maximum number of occurence, and change it if necessary
        if (temp[arr[i]] > maxCount){
            maxCount = temp[arr[i]];
            mostFrequentElement = arr[i];
        }
    }
    return {value: mostFrequentElement, count: maxCount};
}

arr = ['apple', 'banana', 'apple'];
console.log(getMostFrequentElement(arr));