//canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const getR = (min,max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}

let img = new Image();

let i = j = 0;

if(window.matchMedia("(max-width: 700px)").matches){
	img.onload = () => {
		let inter = setInterval(() => {
			i = getR(0,20);
			j = getR(0,20);
			ctx.drawImage(img,1 * i * 50,1 * j * 50,50,50,i * 15 * 2 + 10,j * 15 * 2 + 5,30,30);
		},1);
		setTimeout(() => {
			clearInterval(inter); 
		}, 20000);
	}
}
if(window.matchMedia("(min-width: 700px)").matches){
	img.onload = () => {
		let inter = setInterval(() => {
			i = getR(0,20);
			j = getR(0,20);
			ctx.drawImage(img,1 * i * 50,1 * j * 50,50,50,i * 15 * 2 + 100,j * 15 * 2 + 20,30,30);
		},1);
		setTimeout(() => {
			clearInterval(inter); 
		}, 20000);
	}
}
//input
const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
	if (e.keyCode == 13) {
		ctx.clearRect(100,0,1000,1000);
		img.src = input.value;
	}
});
function addOrEraser() {
	if (input.value !== "") {
		ctx.clearRect(100,0,1000,1000);
		img.src = input.value;
	}
	input.value = null;
}
