function calc1() {
	var sum = 0;
	 for (var i=3; i < document.getElementById('num1').value; i++){
        if (i%3===0){
         sum = sum + i;
        }
        else if(i%5===0){
         sum = sum + i;
        }
        else{
         continue;
        }
    }
	 document.getElementById('result').innerHTML = sum;
 }

function calc2(){
     var sum = 0;
	 var fibonacci = [1,2];
	for (var i=2; i < document.getElementById('num2').value; i++){
     var add = fibonacci[i-2]+fibonacci[i-1];
	 fibonacci.push(add);
    }	
	for (var i=0; i <= fibonacci.length ; i++){
	 if (fibonacci[i] % 2 === 0){
	     sum = sum + fibonacci[i];
	 }
	 else{
	     continue;
	 }
    }
	document.getElementById('result').innerHTML = sum;
 }

 function isPrime (input){
     var prime = true;
	 for (var l = 2 ; l < input; l++){
	 
	     if ( input % l === 0){
	         prime = false;
	        }
			
	    }
	 return prime;
    }
	
 function calc3(){
     var largestPrime = 0
	 for (var i = 2 ; i < document.getElementById('num3').value; i++){
	     
		 if ( document.getElementById('num3').value % i === 0) {
		 
		     if ( isPrime(i) === true){
		         largestPrime = i ;
		     }
		     else {
		         continue;
		     }
			 
		 }
		 else {
		     continue;
		 }
	 }
     document.getElementById('result').innerHTML = largestPrime;
 }