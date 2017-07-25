//price calculator

//data*******************************************************
//spPoly*************************
var spPoly023={
	ct125:1.71,
	ct250:1.1,
	ct500:0.84,
	ct1000:0.69,
	ct2000:0.62,
	ct5000:0.57
};

var spPoly035={
	ct125:1.8,
	ct250:1.18,
	ct500:0.91,
	ct1000:0.75,
	ct2000:0.71,
	ct5000:0.67
};

var spPoly055={
	ct125:2.42,
	ct250:1.83,
	ct500:1.27,
	ct1000:1.03,
	ct2000:0.96,
	ct5000:0.91
};

var spPoly075={
	ct125:2.71,
	ct250:2.08,
	ct500:1.51,
	ct1000:1.25,
	ct2000:1.18,
	ct5000:1.13
};
//dPoly*************************
var dPoly035={
	ct125:3.97,
	ct250:3.42,
	ct500:2.87,
	ct1000:2.3,
	ct2000:1.93
};

var dPoly055={
	ct125:4.2,
	ct250:3.64,
	ct500:3.08,
	ct1000:2.5,
	ct2000:2.13
};

var dPoly075={
	ct125:4.43,
	ct250:3.87,
	ct500:3.3,
	ct1000:2.71,
	ct2000:2.33
};
//spAlu*************************
var spAlu024={
	ct125:3.24,
	ct250:2.41,
	ct500:2.04,
	ct1000:1.81,
	ct2000:1.7,
	ct5000:1.6
};

//dAlu*************************

var dAlu024={
	ct125:6.08,
	ct250:4.55,
	ct500:3.73,
	ct1000:3.3,
	ct2000:3.17
};

//spCard*************************

var spPCard024={
	ct125:1.77,
	ct250:1.24,
	ct500:0.73,
	ct1000:0.53,
	ct2000:0.46,
	ct5000:0.42
};

//spMcycle*************************

var spMcycle023={
	ct125:1.71,
	ct250:1.1,
	ct500:0.84,
	ct1000:0.69,
	ct2000:0.62,
	ct5000:0.57
};

var spMcycle035={
	ct125:1.8,
	ct250:1.18,
	ct500:0.91,
	ct1000:0.75,
	ct2000:0.71,
	ct5000:0.67
};
//plate weights by type
var weights={
	spPoly:["023","035","055","075"],
	dPoly:["035","055","075"],
	spAlu:["024"],
	dAlu:["024"],
	spPCard:["024"],
	spMcycle:["023","035"]
};

//plate counts by type
var counts = {
	spPoly:[125, 250, 500, 1000, 2000, 5000],
	dPoly:[125, 250, 500, 1000, 2000],
	spAlu:[125, 250, 500, 1000, 2000, 5000],
	dAlu:[125, 250, 500, 1000, 2000],
	spPCard:[125, 250, 500, 1000, 2000, 5000],
	spMcycle:[125, 250, 500, 1000, 2000, 5000]
};

//additional color charges by count poly plate
var addtlColors={
	sp: [0.58, 0.33, 0.22, 0.18, 0.15, 0.13],
	alu:[0.69, 0.44, 0.30, 0.22, 0.20, 0.19],
	dig:[0,0,0,0,0,0]
};

//variables*******************************************************
var plateColors; //sets plate colors
var plateWeights; //sets plate weights
var plateCounts; //sets plate counts
var plateType= $("#plateType").val(); 

//Calculation Variables*******************************************************
var plateCount; //Pulled from "plate count" option
var plateColorsSelected; //pulled from "additional colors"
var costPerUnit; //initial plate cost per unit
var colorChgPerCt; //initial color charge
var colorChg; // colorChgPerCt * number of additional colors
var totalCostPerUnit; //total cost of plate per unit with all charges added
var PMSColorChg;//total charge for number of PMS colors selected
var xtraChgs=parseInt($("#setupChg").attr("value"));
var artChg = 0;
var xtraChgsTotal; //adds all xtra charged together after figuring in selected colors
var subtotal;
var total;
 

//initial run*******************************************************
getWeight();
setOptions("plateWeight",plateWeights,"weights");
getPlateCount();
setOptions("plateCount",plateCounts,"counts");
getColors();
setOptions("addtlColor",plateColors,"colors");
$("#pmsMatch").hide();


getCostPerPlate();
getColorCostPerPlate();
getColorChargeTotal();
getCostPerUnitTotal();
getXtraChgs();
getPmsMatchChg();
getSubTotal();
getTotal();



//as new options chosen*******************************************************

