var rn1=Math.floor(Math.random()*6)+1, rn2=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+rn1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+rn2+".png");

if(rn1>rn2){
  document.querySelector("h1").innerHTML="Player1 wins!🔥";
}
else if (rn1<rn2){
  document.querySelector("h1").innerHTML="Player2 wins!🔥";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
