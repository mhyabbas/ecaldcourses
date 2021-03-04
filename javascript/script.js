"use strict";

gsap.registerPlugin(MotionPathPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle");

var clickList = document.querySelectorAll(".click");
var descriptionList = document.querySelectorAll(".description");

// Arrowhead animation
gsap.set(".arrowhead", {
	xPercent: -50,
	yPercent: -50,
	transformOrigin: "50% 50%",
});

gsap.to(".arrowhead", {
	repeat: -1,
	duration: 5,
	ease: "none",
	motionPath: {
		path: ".circle",
		align: ".circle",
		autoRotate: true,
		start: .75,
		end: 1.75
	}
});

// Description
let clickListLength = clickList.length;
for(let i = 0 ; i < clickListLength; i++) {
	clickList[i].addEventListener("click", function() {
		document.querySelectorAll(".description").forEach(el => { el.style.display = "none" })
		document.querySelectorAll(".description")[i].style.display = "block";
	});
}

// IE11 code fix
// let descArray= Array.prototype.slice.call(descriptionList);
// for(let i = 0 ; i < clickListLength; i++) {
// 	(function(index) {
// 		clickList[i].addEventListener("click", function() {
// 			descArray.forEach(function(el) {
// 				el.style.display = "none";
// 			});
// 			descArray[index].style.display = "block";
// 		});
// 	})(i);
// }