const frame = document.getElementsByClassName("frame")[0];
const stringLeft = document.getElementsByClassName("string-left")[0];
const stringRight = document.getElementsByClassName("string-right")[0];
const pin = document.getElementsByClassName("pin")[0];

//STRING LENGTH CALCULATION
const pinTop = parseInt(getComputedStyle(pin).getPropertyValue('top'), 10);
const frameWidth = parseInt(getComputedStyle(frame).getPropertyValue('width'), 10);
const stringOffset = parseInt(getComputedStyle(stringLeft).getPropertyValue('left'), 10);

const stringVertComp = (pinTop * -1);
const stringHorizComp = (frameWidth/2 - stringOffset);

const stringWidth = Math.sqrt(stringHorizComp**2 + stringVertComp**2).toFixed(2) + 3;

stringLeft.style.setProperty('width', `${stringWidth}px`);
stringRight.style.setProperty('width', `${stringWidth}px`);

//STRING ANGLE CALCULATION
const stringAngleLeft = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI * -1;
const stringAngleRight = Math.atan(stringVertComp/stringHorizComp) * 180/Math.PI;

stringLeft.style.transform = `rotate(${stringAngleLeft}deg) translateY(-25%)`;
stringRight.style.transform = `rotate(${stringAngleRight}deg) translateY(-25%)`;
