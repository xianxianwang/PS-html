function currentSec(n){
var sec = "sec";
for(var i=1;i<8;i++){
	if(i==n){
	var d=sec+n;
	document.getElementById(d).style.display="block";	
	}
	else{
    var di=sec+i;
	document.getElementById(di).style.display="none";		
	}	
}
}