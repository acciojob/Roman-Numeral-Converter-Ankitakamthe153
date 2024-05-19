function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let roman = '';
    let i = 0;

    while (num > 0) {
        const [symbol, value] = obj[i];
        if (num >= value) {
            roman += symbol;
            num -= value;
        } else {
            // Check for subtractive notation (e.g., IV, IX, XL, XC, etc.)
            const nextValue = obj[i + 1][1];
            const subtractiveSymbol = obj[i + 1][0];
            if (num >= value - nextValue) {
                roman += subtractiveSymbol + symbol;
                num -= (value - nextValue);
            }
        }
        i++;
    }

    return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 //console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
