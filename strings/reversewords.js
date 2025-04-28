function reversewords(s){
  let splitted = s.split(/\s+/).reverse().join(' ').trim();
  return splitted;
}