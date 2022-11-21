function setup() {
  //產生按鈕，按下就跳舞(setup())
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    textSize(20)
    text("X:"+mouseX+" Y:"+mouseY,50,50)
    push()
     //fill(255,0,0)
     translate(width/2,height/2)
     fill("#92531D")
     ellipse(-150,-150,150)
     ellipse(150,-150,150)
     ellipse(0,0,450,400)//臉
     //左邊眼睛
     fill(255)
     ellipse(-80,-80,60)
     fill(0)
     ellipse(-90+mouseX/100,-90+mouseY/60,20)
     //右邊眼睛
     fill(255)
     ellipse(80,-80,60)
     fill(0)
     ellipse(70+mouseX/80,-90+mouseY/60,20)
     
     fill(0) 
     ellipse(0,0,50,25)//鼻子的橢圓
     //嘴巴
     stroke(0)
     fill(255,0,0)
     arc(0,100,200,100,0,180)
     fill("#92531D")
     if(mouseIsPressed)
     { //mouseIsPressed為TURE，代表有按下滑鼠
       arc(0,99,200,40,0,180)
     }
     else
     { //mouseIsPressed為FALSE，代表沒有按下滑鼠
       arc(0,99,200,100,0,180)
     }
     noFill()
    pop()
    
    push()
    //fill(255,0,0)
    translate(width/2,height/2)
    fill("#92531D")
    ellipse(900,900,250,200)//臉
    //左邊眼睛
    fill(255)
    ellipse(-80,-80,60)
    fill(0)
    ellipse(-90+mouseX/100,-90+mouseY/60,20)
    //右邊眼睛
    fill(255)
    ellipse(80,-80,60)
    fill(0)
    ellipse(70+mouseX/80,-90+mouseY/60,20)
    fill(0) 
    ellipse(0,0,50,25)//鼻子的橢圓
    //嘴巴
    stroke(0)
    fill(255,0,0)
    arc(0,100,200,100,0,180)
    fill("#92531D")
    if(mouseIsPressed)
    { //mouseIsPressed為TURE，代表有按下滑鼠
      arc(0,99,200,40,0,180)
    }
    else
    { //mouseIsPressed為FALSE，代表沒有按下滑鼠
      arc(0,99,200,100,0,180)
    }
    noFill()
   pop()

    push()
    //第二個熊
     translate(width/4,height/4)
     fill(mouseX/8,mouseY/4,frameCount%256)
     ellipse(-50,-50,50)
     ellipse(50,-50,50)
     ellipse(0,0,150,100)//臉
     //左邊眼睛
     fill(255)
     ellipse(-20,-20,15)
     fill(0)
     ellipse(-22,-22,5)
     //右邊眼睛
     fill(255)
     ellipse(20,-20,15)
     fill(0)
     ellipse(17,-22,5)
     fill(0) 
     ellipse(0,0,12,6)//鼻子的橢圓
    pop()
   
  }