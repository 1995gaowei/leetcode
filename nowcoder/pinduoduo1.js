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
var mn = readline().split(" ");
var m = mn[0],
  n = mn[1],
  map = [];
var path = [],
  doors = [];

for (let i = 0; i < m; i++) {
  map.push(readline());
  if (map[i].indexOf("3") >= 0) {
    path.push({ x: i, y: map[i].indexOf("3"), step: 1 });
  }
}

var res;
while (path.length) {
  let cur = path.shift();
  // up
  if (cur.x > 0) {
    let temp = map[cur.x - 1][cur.y];
    if (temp == 2 && doors.length == 0) {
      res = cur.step;
      break;
    } else if (temp == 1) {
      path.push({ x: cur.x - 1, y: cur.y, step: cur.step + 1 });
    } else if ("A" <= temp && temp <= "Z") {
      path.push({ x: cur.x - 1, y: cur.y, step: cur.step + 1 });
      doors.push(temp);
    } else if (
      "a" <= temp &&
      temp <= "z" &&
      temp.toUpperCase == doors[doors.length - 1]
    ) {
      path.push({ x: cur.x - 1, y: cur.y, step: cur.step + 1 });
      doors.pop();
    }
  }

  // down
  if (cur.x < m - 1) {
    let temp = map[cur.x + 1][cur.y];
    if (temp == 2 && doors.length == 0) {
      res = cur.step;
      break;
    } else if (temp == 1) {
      path.push({ x: cur.x + 1, y: cur.y, step: cur.step + 1 });
    } else if ("A" <= temp && temp <= "Z") {
      path.push({ x: cur.x + 1, y: cur.y, step: cur.step + 1 });
      doors.push(temp);
    } else if (
      "a" <= temp &&
      temp <= "z" &&
      temp.toUpperCase == doors[doors.length - 1]
    ) {
      path.push({ x: cur.x + 1, y: cur.y, step: cur.step + 1 });
      doors.pop();
    }
  }

  // left
  if (cur.y > 0) {
    let temp = map[cur.x][cur.y - 1];
    if (temp == 2 && doors.length == 0) {
      res = cur.step;
      break;
    } else if (temp == 1) {
      path.push({ x: cur.x, y: cur.y - 1, step: cur.step + 1 });
    } else if ("A" <= temp && temp <= "Z") {
      path.push({ x: cur.x, y: cur.y - 1, step: cur.step + 1 });
      doors.push(temp);
    } else if (
      "a" <= temp &&
      temp <= "z" &&
      temp.toUpperCase == doors[doors.length - 1]
    ) {
      path.push({ x: cur.x, y: cur.y - 1, step: cur.step + 1 });
      doors.pop();
    }
  }

  // right
  if (cur.y < n - 1) {
    let temp = map[cur.x][cur.y + 1];
    if (temp == 2 && doors.length == 0) {
      res = cur.step;
      break;
    } else if (temp == 1) {
      path.push({ x: cur.x, y: cur.y + 1, step: cur.step + 1 });
    } else if ("A" <= temp && temp <= "Z") {
      path.push({ x: cur.x, y: cur.y + 1, step: cur.step + 1 });
      doors.push(temp);
    } else if (
      "a" <= temp &&
      temp <= "z" &&
      temp.toUpperCase == doors[doors.length - 1]
    ) {
      path.push({ x: cur.x, y: cur.y + 1, step: cur.step + 1 });
      doors.pop();
    }
  }
}

print(res);
// end
