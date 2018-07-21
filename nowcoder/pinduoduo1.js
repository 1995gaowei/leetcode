// 3个数的乘积最大
readline();
var A = readline().split(" ");

A.sort((a, b) => a - b);

print(
  Math.max(
    A[0] * A[1] * A[A.length - 1],
    A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
  )
);
// end

// 大整数相乘
var line = readline().split(" ");
var a = line[0],
  b = line[1];
var str1,
  str2,
  len1,
  len2,
  maxlen,
  result = [];

str1 = a.split("").reverse();
str2 = b.split("").reverse();

len1 = str1.length;
len2 = str2.length;

for (var i = 0; i < len1; i++) for (var j = 0; j < len2; j++) result[i + j] = 0;

for (var i = 0; i < len1; i++)
  for (var j = 0; j < len2; j++)
    result[i + j] += parseInt(str1[i]) * parseInt(str2[j]);

var n = result.length;
for (var k = 0; k < n - 1; k++) {
  var temp = result[k];
  if (temp >= 10) {
    result[k] = temp % 10;
    result[k + 1] += Math.floor(temp / 10);
  }
}
print(result.reverse().join(""));
// end

// 巧克力分配
var n = parseInt(readline());
var h = readline()
  .split(" ")
  .map(val => parseInt(val))
  .sort((a, b) => b - a);

var m = parseInt(readline());
var w = readline()
  .split(" ")
  .map(val => parseInt(val))
  .sort((a, b) => b - a);

var result = 0;
var temp;
w.forEach(wi => {
  while (h.length) {
    temp = h.shift();
    if (wi >= temp) {
      result++;
      break;
    }
  }
});

print(result);
// end

// 迷宫
var mn = "5 5".split(" ");
var m = parseInt(mn[0]),
  n = parseInt(mn[1]),
  map = [];
var path = [],
  keyNum = 0,
  next = [[-1, 0], [1, 0], [0, -1], [0, 1]],
  key = [];

function node(x, y, k, step) {
  return {
    x: x,
    y: y,
    k: k,
    step: step
  };
}

var map1 = ["c21C1", "01a0A", "11003", "10001", "10111"];

for (let i = 0; i < m; i++) {
  map.push(map1[i]);
  keyNum += map[i].replace(/[\dA-Z]/g, "").length;
}

for (let i = 0; i < m; i++) {
  key.push([]);
  for (let j = 0; j < n; j++) {
    key[i].push(new Array(1 << (keyNum - 1)).fill(false));

    if (map[i][j] == "2") {
      key[i][j][0] = true;
      path.push(node(i, j, 0, 0));
    }
  }
}

let temp, nx, ny, curK, res;
while (path.length) {
  temp = path.shift();
  if (map[temp.x][temp.y] == "3") {
    res = temp.step;
    break;
  }
  for (let i = 0; i < 4; i++) {
    nx = temp.x + next[i][0];
    ny = temp.y + next[i][1];

    if (nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1 || map[nx][ny] == "0")
      continue;
    curK = temp.k;
    if ("a" <= map[nx][ny] && map[nx][ny] <= "z") {
      curK = curK | (1 << (map[nx][ny].charCodeAt() - "a".charCodeAt()));
    }
    if (
      "A" <= map[nx][ny] &&
      map[nx][ny] <= "Z" &&
      (curK & (1 << (map[nx][ny].charCodeAt() - "A".charCodeAt()))) == 0
    )
      continue;
    if (!key[nx][ny][curK]) {
      key[nx][ny][curK] = true;
      path.push(node(nx, ny, curK, temp.step + 1));
    }
  }
}

console.log(res);
// end
