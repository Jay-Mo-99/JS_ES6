let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ((ctx.fillStyle = "green"),
      ctx.fillRect(this.x, this.y, this.width, this.height));
    ctx.drawImage(imgDino, this.x, this.y); //img 후 기존의 네모는 hit-box
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ((ctx.fillStyle = "red"),
      ctx.fillRect(this.x, this.y, this.width, this.height));
    ctx.drawImage(imgCac, this.x, this.y);
  }
}
let imgDino = new Image();
let imgCac = new Image();
imgDino.src = "dino.png";
imgCac.src = "cactus.png";
let catcusSeveral = []; //cactus 보관함
let timerCactus = 0;
let jumping = false;
let timerJumping = 0;
let animation;

function frameAction() {
  animation = requestAnimationFrame(frameAction);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  timerCactus++; //timerCactus 는 계속 증가
  //timerCactus 120 프레임마다 cactus1 생성
  if (timerCactus % 120 === 0) {
    let cactus = new Cactus(); //2~3초에 한번 catctus 생성
    catcusSeveral.push(cactus); //array에 push
  }
  //cactus보관함의 모든 cactus들이 반복문으로 화면에 나타나도록한다
  catcusSeveral.forEach((c, i, o) => {
    //cactus의 x좌표가 0 미만이면 제거 -> array의 용량 을 위해
    if (c.x < 0) {
      o.splice(i, 1);
    }
    c.x -= 5;
    //충돌여부 검사
    collapse(dino, c); //dino와 생성 c가 만났을떄를 검사해야하니 c loop안에 넣자
    c.draw();
  });

  dino.draw();
  if (jumping === true) {
    timerJumping++;
    dino.y -= 5; //점프
  }
  if (timerJumping > 25) {
    jumping = false;
  }
  if (jumping === false) {
    if (dino.y < 200) {
      dino.y += 5;
      timerJumping = 0;
    }
  }
}
frameAction();

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jumping = true;
  }
});

//충돌확인
function collapse(dino, cactus) {
  let xDistance = cactus.x - (dino.x + dino.width);
  let yDistance = cactus.y - (dino.y + dino.height);
  if (xDistance < 0 && yDistance < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}
