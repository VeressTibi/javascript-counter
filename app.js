const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

let number = 0;

console.log(number);

plus.addEventListener("click", ()=> {

    number++;

    result.innerHTML = number;

})

minus.addEventListener("click", ()=> {

    number--;

    result.innerHTML = number;

})

reset.addEventListener("click", ()=> {

    number=0;

    result.innerHTML = number;

})
output ="";
output += `
        <p>$(number.value)</p>
        
        `;
result.innerHTML = number;

   