function formataAltura(altura){
    return altura.replace(",",".")
}

function formataIMC(imc){
    return imc.replace(".",",")
}

function calcular(){
    peso = inputPeso.value
    altura = inputAltura.value

    if(peso == "" || altura == ""){
        resultado.innerHTML = "<p> Por favor, preencha os dados.</p>"
    }
    else{
        imc =  (peso / (formataAltura(altura) ** 2)).toFixed(2)
        if(imc < 17){
            msg = "Muito abaixo do peso"
        }
        else if(imc >= 17 && imc <=18.99){
            msg ="Abaixo do peso"
        }
        else if(imc >= 19 && imc <=24.99){
            msg ="Normal"
        }
        else if(imc > 25 && imc <=29.99){
            msg ="Acima do peso"
        }
        else if(imc >= 30 && imc <=34.99){
            msg ="Com obesidade nível 1"
        }
        else{
            msg = "Obseidade nivel 2"
        }

        resultado.innerHTML = `<p> Seu IMC é ${formataIMC(imc)} e você está ${msg}.</p>`
    }
}