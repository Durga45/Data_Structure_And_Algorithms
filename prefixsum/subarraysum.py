class Solution:
    def subarraySum(self, nums, k):
        count = 0
        current_sum = 0
        m = {0: 1}

        for num in nums:
            current_sum += num
            if current_sum - k in m:
                count += m[current_sum - k]

            if current_sum in m:
                m[current_sum] += 1
            else:
                m[current_sum] = 1

        return count
