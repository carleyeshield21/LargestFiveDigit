// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

function solution(digits){
    // We create an array arrdigits so we can use the for loop and push each element of the digits. We will then sort the array to ascending order    
    arrdigits = []
    for(i=0; i<=digits.length-1; i++){
        arrdigits.push(digits[i])
    }
    sortedarrdigits = arrdigits.sort()

    // We will use the ...new Set function to omit the duplicates
    let uniquesorted = [...new Set(sortedarrdigits)];

    // We will now use the if condition to check if the first element is '0', we will remove it from the first position and push it back to the array
    if(uniquesorted[0] == '0'){
        uniquesorted.shift()
        uniquesorted.push('0')
    } 
    
    // We create a numnum array so we can push the last 5 elements to it using the last index until the index reaches to length minus 5, then decrement in each iteration. We convert it then to a string and use the replace function to replace all commas with a single space
    newnum = []
    for(i=uniquesorted.length-1; i>=uniquesorted.length-5; i--){
        newnum.push(uniquesorted[i])
    }
    newnum = newnum.reverse()
    newnum = newnum.toString()

    const newnumstr = newnum.replace(/,/g, '');
    console.log(newnumstr);

}
solution('1234567890')
console.log('=====')
solution('9815240')