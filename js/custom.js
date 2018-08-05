
var i=1;
var flag=0;
var dt=new Array("d65988", "d76443", "8cc6bb", "7ebb76", "49a3bf", "6558a0");

function next_cl() {
 document.getElementById("changed-color-bg").style.backgroundColor='#'+dt[i];
 document.getElementById("changed-color-point").style.color='#'+dt[i++];
 if (i>=dt.length) i=0;
}
if (flag==0) {
    flag++;
    document.getElementById("changed-color-bg").style.backgroundColor='#'+dt[0];
    document.getElementById("changed-color-point").style.color='#'+dt[0];
}
setInterval(next_cl, 5000);
