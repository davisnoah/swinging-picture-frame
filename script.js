const calcStringStyles = () => {
	// gets required elements for string width and angle calculation
	const frame = document.querySelector(".frame");
	const stringLeft = document.querySelector(".string-left");
	const stringRight = document.querySelector(".string-right");
	const pin = document.querySelector(".pin");

	// gets required styles for string width and angle calculation
	const pinTop = parseInt(getComputedStyle(pin).getPropertyValue('top'), 10);
	const frameWidth = parseInt(getComputedStyle(frame).getPropertyValue('width'), 10);
	const stringOffset = parseInt(getComputedStyle(stringLeft).getPropertyValue('left'), 10);

	// calculates vertical and horizontal component for right angled triangle where the length of the hypotenuse is the width of the strings
	const stringVertComp = (pinTop * -1);
	const stringHorizComp = (frameWidth/2 - stringOffset);

	// calculates the width of the strings
	const stringWidth = Math.sqrt(stringHorizComp**2 + stringVertComp**2).toFixed(2) + 3;

	// sets newly calculated width as the width of the left and right strings
	stringLeft.style.setProperty('width', `${stringWidth}px`);
	stringRight.style.setProperty('width', `${stringWidth}px`);

	// calculates the angles for the left aand right angles
	const stringAngleLeft = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI * -1;
	const stringAngleRight = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI;

	// sets newly calculated angles as the angles for the left and right strings
	stringLeft.style.transform = `rotate(${stringAngleLeft}deg) translateY(-25%)`;
	stringRight.style.transform = `rotate(${stringAngleRight}deg) translateY(-25%)`;
}

const updateFrame = (elem) => {
	// gets reference to root of document
	const root = document.querySelector(':root');
	
	// gets references to different controls
	const stringLength = document.querySelector('#string-length');
	const pinWidth = document.querySelector('#pin-size');
	const frameWidth = document.querySelector('#frame-width');
	const frameHeight = document.querySelector('#frame-height');
	
	// checks what controls were called updateFrame() and update appropriate root property
	if (elem === stringLength) {
		root.style.setProperty('--pin-top', `${2 + (elem.value * 0.07)}rem`);
	} else if (elem === pinWidth) {
		root.style.setProperty('--pin-width', `${elem.value * 0.3}px`);
	} else if (elem === frameWidth) {
		root.style.setProperty('--frame-width', `${8.16 + elem.value * 0.0768}rem`);
	} else if (elem === frameHeight) {
		root.style.setProperty('--frame-height', `${5 + elem.value * 0.22}rem`)
	}
	
	// update string lengths and angles
	calcStringStyles();
}

// calls updateFrame() to calculate initial string lengths and angles
updateFrame();