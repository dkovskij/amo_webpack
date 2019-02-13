function speed(){
	let speedInp = document.getElementById('speed_inp').value;
	let speed_out = document.querySelector('.speed_out');
	let speed_ms;

	if ( isNaN(speedInp) || !speedInp || speedInp <= 0 ) {
	 speed_out.innerText = 'Пожалуйста, введите число';
	} else {
	speed_ms = speedInp * 1000 / 3600;
	speed_out.innerText = 'Скорость ' + speedInp + ' км/ч' + ' равна ' + Math.round(speed_ms) + ' м/с';
	}
};

export {speed};