class Solution:
    def subarraysDivByK(self, nums, k: int) -> int:
        sum=0
        count=0
        modmap={0:1}
        for num in nums:
            sum+=num
            mod=((sum%k)+k)%k
            if mod in modmap:
                count+=modmap[mod]
            modmap[mod]=modmap.get(mod,0)+1
        return count


#jscode
# var subarraysDivByK = function(nums, k) {
#        let sum = 0;
#     let count = 0;
#     let modmap = { 0: 1 };

#     for (let num of nums) {
#         sum += num;
#         let mod = ((sum % k) + k) % k;  

#         if (mod in modmap) {
#             count += modmap[mod];
#         }

#         modmap[mod] = (modmap[mod] || 0) + 1;
#     }

#     return count;
# };