$("#plateType").change(function(){
	plateType = $("#plateType").val();  
	getWeight();
	$(".weights").remove();
	setOptions("plateWeight",plateWeights,"weights");
	getPlateCount();
	$(".counts").remove();
	setOptions("plateCount",plateCounts,"counts");
	getColors();
	$(".colors").remove();
	setOptions("addtlColor",plateColors,"colors");
	$("#pmsMatch").hide();
	
	getCostPerPlate();
	getColorCostPerPlate();
	getColorChargeTotal();
	getCostPerUnitTotal();
	getSubTotal();
	getTotal();
});


$("#plateWeight").change(function(){
	plateWeights = $("#plateWeight").val();
	getCostPerPlate();
	getCostPerUnitTotal();
	getSubTotal();
	getTotal();	
});


$("#plateCount").change(function(){
	plateCount = $("#plateCount");
	getCostPerPlate();
	getColorCostPerPlate();
	getColorChargeTotal();
	getCostPerUnitTotal();
	getSubTotal();
	getTotal();	
});


$("#addtlColor").change(function(){
	addtlColor = $("#addtlColor");
	getColorCostPerPlate();
	getColorChargeTotal();
	getCostPerUnitTotal();
	$(".pmsColors").remove();
	setOptions("pmsColorOpts",(parseInt(plateColorsSelected)+1),"pmsColors");
	getSubTotal();
	getTotal();
	getXtraChgs();
	getPmsMatchChg();
});

$("input").change(function(){
	getSubTotal();
	getTotal();	
});

$("#pmsColorOpts").change(function(){
	getPmsMatchChg();
	getTotal();
});
//calculations*******************************************************

//displayColorChargeTotal - charges for color multiplied by selected number of colors
//totalPerPlate - total charge per plate with color charge total added

function setOptions(id,options,className){ //id is id of target element, options is option array from data, className is class name to be applied to option
	var optionsList;
	var idString = "#"+id;
	if(typeof options ==="object"){
		for(i=0;i<options.length;i++){
			optionsList+="<option class='"+className+"' value='"+options[i]+"'>" +options[i] + "</option>";
		}
	}
	else{
		for(i=0;i<options;i++){
			optionsList+="<option class='"+className+"' value='"+i+"'>" +i+ "</option>";
		}
	}
		
	$(idString).append(optionsList);
}

function roundCurrency(cost){
	var tempCost = cost.toFixed(2);
	return tempCost;
}


function getWeight(){
	plateWeights = weights[plateType];
}

function getPlateCount(){
	plateCounts = counts[plateType];
}

function getColors(){   //gets number of colors for dropdown, also sets enabled/disabled state of checkboxes for xtraChgs
	if(plateType==="spPoly" || plateType==="spPCard" || plateType==="spMcycle"){
		plateColors=7;
		$(".colorInfo").slideDown("slow");
		$(".spOnly").attr('disabled', false);
		$("#setupChg").attr('checked', true);
		$("#addtlColor").attr('disabled',false);
	}
	else if(plateType==="spAlu"){
		plateColors=3;
		$(".colorInfo").slideDown("slow");
		$(".spOnly").attr('disabled', false);
		$("#setupChg").attr('checked', true);
		$("#addtlColor").attr('disabled',false);
	}
	else{
		plateColors=1;
		$(".colorInfo").slideUp("slow");
		$(".spOnly").attr({'disabled': true, 'checked':false});
		$("#addtlColor").attr('disabled',true);
		xtraChgs = 0;
		xtraChgsTotal = 0;
		pmsMatchChg = 0;
		$("#pmsColorPanel").slideUp("fast");
		$(".pmsColors").remove();
		getPmsMatchChg();
		getXtraChgs();
		getTotal();
	}
}


function getCostPerPlate(){   //displayCostPerUnit - charge per plate
	plateCount = $("#plateCount").val();
	var plateCostStr = plateType + $("#plateWeight").val();
	var plateCountStr = "ct" + plateCount;
	switch (plateCostStr){
		//spPoly************************************
		case "spPoly023":
			costPerUnit = spPoly023[plateCountStr];
			break;

		case "spPoly035":
			costPerUnit = spPoly035[plateCountStr];
			break;

		case "spPoly055":
			costPerUnit = spPoly055[plateCountStr];
			break;

		case "spPoly075":
			costPerUnit = spPoly075[plateCountStr];
			break;

		//spPoly************************************
		case "dPoly035":
			costPerUnit = dPoly035[plateCountStr];
			break;

		case "dPoly055":
			costPerUnit = dPoly055[plateCountStr];
			break;

		case "dPoly075":
			costPerUnit = dPoly075[plateCountStr];
			break;

		//spAlu************************************
		case "spAlu024":
			costPerUnit = spAlu024[plateCountStr];
			break;

		//dAlu************************************
		case "dAlu024":
			costPerUnit = dAlu024[plateCountStr];
			break;

		//spPCard************************************
		case "spPCard024":
			costPerUnit = spPCard024[plateCountStr];
			break;

		//spMcycle************************************
		case "spMcycle023":
			costPerUnit = spMcycle023[plateCountStr];
			break;

		//spMcycle35************************************
		case "spMcycle035":
			costPerUnit = spMcycle035[plateCountStr];
			break;

	}
	costPerUnit = roundCurrency(costPerUnit);
	document.getElementById("displayCostPerUnit").innerHTML = "$" + costPerUnit;
}

