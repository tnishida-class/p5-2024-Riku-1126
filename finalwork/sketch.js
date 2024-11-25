// 最終課題を制作しよう
let stars = []; // 流れ星を格納する配列
let numStars = 6; // 流れ星の数

function setup() {
  createCanvas(400, 400);
  
  // 流れ星の初期化
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: random(-width, 0), // 画面外左から出現
      y: random(height), // ランダムなY座標
      size: random(10, 20), // ランダムな大きさ
      speed: random(3,8) // ランダムな速度
    });
  }
}

function draw() {
  // 上から下への濃いグラデーション背景
  setGradient(0, 0, width, height, color(0, 0, 0), color(25, 25, 225)); // 深い青紫色（濃いグラデーション）

  // テキスト表示の処理
  if (keyIsDown("I".charCodeAt(0)) && keyIsDown("T".charCodeAt(0))) { // 'I' と 'T'のキーコード
    textSize(50);
    fill("#c71585"); // ピンク色
    text("Global Culture", 50, 200);
  }

  // 流れ星を描く
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    
    // 流れ星を描画
    fill(255, 204, 0); // 流れ星の色（黄色）
    noStroke();
    drawstar(star.x, star.y, star.size);
    
    // 流れ星を右に移動
    star.x += star.speed; 

    // 画面外に出たら再度左端から出現させる
    if (star.x > width + 50) {
      star.x = -50; // 画面外左に戻す
      star.y = random(height); // 新しいY座標をランダムに設定
      star.size = random(5, 15); // 新しいサイズをランダムに設定
      star.speed = random(3, 10); // 新しい速度をランダムに設定
    }
  }
}

// 星を描く関数
function drawstar(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// グラデーション背景を描く関数
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = 0; i <= h; i++) {
    // y座標に対して0から1の範囲で補間
    let inter = map(i, 0, h, 0, 1); 
    let c = lerpColor(c1, c2, inter); // 2色の補間
    stroke(c);
    strokeWeight(1); // 線の幅を1に設定
    line(x, y + i, x + w, y + i); // 横に線を描いてグラデーションを作る
  }
}
