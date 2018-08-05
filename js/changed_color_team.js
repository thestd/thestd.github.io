
var i_1=0;
var i_2=1;
var i_3=2;
var i_4=3;
var i_5=4;
var i_6=5;
var i_7=6;

var flag=0;
var dt=new Array("d65988aa", "d76443aa", "86a058aa", "7ebb76aa", "8cc6bbaa", "49a3bfaa", "6558a0aa");

function next_cl() {
    document.getElementById("bg1").style.backgroundColor='#'+dt[i_1++];
    document.getElementById("bg2").style.backgroundColor='#'+dt[i_2++];
    document.getElementById("bg3").style.backgroundColor='#'+dt[i_3++];
    document.getElementById("bg4").style.backgroundColor='#'+dt[i_4++];
    document.getElementById("bg5").style.backgroundColor='#'+dt[i_5++];
    document.getElementById("bg6").style.backgroundColor='#'+dt[i_6++];
    document.getElementById("bg7").style.backgroundColor='#'+dt[i_7++];

    if (i_1>=dt.length) i_1=0;
    if (i_2>=dt.length) i_2=0;
    if (i_3>=dt.length) i_3=0;
    if (i_4>=dt.length) i_4=0;
    if (i_5>=dt.length) i_5=0;
    if (i_6>=dt.length) i_6=0;
    if (i_7>=dt.length) i_7=0;

}
if (flag==0) {
    flag++;
    document.getElementById("bg1").style.backgroundColor='#'+dt[i_1];
    document.getElementById("bg2").style.backgroundColor='#'+dt[i_2];
    document.getElementById("bg3").style.backgroundColor='#'+dt[i_3];
    document.getElementById("bg4").style.backgroundColor='#'+dt[i_4];
    document.getElementById("bg5").style.backgroundColor='#'+dt[i_5];
    document.getElementById("bg6").style.backgroundColor='#'+dt[i_6];
    document.getElementById("bg7").style.backgroundColor='#'+dt[i_7];
}
setInterval(next_cl, 3000);
