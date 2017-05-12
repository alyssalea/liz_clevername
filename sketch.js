function setup() {
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn()
  mic.start();
  background(random(),random(),random())

}

function draw() {
  noStroke();
  fill(0);
  micLevel=mic.getLevel();
  adjustedMicLevel=micLevel*5000;
  fill(250,adjustedMicLevel,adjustedMicLevel);
  rect(width/2,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(adjustedMicLevel,200,adjustedMicLevel,random(adjustedMicLevel,300));
  
  rect(width/4,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(adjustedMicLevel,adjustedMicLevel,200,random(adjustedMicLevel,300));
  rect(width/4,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(adjustedMicLevel,100,200,random(adjustedMicLevel,300));
  rect(width/7,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(adjustedMicLevel,20,200,random(adjustedMicLevel,300));
  rect(width/7,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(400,20,200,random(adjustedMicLevel,300));
  rect(width/6,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(200,200,200,random(adjustedMicLevel,300));

  rect(width/9,random(0,height),adjustedMicLevel,adjustedMicLevel)
 fill(adjustedMicLevel,20,200,random(adjustedMicLevel,300));
  rect(width/9,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(400,20,200,random(adjustedMicLevel,300));
  rect(width/3,random(0,height),adjustedMicLevel,adjustedMicLevel)
  fill(200,200,200,random(adjustedMicLevel,300));

  rect(width/3,random(0,height),adjustedMicLevel,adjustedMicLevel)

}