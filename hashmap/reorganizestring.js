function reorganizeString(s) {
   let freq=new Map()
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
     const maxHeap = [...freq.entries()].sort((a, b) => b[1] - a[1]);
         if (maxHeap[0][1] > Math.ceil(s.length / 2)) {
        return "";
    }
    const res = Array(s.length);
    let index = 0;
    for (let [char, count] of maxHeap) {
        while (count > 0) {
            if (index >= s.length) index = 1;
            res[index] = char;
            index += 2;
            count--;
        }
    }
   return res.join('');

};