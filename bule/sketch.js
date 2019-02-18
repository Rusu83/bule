var i,x=[],y=[],s=[],v=[];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  for(i=0;i<100;i++){
    x[i]=random(width);
    y[i]=random(height);
    s[i]=random(width/10);
    v[i]=random(1,3);
  }
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
      v[i]=random(1,3);
    }
    ellipse(x[i],y[i],s[i],s[i]);
  }
}
