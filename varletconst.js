for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("A:", i);
  }, 1000 * i);
}
