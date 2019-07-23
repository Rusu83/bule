var i,x=[],y=[],s=[],v=[];
var deeznuts=0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  for(i=0;i<100;i++){
    x[i]=random(width);
    y[i]=height/10*11;
    s[i]=random(width/10);
    v[i]=random(0,2);
  }
  textAlign(CENTER,CENTER);
  textSize(height/9);
}

function draw() {
  background(15,50,50);
  fill(200,200,255,50);
  stroke(220,220,255,50);
  for(i=0;i<100;i++){
    //x[i]+=random(-width/50,width/50);
    y[i]-=v[i];
    if(y[i]<0){
      x[i]=random(width);
      y[i]=height/10*11;
      s[i]=random(width/10);
      v[i]=random(0,2);
    }
    ellipse(x[i],y[i],s[i],s[i]);
  }
  stroke(0);
  fill(255);
  text(deeznuts,width/2,height/2);
}

function mousePressed(){
  deeznuts++;
}
