// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (nums) {
  let minNum = nums[0]
  for (let num of nums) {
    if (minNum > num) {
      minNum = num
    }
  }
  return minNum
}