function getColorCostPerPlate(){   //displayColorCharge - color charge per plate - determined by count and plate type
	var colorPlateTypeStr;
	var colorListStr;
	plateColorsSelected = $("#addtlColor").val();

	if(plateType==="spPoly"||plateType==="spPCard"||plateType==="spMcycle"){
		colorPlateTypeStr = "sp";
	}
	else if(plateType==="spAlu"){
		colorPlateTypeStr = "alu";
	}
	else{
		colorPlateTypeStr="dig";
	}
	
	colorListStr = addtlColors[colorPlateTypeStr];

	switch(plateCount){
		case "125":
			colorChgPerCt = colorListStr[0];
			break;
		case "250":
			colorChgPerCt = colorListStr[1];
			break;
		case "500":
			colorChgPerCt = colorListStr[2];
			break;
		case "1000":
			colorChgPerCt = colorListStr[3];
			break;
		case "2000":
			colorChgPerCt = colorListStr[4];
			break;
		case "5000":
			colorChgPerCt = colorListStr[5];
			break;
	}

	colorChgPerCt = roundCurrency(colorChgPerCt);
	if(plateColorsSelected>=1){
		$("#pmsMatch").slideDown("slow");
		document.getElementById("displayColorCharge").innerHTML = "$" + colorChgPerCt;
	}
	else{
		$("#pmsMatch").slideUp("slow");
		document.getElementById("displayColorCharge").innerHTML = "$" + colorChgPerCt * 0;
	}

}

function getColorChargeTotal(){
	colorChg = parseFloat(colorChgPerCt) * parseInt(plateColorsSelected);
	colorChg = roundCurrency(colorChg);
	document.getElementById("displayColorChargeTotal").innerHTML = "$" + colorChg;
}

function getCostPerUnitTotal(){
	totalCostPerUnit = parseFloat(costPerUnit) + parseFloat(colorChg);
	totalCostPerUnit = roundCurrency(totalCostPerUnit);
	document.getElementById("displayCostPerUnitTotal").innerHTML = "$" + totalCostPerUnit;
}



function getXtraChgs(){   //displays initial value of xtraChgs
	xtraChgsTotal = (parseInt(plateColorsSelected)+1) * xtraChgs;
	// document.getElementById("displayArtCharges").innerHTML = "$" + artChg;
	// document.getElementById("displayAddtlCharges").innerHTML = "$" + xtraChgs;
	document.getElementById("displayAddtlChargesTotal").innerHTML = "$" + xtraChgsTotal;
}

function getPmsMatchChg(){
	PMSColorChg = $("#pmsColorOpts").val()*30;
	document.getElementById("displayPMSColorChg").innerHTML = " $" + PMSColorChg;
}


$("input").on("click", function(){  //updates xtraChgs
	if($(this).attr("name")==="XColor"){
		if($(this).is(":checked")){
			xtraChgs += parseInt($(this).val());
		}
		else{
			xtraChgs -= parseInt($(this).val());
		}

	}
	else if($(this).attr("id")==="pmsMatchChg"){
		if($(this).is(":checked")){
			$(".pmsColors").remove();
			setOptions("pmsColorOpts",(parseInt(plateColorsSelected)+1),"pmsColors");
			$("#pmsColorPanel").slideDown("fast");
		}
		else{
			$("#pmsColorPanel").slideUp("fast");
			pmsMatchChg = 0;
			$(".pmsColors").remove();
			getPmsMatchChg();
			getTotal();
		}
	}
	else{
		if($(this).is(":checked")){ //updates artChgs
			artChg = 55;
		}
		else{
			artChg = 0;
		}
	}
	getXtraChgs();
	
});


function getSubTotal(){
	subtotal = parseFloat(totalCostPerUnit) * parseFloat(plateCount);
	subtotal = roundCurrency(subtotal);
	// document.getElementById("displaySub").innerHTML="$" + subtotal;
}
	
function getTotal(){
	total = PMSColorChg + xtraChgsTotal + parseFloat(subtotal);
	total = roundCurrency(total);
	document.getElementById("displayTotal").innerHTML="$" + total;
}






