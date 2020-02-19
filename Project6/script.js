window.onload = function(){
	let block = document.getElementById("block");
	//Pos Y Manipulation
	let posY = document.getElementById('pos-y');
	posY.onchange = function(){
		block.style.top = posY.value+ 'px';
	}
	//Pos X Manipulation
	let posX = document.getElementById('pos-x');
	posX.onchange = function(){
		block.style.left = posX.value+ 'px';
	}
	//Size manipulation
	let size = document.getElementById('size');
	size.onchange = function(){
		block.style.transform ='scale('+size.value+ ')';
	}
	//Opacity manipulation
	let opacity = document.getElementById('opacity');
	opacity.onchange = function(){
		block.style.opacity = opacity.value;
	}
	//Shape manipulation
	let shape = document.getElementById('shape-select');
	let okBtn = document.getElementById('ok-shape');
	okBtn.onclick = function(){
		let option = shape.value;
		if(option === '1'){
			block.style.borderRadius = '0';
			block.style.transform = 'rotate(0deg)'
		}
		else if(option === '2'){
			block.style.borderRadius = '50%';
		}
		else if(option === '3'){
			block.style.borderRadius = '0';
			block.style.transform = 'rotate(45deg)';
		}
	}
	//hex manipulation
	let hex = document.getElementById('hex');
	hex.onkeypress = function(e){
		if(e.which === 13){
		block.style.backgroundColor = '#'+hex.value;
		}
	}
	//rgba manipulation
	let r = document.getElementById('rgba-r');
	let g = document.getElementById('rgba-g');
	let b = document.getElementById('rgba-b');
	let a = document.getElementById('rgba-a');
	
	let rgbaCont = document.querySelector('.rgba-container');
	let rgbaInputs = rgbaCont.querySelectorAll('input');
	
	for(let i = 0 ; i < rgbaInputs.length ; i++){
		rgbaInputs[i].onchange = function(){
			block.style.backgroundColor = 'rgba(' +r.value+ ',' +g.value+','+b.value+','+a.value+')';
		}
	}
}