//To find the maximum number in an array using the provided function. This code will iterate over each number in the nums array and update max_num whenever a larger number is found. Finally, it will return the maximum number found in the array.//

function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
      if (num > max_num) {
        max_num = num; // Update max_num with the current number
      }
    }
    return max_num;
  }  
