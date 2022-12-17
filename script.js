let userInput = document.querySelector(".userInput");
let button = document.querySelector("button");
let result = document.querySelector(".result");


button.addEventListener('click', palindromeChecker);

function palindromeChecker(){

    let reversevalue = userInput.value.toLowerCase();

    if(reversevalue != "")
    {
        reversevalue = reversevalue.split("").reduceRight( (acc, e) => acc + e)

        if(userInput.value.toLowerCase() == reversevalue){
            return result.innerText = ` ${userInput.value.toLowerCase()} == ${reversevalue} \n So...It's a Palindrome`;
        }
        else{
            return result.innerText = `${userInput.value} != ${reversevalue} \n So...Not a Palindrome`;;
        }
    }

    else
    {
        return result.innerText = "You haven't entered anything"
    }

}