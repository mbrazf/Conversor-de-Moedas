// Seleciona os elementos a serem manipulados / utilizados
let button = document.querySelector(".button")


//  Armazena a URL da API em uma variável
const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CAD-BRL,AUD-BRL,JPY-BRL,GBP-BRL,CNY-BRL,BTC-BRL'


//  Aqui chamamos a API armazenada utilizando o fetch
fetch(url)
//  Adicionamos o método then que contém uma função com um parâmetro 'resp', e usa o método json() para conversioner resp em dados JSON
.then((resp) => resp.json())
//  Adicionamos outro método then que recebe uma função com o parâmetro data, e armazenamos em uma variável os dados pegos da API.
.then(function(data) {
    let coins = data;
    
    console.log(coins)
    
    
    let euro = coins.EURBRL
    let dolar = coins.USDBRL
    let dolarCAN = coins.CADBRL
    let dolarAUS = coins.AUDBRL 
    let yen = coins.JPYBRL
    let libra = coins.GBPBRL
    let yuan = coins.CNYBRL
    let real 

   

    //  Adiciona a ação no botão
button.addEventListener("click", () => {
    let valorReal = document.getElementById("valorReal").value
    let select = document.getElementById("select")
    valorReal.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
    real = valorReal
    let  resultado = document.getElementById("resultado")
    let conversion

    
        switch(select.value){
            case  "EUR":
                    conversion = valorReal / euro.bid
                    resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"EUR"})} Euros`
                break;
    
            case "USD":
                    conversion = valorReal / dolar.bid
                    resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"USD"})} Dólares Americanos`
                break;
    
            case "CAD":
                conversion = valorReal / dolarCAN.bid
                resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"CAD"})} Dólares Canadense`
            break;
    
            case "AUD":
                conversion = valorReal / dolarAUS.bid
                resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"AUD"})} Dólares Australianos`
            break;
    
            case "JPY":
                conversion = valorReal / yen.bid
                resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"JPY"})} Yenes Japoneses`
            break;
    
            case "GBP":
                conversion = valorReal / libra.bid
                resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"GBP"})} Libras Esterlinas`
            break;
    
            case "CNY":
                conversion = valorReal / yuan.bid
                resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString("pt-BR", {style:"currency", currency:"CNY"})} Yuan Chinês`
            break;
        }

        /*
        if(valorReal.value = " "){
            resultado.textContent = "Por favor digite um valor no campo acima!"
            resultado.style.color = "red";
            console.log("CAMPO VAZIO")
        } 
        */

})
//  Pega o valor digitado no primeiro input
valorReal.addEventListener("input", () => {
     valorReal.value
})


//  Pega o segundo valor selecionado no select
select.addEventListener("change", () => {
    select.value
})

    
 //  Aqui se houver algum erro iremos capturá-lo e exibir uma mensagem de erro
}).catch(function(error) {
    alert('ERRO! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde.')
})


    
