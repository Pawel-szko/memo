'use strict';

console.log("Dziala C:");

document.addEventListener('DOMContentLoaded', function(){

	
	var mem = document.querySelectorAll('.memo-przed');
	var memo = document.querySelectorAll('.memo');
	var start = document.querySelector('.start');
	let obrazki = ['social', 'water', 'localize', 'phone', 'wifi', 'phone2', 'home', 'play'];
	
	
	function losowanie(arr){
		return arr.sort(function(a, b) {

    		var losowe1 = Math.round( Math.random () * (10 - 1) + 1),
        		losowe2 = Math.round( Math.random () * (10 - 1) + 1);

    		return losowe1 - losowe2;

		});
	}

	

	function powiekszenie(dlugosc, arr){
		for (var i = 0; i < dlugosc; i++) {
		arr.push(obrazki[i]);
		}
		return arr;
	}
	

	

	

	
	
	var obrazki1 = powiekszenie(8, obrazki);

	start.addEventListener('click', function(){
		for (var i = memo.length - 1; i >= 0; i--) {
			for (var j = 0; j < obrazki.length; j++) {
				memo[i].classList.remove(obrazki[j]);
			}
			memo[i].classList.remove('ukryta');
		}
		
		losowanie(obrazki1);
		for (var i = 0; i < memo.length; i++) {
			memo[i].classList.remove('memo-po');
			//memo[i].classList.add(obrazki1[i]);
			memo[i].classList.add('memo-przed');

		}
	});

	

	function sprawdzenie(){

	}



	function funkcja(){
		//console.log(this);
		if (this.classList.contains('memo-przed')) {
			this.classList.remove('memo-przed');
			this.classList.add('memo-po');
		}
		for (var i = 0; i < memo.length; i++) {
			if (memo[i].classList.contains('memo-po')) {
				memo[i].classList.add(obrazki1[i]);
				//console.log(i);
			}
		}
		var mempo = document.querySelectorAll('.memo-po');
		var l = mempo.length;
		console.log(l);
		if (l == 2) {
			if (mempo[0].classList[2] == mempo[1].classList[2]) {
				for (var i = 0; i < mempo.length; i++) {
					mempo[i].classList.add('ukryta');
					mempo[i].classList.remove('memo-po');
					mempo[i].classList.add('memo-przed');
				}
				mempo = document.querySelectorAll('.memo-po');
			}

		}
		l = mempo.length;
		if (l > 2) {
			for (var i = 0; i < mempo.length; i++) {
				mempo[i].classList.remove('memo-po');
				mempo[i].classList.add('memo-przed');
			}
			for (var i = 0; i < mempo.length; i++) {
				for (var j = 0; j < obrazki.length; j++) {
					mempo[i].classList.remove(obrazki[j]);
				}
			}
		}
	}

	for (var i = 0; i < mem.length; i++) {
		mem[i].addEventListener('click',funkcja);
}
	

})