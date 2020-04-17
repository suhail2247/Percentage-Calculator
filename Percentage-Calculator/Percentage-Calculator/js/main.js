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
var x1,x2,x3,x4;	
document.getElementById("next").onclick= function (){
	x1=document.getElementsByClassName("input")[0].value;
	x2=document.getElementsByClassName("input")[1].value;
	x3=document.getElementsByClassName("input")[2].value;
	x4=document.getElementsByClassName("input")[3].value;
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
	document.getElementById("extra").innerHTML="";
}

document.getElementById("Add-Subject").onclick = function(){
	var x5=document.getElementsByClassName("input")[4].value;
	var x6=document.getElementsByClassName("input")[5].value;
	if(x5!="" && x6!=""){
		if(parseInt(x6)>=parseInt(x5)){
	var select = document.getElementById("select");
	var table = document.getElementById("table");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = select.options[select.selectedIndex].text+'<input type="hidden" class="cell1" name='+select.options[select.selectedIndex].value+'>';
	cell2.innerHTML = x5+'<input type="hidden" class="cell2" name='+select.options[select.selectedIndex].value+'_M value='+x5+'>';
	cell3.innerHTML = x6+'<input type="hidden" class="cell3" name='+select.options[select.selectedIndex].value+'_O value='+x6+'>';
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
	if(r.rows.length>2){
		var totalObtainMarks=0;
		var totalOutOfMarks=0;
	for(let i=1;i<r.rows.length-1;i++){
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
			if(r.rows.length-2==q){
				var row = table.insertRow(r.rows.length-1);
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
	document.getElementById("table").rows[r.rows.length-1].cells[1].innerHTML=totalObtainMarks+'<input type="hidden" class="cell2" id="TotalMarksObtain" name="TotalMarksObtain" value='+totalObtainMarks+'>';
	document.getElementById("table").rows[r.rows.length-1].cells[2].innerHTML=totalOutOfMarks+'<input type="hidden" class="cell3" id="TotalOutOfMarks" name="TotalOutOfMarks" value='+totalOutOfMarks+'>';
	var p=(totalObtainMarks/totalOutOfMarks)*100;
	document.getElementById("Percentage-result").innerHTML = p.toFixed(2)+'%'+'<input type="hidden" name="PercentageResult" value="'+p.toFixed(2)+'">';
	g++;
	
	document.getElementById("extra").innerHTML='<input type="hidden" name="UniversityCollegeName" value="'+x1+'">'+'<input type="hidden" name="RegistrationNumber" value="'+x2+'">'+'<input type="hidden" name="Branch" value="'+x3+'">'+'<input type="hidden" name="CollegeYear" value="'+x4+'">';
	document.getElementById("calculator-form").submit();
}
}

document.getElementById("calculator-form").addEventListener("onsubmit",function(event){
	event.preventDefault();
},false);