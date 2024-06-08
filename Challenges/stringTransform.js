const transformString=(input)=>{
    const length = input.length;

    const reverseString=(str)=>{
        return str.split('').reverse().join('');
    }

    const toAsCodes=(str)=>{
        return str.split('').map(char =>char.charCodeAt(0)).join(' ');
    }

    if(length % 15 === 0){
        return toAsCodes(reverseString(input));
    }else if (length % 3 ===0){
        return reverseString(input);
    }else if (length % 5 === 0){
        return toAsCodes(input);
    }else {
        return input;
    }
}


console.log(transformString("Hamburger"));