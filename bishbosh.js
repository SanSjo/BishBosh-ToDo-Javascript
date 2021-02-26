//Första implementationen skrivs ut i consolen
const fizzBuzz = () => {
    let num = 1;
    while (num<100) {
        if(num % 3 === 0 && num % 5 === 0) {
            console.log("Bish-Bosh");
        }
        else if (num % 5 === 0) {
            console.log("Bosh");
        }
        else if(num%3===0) {
            console.log("Bish");
        }
        else {
            console.log(num)
        }
        num++
    }

}

fizzBuzz();



//Andra impplementationen BishBosh 2.0 skrivs ut i browsern

const inputFizzBuzz = () => {
    let inputNum = document.querySelector("#loopNr").value;
    let inputFirstDiv = document.querySelector("#firstDivision").value;
    let inputSecondDiv = document.querySelector("#secondDivision").value;
    let num = 1;
    let output = [];
    
    while (num <= inputNum) {
                if(num % inputFirstDiv === 0 && num % inputSecondDiv === 0) {    
                    output.push("Bish-Bosh")
                }
                else if (num % inputSecondDiv === 0) {
                    output.push('Bosh');  
                }
                else if(num % inputFirstDiv===0) {
                    output.push("Bish");
                }
                else {
                    output.push(num)
                }
                num++
            }
    
            let newArray = output.map(item => " " + item );
    
    const resultHeader = document.querySelector('h4').innerHTML = `Resultat med ${inputNum} nummer`
    const resultValue = document.getElementById("result").innerHTML = newArray;
    console.log(resultValue);

}



document.querySelector("button").addEventListener("click", inputFizzBuzz)

   