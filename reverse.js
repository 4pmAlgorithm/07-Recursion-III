//write a recursive function called reverse which accepts a string and returns a new string in reverse. 

function reverse(str){
    if(str.length < 0) return 
    if(str.length <= 1) return str
    
    // for(let i = 0; i < str.length; i++){
    //     let eachLet = str[i]
    //     console.log(eachLet)
    // }
    let str1 = reverse(str.substring(1, str.length-1))

    return str[str.length-1] + str1 + str[0]    
}

console.log(reverse('awesome'))