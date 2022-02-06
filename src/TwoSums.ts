function twoSum(nums: number[], target: number): number[] {
    let trySum = 0;
    let r: number[] = [];
    for (let i in nums){
        for (let j in nums) {
            if (i == j){
                continue; 
            }
            trySum = nums[i]+nums[j];
            console.log(`values: nums[${i}]=${nums[i]}, nums[${j}]=${nums[j]}`)
            if (trySum == target){
                r = [parseInt(i), parseInt(j)];
                return r;
            }
        }
    }
    return r;
};
console.log(twoSum([3,2,4], 6));


