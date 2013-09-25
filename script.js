function $(id){return document.getElementById(id);}
var a1=false;
var a2=false;
var radio=false;
var scroll=false;

/*checks for variables after each user action and enables buttons if they meet requirements*/
function varChk(){

	if (a1 && a2 && scroll)
	{
		$("agree").disabled=false;
		$("notagree").disabled=false;
		$("submitAgreement").disabled=false;

	}
	
};

window.onload=function(){
	//this block defines the event listeners that set variables and check the status of the document so that varchk can enable and disable butons as needed 
	$("agreeLink1").addEventListener("click",function(){
		window.open("agree1.txt", "", "height = 800, width = 600, scrollbars = yes");
		a1=true;
		varChk();
	});


	$("agreeLink2").addEventListener("click", function(){
		window.open("agree2.txt","", "height = 800, width = 600, scrollbars = yes");
		a2=true;
		varChk();

	});

	$("agree").addEventListener("change",function(){
		radio=true;
		
	});
	
	$("notagree").addEventListener("change",function(){
		radio=false;
	
	});
	
	$("agreeScroll").addEventListener("scroll",function(){
		if ($("agreeScroll").scrollTop == ($("agreeScroll").scrollHeight-$("agreeScroll").offsetHeight)) scroll = true; 
		varChk();
	});
	// submit button checks for wether or not a user has selected a button and than which one was selected there is a different actuion for each including an inline error for failure to select anything
	$("submitAgreement").addEventListener("click",function(){
		if ($("agree").checked == false && $("notagree").checked == false){
			$("err1").style.display="block";
		}
		else if ($("agree").checked == true){
			$("err1").style.display="none";
			window.alert ("Agreement Accepted");
		}
		else {
			$("err1").style.display="none";
			window.alert("You Must Accept The Agreement To Continue");
		}
	});
	


};