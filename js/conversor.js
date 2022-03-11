// Seleciona os elementos a serem manipulados / utilizados

let button = document.querySelector(".button")

let select1 = document.getElementById("select1")
let select2 = document.getElementById("select2")

let ul = document.getElementById("moedas")


//  Armazena a URL da API em uma variável
const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CAD-BRL,AUD-BRL,JPY-BRL,GBP-BRL,CNY-BRL'


//  Aqui chamamos a API armazenada utilizando o fetch
fetch(url)
//  Adicionamos o método then que contém uma função com um parâmetro 'resp', e usa o método json() para converter resp em dados JSON
.then((resp) => resp.json())
//  Adicionamos outro método then que recebe uma função com o parâmetro data, e armazenamos em uma variável os dados pegos da API.
.then(function(data) {
    let coins = data;
    
    console.log(coins)
    
    let euro = coins.EURBRL
    let dolar = coins.USDBRL
   
    //let dolarCAN = coins.CADBRL
    //let dolarAUS = coins.AUDBRL 
    //let yen = coins.JPYBRL
   // let libra = coins.GBPBRL
    //let yuan = coins.CNYBRL


    //  Adiciona a ação no botão
button.addEventListener("click",() => {
    let input1 = document.getElementById("input1").value
    let  resultado = document.getElementById("resultado")
    let convert
    

    if(select1.value == "BRL" && select2.value == "EUR" || select1.value == "EUR" && select2.value == "BRL") {
        convert = input1 * euro.bid 
        console.log(convert)
        resultado.innerHTML = convert
    } 

    if(select1.value == "BRL" && select2.value == "USD" || select1.value == "USD" && select2.value == "BRL") {
        convert = input1 * dolar.bid 
        console.log(convert)
    } 

    if(select1.value == "USD" && select2.value == "EUR" || select1.value == "EUR" && select2.value == "USD") {
        convert = euro.bid * dolar.bid 
        console.log(convert)
    } 
   
})

//  Pega o valor digitado no primeiro input
input1.addEventListener("input", () => {
    input1.value
})


//  Pega o valor selecionado no select
select1.addEventListener("change", () => {
    select1.value
    if(select1.value =="BRL") {
        select2.value = "USD"
    } else 
    select2.value = "BRL"
})

//  Pega o segundo valor selecionado no select
select2.addEventListener("change", () => {
    select2.value
    if(select2.value =="USD") {
        select1.value = "BRL"
    } else 
    select2.value = "USD"
})
    
 //  Aqui se houver algum erro iremos capturá-lo e exibir uma mensagem de erro
}).catch(function(error) {
    alert('ERRO! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde.')
})


    
