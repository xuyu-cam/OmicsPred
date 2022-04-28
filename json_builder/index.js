const MissedToHex = (i, m) => {
  return (i * 4294967295) / m;
};
function HexToColor(num) {
  num >>>= 0;
  var b = num & 0xff,
    g = (num & 0xff00) >>> 8,
    r = (num & 0xff0000) >>> 16;
  return "rgba(" + [r, g, b].join(",") + ")";
}

const Colored = (i, m) => {
  return HexToColor(MissedToHex(i, m));
};

console.log(Colored(0, 1));
console.log(Colored(0.1, 1));
console.log(Colored(0.2, 1));
console.log(Colored(0.3, 1));
console.log(Colored(0.4, 1));
console.log(Colored(0.5, 1));
console.log(Colored(0.6, 1));
console.log(Colored(0.7, 1));
console.log(Colored(0.008808, 1));
console.log(Colored(0.9, 1));
console.log(Colored(1, 1));


