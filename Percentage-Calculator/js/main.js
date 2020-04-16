const inputs = document.querySelectorAll(".input");

function addcladd(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remclrem(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
var g=1;

inputs.forEach(input => {
	input.addEventListener("focus", addcladd);
	input.addEventListener("blur", remclrem);
});

var y = document.getElementById("select").innerHTML;
var z = document.getElementById("table").innerHTML;
  		
document.getElementById("next").onclick= function (){
	let x1=document.getElementsByClassName("input")[0].value;
	let x2=document.getElementsByClassName("input")[1].value;
	let x3=document.getElementsByClassName("input")[2].value;
	let x4=document.getElementsByClassName("input")[3].value;
	if(x1!="" && x2!="" && x3!="" && x4!=""){
	document.getElementById("information").style.display="none";
	document.getElementById("calculator").style.display="inline-block";
	document.getElementsByClassName("input-div")[4].className="input-div five focus";
	document.getElementsByClassName("input-div")[5].className="input-div six";
	document.getElementsByClassName("input-div")[6].className="input-div seven";
	document.getElementById("select").innerHTML = y;
	document.getElementById("table").innerHTML = z;
	document.getElementById("Percentage-result").innerHTML = "";
	}
	else{
		alert("Please Fill Complete Form");
		document.getElementsByClassName("input-div")[0].className="input-div one";
		document.getElementsByClassName("input-div")[1].className="input-div two";
		document.getElementsByClassName("input-div")[2].className="input-div three";
		document.getElementsByClassName("input-div")[3].className="input-div four";
	}
}

document.getElementById("Back").onclick= function(){
	document.getElementById("calculator").style.display="none";
	document.getElementById("information").style.display="flex";
	document.getElementsByClassName("input-div")[0].className="input-div one";
	document.getElementsByClassName("input-div")[1].className="input-div two";
	document.getElementsByClassName("input-div")[2].className="input-div three";
	document.getElementsByClassName("input-div")[3].className="input-div four";
}

document.getElementById("Add-Subject").onclick = function(){
	var x2=document.getElementsByClassName("input")[4].value;
	var x3=document.getElementsByClassName("input")[5].value;
	if(x2!="" && x3!=""){
		if(parseInt(x3)>=parseInt(x2)){
	var select = document.getElementById("select");
	var table = document.getElementById("table");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = select.options[select.selectedIndex].text+'<input type="hidden" class="cell1" name='+select.options[select.selectedIndex].value+'>';
	cell2.innerHTML = x2+'<input type="hidden" class="cell2" name='+select.options[select.selectedIndex].value+'_M value='+x2+'>';
	cell3.innerHTML = x3+'<input type="hidden" class="cell3" name='+select.options[select.selectedIndex].value+'_O value='+x3+'>';
	document.getElementsByClassName("input-div")[4].className="input-div five focus";
	document.getElementsByClassName("input-div")[5].className="input-div six";
	document.getElementsByClassName("input-div")[6].className="input-div seven";
	select.remove(select.selectedIndex);
		}
		else{
			alert("Please Check The Information");
			document.getElementsByClassName("input-div")[4].className="input-div five focus";
			document.getElementsByClassName("input-div")[5].className="input-div six";
			document.getElementsByClassName("input-div")[6].className="input-div seven";
		}
	}
		else{
			alert("Please Fill Complete Form");
			document.getElementsByClassName("input-div")[4].className="input-div five focus";
			document.getElementsByClassName("input-div")[5].className="input-div six";
			document.getElementsByClassName("input-div")[6].className="input-div seven";
		}
}

document.getElementById("Percentage").onclick = function(){
	if(g==1){
	var r = document.getElementById("table");
	if(r.rows.length>1){
		var totalObtainMarks=0;
		var totalOutOfMarks=0;
	for(let i=1;i<r.rows.length;i++){
		totalObtainMarks=totalObtainMarks+parseInt(r.rows[i].cells.item(1).innerHTML);
		totalOutOfMarks=totalOutOfMarks+parseInt(r.rows[i].cells.item(2).innerHTML);
	}
}
	const option=document.querySelectorAll(".option");
	option.forEach(o=>{
        let q=0;
		const cell = document.querySelectorAll(".cell1");
		for(let j=0;j<cell.length;j++){
			if(o.value!=cell[j].name){
                q++;
			}
			if(r.rows.length-1==q){
				var row = table.insertRow(r.rows.length);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				cell1.innerHTML = select.options[select.selectedIndex].text+'<input type="hidden" class="cell1" name='+select.options[select.selectedIndex].value+'>';
				cell2.innerHTML = 0+'<input type="hidden" class="cell2" name='+select.options[select.selectedIndex].value+'_M value='+0+'>';
				cell3.innerHTML = 0+'<input type="hidden" class="cell3" name='+select.options[select.selectedIndex].value+'_O value='+0+'>';
				select.remove(select.selectedIndex);
			}
		} 
	});
	var row = table.insertRow(r.rows.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Total Marks";
	cell2.innerHTML = totalObtainMarks+'<input type="hidden" class="cell2" id="TotalMarks" name="TotalMarks" value='+totalObtainMarks+'>';
	cell3.innerHTML = totalOutOfMarks+'<input type="hidden" class="cell3" id="TotalOutOfMarks	" name="TotalOutOfMarks	" value='+totalOutOfMarks+'>';;
	var p=(totalObtainMarks/totalOutOfMarks)*100;
	document.getElementById("Percentage-result").innerHTML = p.toFixed(2)+'%';
	g++;
}
}