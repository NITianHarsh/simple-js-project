/*
    now humare pass kuch value height se aayegi and kuch weight se aayegi
    hume usko extract krke, bmi return krna h
    ye ek form me h , so uske liye kuch alag chalta h
*/
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault(); // isse form jo submit hota h database me jata h wo ruk jayega
    //value nikalni h 
    const height = parseFloat(document.querySelector('#height').value) // value string me aayegi, to type casting krni hogi
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if(height == '' || height < '0' || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }
    else if(weight == '' || weight < '0' || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }
    else{
        (weight/(height*height/10000)).toFixed(2)

    }
    // humne ye sab andar define isly kiya taki jab submit ho tab hum ye value extract kre 
})