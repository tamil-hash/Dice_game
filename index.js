var rn1=Math.floor(Math.random()*6)+1, rn2=Math.floor(Math.random()*6)+1;
for(var i=1;i<=6;i++){
  if(rn1===i){
    document.querySelector(".img1").setAttribute("src","images/dice"+i+".png");
  }
}
for(var i=1;i<=6;i++){
  if(rn2===i){
    document.querySelector(".img2").setAttribute("src","images/dice"+i+".png");
  }
}
if(rn1>rn2){
  document.querySelector("h1").innerHTML="Player1 wins!🔥";
}
else if (rn1<rn2){
  document.querySelector("h1").innerHTML="Player2 wins!🔥";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
