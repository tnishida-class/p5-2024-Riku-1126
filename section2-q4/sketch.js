// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i % 2 === 0)
      fill(blue);
    if(i%2 === 1)
      fill(255);// BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(0,40,100,20)+rect(40,0,20,100)
  erase();
  rect(40,40,0,20)+rect(60,40,0,20);// BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
