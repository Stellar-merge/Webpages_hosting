const myTemp = document.getElementById("myTemp")
const mySubmit = document.getElementById("mySubmit")
const myRes = document.getElementById("myRes")

const myForm = document.getElementById("myForm")

const myRadio_C_F = document.getElementById("myRadio_C_F")
const myRadio_F_C = document.getElementById("myRadio_F_C")

let c=0, f=0

mySubmit.onclick = function(event){

    event.preventDefault() // stops reload

    if(myRadio_C_F.checked){
            c = myTemp.value
            f = (9*c/5)+32

            myRes.textContent = f.toFixed(2)
        }
    
    else if(myRadio_F_C.checked){
            f= myTemp.value
            c= 5*(f-32)/9

            myRes.textContent = c.toFixed(2)
        }
    
}