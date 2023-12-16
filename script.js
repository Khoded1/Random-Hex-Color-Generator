const hex = document.querySelector('.hex');
const generateBtn = document.querySelector('.generate');

const generateColor = () => {
	const randomColor = Math.random().toString(16).substring(2, 8);
	document.body.style.backgroundColor = '#' + randomColor;
	hex.innerHTML = '#' + randomColor;
};

generateBtn.addEventListener('click', generateColor);

generateColor();
