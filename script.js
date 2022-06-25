// Selects frame elements from DOM
const frame = document.querySelector(".frame");
const stringLeft = document.querySelector(".string-left");
const stringRight = document.querySelector(".string-right");
const pin = document.querySelector(".pin");

// gets css values of components
const pinTop = parseInt(getComputedStyle(pin).getPropertyValue('top'));
const frameWidth = parseInt(getComputedStyle(frame).getPropertyValue('width'));
const stringOffset = parseInt(getComputedStyle(stringLeft).getPropertyValue('left'));

// calculates frame string vertical and horizontal componentxs
const stringVertComp = (pinTop * -1);
const stringHorizComp = (frameWidth/2 - stringOffset);

// calculates string width
const stringWidth = Math.sqrt(stringHorizComp**2 + stringVertComp**2).toFixed(2) + 3;

stringLeft.style.setProperty('width', `${stringWidth}px`);
stringRight.style.setProperty('width', `${stringWidth}px`);

// STRING ANGLE CALCULATION
const stringAngleLeft = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI * -1;
const stringAngleRight = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI;

stringLeft.style.transform = `rotate(${stringAngleLeft}deg) translateY(-25%)`;
stringRight.style.transform = `rotate(${stringAngleRight}deg) translateY(-25%)`;
