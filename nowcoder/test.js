function MoreThanHalfNum_Solution(numbers) {
  // write code here
  const map = new Map();
  numbers.forEach(val => {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  });

  for (let [key, val] of map) {
    if (val > numbers.length / 2) {
      return key;
    }
  }

  return 0;
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));
