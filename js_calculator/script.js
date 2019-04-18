var square_b = document.getElementById('square-button');
var half_b = document.getElementById('half-button');
var percent_b = document.getElementById('percent-button');
var circle_b = document.getElementById('area-button');

var solution_div = document.getElementById('solution');

square_b.addEventListener('click', function squareNumber(){
	var square_n = document.getElementById('square-input').value;
	var square_ans = square_n * square_n;
	solution_div.innerHTML = square_ans;
	console.log('The result of squaring the number ' + square_n + ' is ' + square_ans);
});

half_b.addEventListener('click', function halfNumber(){
	var half_n = document.getElementById('half-input').value;
	var half_ans = half_n / 2;
	solution_div.innerHTML = half_ans;
	console.log('Half of ' + half_n + ' is ' + half_ans);
});

percent_b.addEventListener('click', function percentOf(){
	var percent_n1 = document.getElementById('percent1-input').value;
	var percent_n2 = document.getElementById('percent2-input').value;
	var percent_ans = ((percent_n1/percent_n2)*100).toFixed(2);
	solution_div.innerHTML = percent_ans + '%';
	console.log(percent_n1 + ' is ' + percent_ans + '% of ' + percent_n2);
});

circle_b.addEventListener('click', function areaOfCircle(){
	var radius = document.getElementById('area-input').value;
	var area = (radius*radius*Math.PI).toFixed(2);
	solution_div.innerHTML = area;
	console.log('The area for a circle with radius ' + radius + ' is ' + area);
});