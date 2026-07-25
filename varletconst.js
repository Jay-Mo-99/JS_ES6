for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("X:", i), 1000 * i);
}
for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("Y:", j), 1000 * j);
}
