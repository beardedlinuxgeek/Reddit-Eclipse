// change title
document.title = "jspx/src/eg/java/net" + document.title + ".java Eclipse";


// Add stylesheet
var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", chrome.extension.getURL("style.css") );
document.getElementsByTagName("head")[0].appendChild(fileref);

// Add eclipse header
var eclipseheader = document.createElement("DIV");
eclipseheader.setAttribute("id", "eclipseheader");
var header = document.getElementById('header');
header.parentNode.insertBefore(eclipseheader, header);

// Left header image
var img = document.createElement("IMG");
img.src = chrome.extension.getURL("top-left.png");
eclipseheader.appendChild(img);

// Right header image
var img2 = document.createElement("IMG");
img2.src = chrome.extension.getURL("top-right.png");
img2.style.position = "absolute";
img2.style.right = "0px"; 
eclipseheader.appendChild(img2);


// Add eclipse project list
var eclipseprojects = document.createElement("DIV");
eclipseprojects.setAttribute("id", "eclipseprojects");
eclipseprojects.innerHTML = "<ul id='projectlist'>" + document.getElementById('sr-bar').innerHTML + "</ul>";
var content = document.getElementById('header');
content.parentNode.insertBefore(eclipseprojects , content);

if (window.addEventListener) {
	
	var isCtrl = false;
	
	window.addEventListener("keydown", function(e){
		
		if (e.keyCode==88 && isCtrl) {
			// Disable or enable stylesheet
			if( fileref.disabled == true ) {
				fileref.disabled=false;
				document.getElementById('eclipseheader').style.display = 'block';
				document.getElementById('eclipseprojects').style.display = 'block'; 
			} else {
				fileref.disabled=true;
				document.getElementById('eclipseheader').style.display = 'none';
				document.getElementById('eclipseprojects').style.display = 'none'; 
			}
		} else if(e.ctrlKey) { 
			isCtrl = true;
		} else {
			isCtrl = false;
		}
	});		

}
