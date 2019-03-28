function findThePrimeNumber(n)
					{
		if (n <= 1000) {
  			if ((n === 0) || (n === 1))  {
    		console.log("Число " + n + " не является простым числом");
  			} else if ( n === 2 )  {
   			 console.log("Число " + n + " - простое число");
			  } else  {
    				for(var i = 2; i < n; i++) {
      					if (n % i === 0) {
       					 console.log("Число " + n + " - составное число");
						return false;
    			  		} 
   				 }
   				 console.log("Число " + n + " - простое число");;  
		  		}
                    }  else {
					console.log("Данные неверны");
                    }
                    };

                    findThePrimeNumber(100);
                    findThePrimeNumber(121);
                    findThePrimeNumber(1);