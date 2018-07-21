// 小熊吃糖
var n = parseInt(readline().split(" ")[0]);
var m = readline()
  .split(" ")
  .map(val => parseInt(val))
  .sort((a, b) => b - a);
var bears = [];

function bear(f, h, idx) {
  return { f, h, idx };
}

for (let i = 0, b; i < n; i++) {
  b = readline().split(" ");
  bears.push(bear(parseInt(b[0]), parseInt(b[1]), i));
}
bears.sort((b1, b2) => b2.f - b1.f).forEach(b => {
  b.h = eat(b.h);
});

bears.sort((b1, b2) => b1.idx - b2.idx).forEach(b => {
  print(b.h);
});

function eat(h) {
  for (let i = 0; i < m.length; i++) {
    if (m[i] <= h) {
      h -= m[i];
      m.splice(i, 1);
      break;
    }
  }

  if (m.length && h >= m[m.length - 1]) {
    return eat(h);
  } else {
    return h;
  }
}
// end

// 三角形
function node(x, y) {
  return { x, y };
}

function test(i, j, k) {
  if (
    (nodes[j].y - nodes[i].y) * (nodes[k].x - nodes[j].x) ==
    (nodes[k].y - nodes[j].y) * (nodes[j].x - nodes[i].x)
  ) {
    return false;
  } else {
    return true;
  }
}

var n = parseInt(readline());
var nodes = [];
var res = 0;
if (n > 2) {
  for (let i = 0; i < n; i++) {
    let line = readline().split(" ");
    nodes.push(node(parseInt(line[0]), parseInt(line[1])));
  }

  for (let i = 0; i < nodes.length - 2; i++) {
    for (let j = i + 1; j < nodes.length - 1; j++) {
      for (let k = j + 1; k < nodes.length; k++) {
        if (test(i, j, k)) {
          res++;
        }
      }
    }
  }
}

print(res);
// end
