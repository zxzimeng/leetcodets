function twoSum(nums, target) {
    let trySum = 0;
    let r = [];
    for (let i in nums) {
        for (let j in nums) {
            if (i == j) {
                continue;
            }
            trySum = nums[i] + nums[j];
            console.log(`values: nums[${i}]=${nums[i]}, nums[${j}]=${nums[j]}`);
            if (trySum == target) {
                r = [parseInt(i), parseInt(j)];
                return r;
            }
        }
    }
    return r;
}
;
//# sourceMappingURL=p001sum.js.map