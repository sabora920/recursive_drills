// counting sheep drill
function countSheep(sheep) {
    if(sheep === 0){
        return;
    } 
    console.log(sheep + ' Another sheep jump over the fence')
    return countSheep(sheep - 1)
}
countSheep(3);


//doublin numbers in array drill
function arrayDouble(arr){
    if(arr.length === 0){
        return []
    }	    
    return [arr[0] * 2, ...arrayDouble(arr.slice(1))]
}	
console.log(arrayDouble([1,2,3]))


// Reverse String
function reverseString(str){
    if(str === ''){
        return '';
    }        
    return reverseString(str.substr(1)) + str.charAt(0)
}    
console.log(reverseString('Ryan'))
    

//nth Triangular Number
function triangle(n){
    if(n === 0){
        return 0;
    } 
    return n + triangle(n - 1)
}
console.log(triangle(9));


//String Splitter
function stringSplitter(str, splitter){
    
    const index = str.indexOf(splitter)
  
    if(str === ''){
        return '';
    }    
    
    return [str.slice(0, index)]
              .concat(
                stringSplitter(
                  str.slice(
                    index + splitter.length), splitter))
    
}    
console.log(stringSplitter('Ryan Sabo', ' '))


//binary representation
function binaryRep(num){
    let newNum = num / 2;
    if(num <= 0){
        return '';
    }
    return binaryRep(Math.floor(num / 2)) + (num % 2)
}
console.log(binaryRep(25))

//







