// gets required elements for string width and angle calculation
const frame = document.getElementsByClassName("frame")[0];
const stringLeft = document.getElementsByClassName("string-left")[0];
const stringRight = document.getElementsByClassName("string-right")[0];
const pin = document.getElementsByClassName("pin")[0];

// gets required styles for string width and angle calculation
const pinTop = parseInt(getComputedStyle(pin).getPropertyValue('top'), 10);
const frameWidth = parseInt(getComputedStyle(frame).getPropertyValue('width'), 10);
const stringOffset = parseInt(getComputedStyle(stringLeft).getPropertyValue('left'), 10);

// calculates vertical and horizontal component for right angled triangle where the length of the hypotenuse is the width of the strings
const stringVertComp = (pinTop * -1);
const stringHorizComp = (frameWidth/2 - stringOffset);

// calculates the width of the strings
const stringWidth = Math.sqrt(stringHorizComp**2 + stringVertComp**2).toFixed(2) + 3;

// sets newly calculated width as the width of the left and right strings.
stringLeft.style.setProperty('width', `${stringWidth}px`);
stringRight.style.setProperty('width', `${stringWidth}px`);

// calculates the angles for the left aand right angles
const stringAngleLeft = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI * -1;
const stringAngleRight = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI;

// sets newly calculated angles as the angles for the left and right strings.st
stringLeft.style.transform = `rotate(${stringAngleLeft}deg) translateY(-25%)`;
stringRight.style.transform = `rotate(${stringAngleRight}deg) translateY(-25%)`;
