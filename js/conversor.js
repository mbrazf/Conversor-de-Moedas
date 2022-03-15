

//  Armazena a URL da API em uma variável
const url =
  "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CAD-BRL,AUD-BRL,JPY-BRL,GBP-BRL,CNY-BRL,BTC-BRL";

//  Aqui chamamos a API armazenada utilizando o fetch
fetch(url)
  //  Adicionamos o método then que contém uma função com um parâmetro 'resp', e usa o método json() para conversioner resp em dados JSON
  .then((resp) => resp.json())
  //  Adicionamos outro método then que recebe uma função com o parâmetro data, e armazenamos em uma variável os dados pegos da API.
  .then(function (data) {
    let coins = data;

    // Armazena os dados de cada moeda em uma variável própria
    let euro = coins.EURBRL;
    let dolar = coins.USDBRL;
    let dolarCAN = coins.CADBRL;
    let dolarAUS = coins.AUDBRL;
    let yen = coins.JPYBRL;
    let libra = coins.GBPBRL;
    let yuan = coins.CNYBRL;
    let real;

    // Seleciona o elemento button que realizar a ação de converter
    let button = document.querySelector(".button");

    // Criação da tabela dinâmica com o JS
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    // Associamos o thead e o tbody na table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Associamos a table na div com o ID body
    let body = document.getElementById("body").appendChild(table);

    //  Aqui criamos os titulos da table
    let linha1 = document.createElement("tr");
    let titulo1 = document.createElement("th");
    titulo1.innerHTML = "Moeda";
    let titulo2 = document.createElement("th");
    titulo2.innerHTML = "Código";
    let titulo3 = document.createElement("th");
    titulo3.innerHTML = "Cotação";

    // Associamos os titulos no TR da table e TR no thead
    linha1.appendChild(titulo1);
    linha1.appendChild(titulo2);
    linha1.appendChild(titulo3);
    thead.appendChild(linha1);

    //  Criamos a primeira linha com os dados da moeda euro
    let linha2 = document.createElement("tr");
    let linha2_data_1 = document.createElement("td");
    linha2_data_1.innerHTML = `${euro.name}`;
    let linha2_data_2 = document.createElement("td");
    linha2_data_2.innerHTML = `${euro.code}`;
    let linha2_data_3 = document.createElement("td");
    linha2_data_3.innerHTML = `${euro.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha2.appendChild(linha2_data_1);
    linha2.appendChild(linha2_data_2);
    linha2.appendChild(linha2_data_3);
    tbody.appendChild(linha2);

    //  Criamos a primeira linha com os dados da moeda dolar
    let linha3 = document.createElement("tr");
    let linha3_data_1 = document.createElement("td");
    linha3_data_1.innerHTML = `${dolar.name}`;
    let linha3_data_2 = document.createElement("td");
    linha3_data_2.innerHTML = `${dolar.code}`;
    let linha3_data_3 = document.createElement("td");
    linha3_data_3.innerHTML = `${dolar.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha3.appendChild(linha3_data_1);
    linha3.appendChild(linha3_data_2);
    linha3.appendChild(linha3_data_3);
    tbody.appendChild(linha3);

    //  Criamos a primeira linha com os dados da moeda dolar canadense
    let linha4 = document.createElement("tr");
    let linha4_data_1 = document.createElement("td");
    linha4_data_1.innerHTML = `${dolarCAN.name}`;
    let linha4_data_2 = document.createElement("td");
    linha4_data_2.innerHTML = `${dolarCAN.code}`;
    let linha4_data_3 = document.createElement("td");
    linha4_data_3.innerHTML = `${dolarCAN.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha4.appendChild(linha4_data_1);
    linha4.appendChild(linha4_data_2);
    linha4.appendChild(linha4_data_3);
    tbody.appendChild(linha4);

    //  Criamos a primeira linha com os dados da moeda dolar australiano
    let linha5 = document.createElement("tr");
    let linha5_data_1 = document.createElement("td");
    linha5_data_1.innerHTML = `${dolarAUS.name}`;
    let linha5_data_2 = document.createElement("td");
    linha5_data_2.innerHTML = `${dolarAUS.code}`;
    let linha5_data_3 = document.createElement("td");
    linha5_data_3.innerHTML = `${dolarAUS.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha5.appendChild(linha5_data_1);
    linha5.appendChild(linha5_data_2);
    linha5.appendChild(linha5_data_3);
    tbody.appendChild(linha5);

    //  Criamos a primeira linha com os dados da moeda libra
    let linha6 = document.createElement("tr");
    let linha6_data_1 = document.createElement("td");
    linha6_data_1.innerHTML = `${libra.name}`;
    let linha6_data_2 = document.createElement("td");
    linha6_data_2.innerHTML = `${libra.code}`;
    let linha6_data_3 = document.createElement("td");
    linha6_data_3.innerHTML = `${libra.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha6.appendChild(linha6_data_1);
    linha6.appendChild(linha6_data_2);
    linha6.appendChild(linha6_data_3);
    tbody.appendChild(linha6);

    //  Criamos a primeira linha com os dados da moeda yene
    let linha7 = document.createElement("tr");
    let linha7_data_1 = document.createElement("td");
    linha7_data_1.innerHTML = `${yen.name}`;
    let linha7_data_2 = document.createElement("td");
    linha7_data_2.innerHTML = `${yen.code}`;
    let linha7_data_3 = document.createElement("td");
    linha7_data_3.innerHTML = `${yen.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha7.appendChild(linha7_data_1);
    linha7.appendChild(linha7_data_2);
    linha7.appendChild(linha7_data_3);
    tbody.appendChild(linha7);

    //  Criamos a primeira linha com os dados da moeda yuan
    let linha8 = document.createElement("tr");
    let linha8_data_1 = document.createElement("td");
    linha8_data_1.innerHTML = `${yuan.name}`;
    let linha8_data_2 = document.createElement("td");
    linha8_data_2.innerHTML = `${yuan.code}`;
    let linha8_data_3 = document.createElement("td");
    linha8_data_3.innerHTML = `${yuan.bid}`;

    // Associamos os elementos na TR da table e a TR no tbody
    linha8.appendChild(linha8_data_1);
    linha8.appendChild(linha8_data_2);
    linha8.appendChild(linha8_data_3);
    tbody.appendChild(linha8);

    //  Adiciona a ação de clique no botão para realizar a conversão
    button.addEventListener("click", () => {
      let valorReal = document.getElementById("valorReal").value;
      let select = document.getElementById("select");
      valorReal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      real = valorReal;
      let resultado = document.getElementById("resultado");
      let conversion;

      //  Aqui utilizamos o switch para visualizar qual value do select foi selecionado e baseado nisso realizamos o cálculo
      switch (select.value) {
        case "EUR":
          conversion = valorReal / euro.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "EUR" }
          )} Euros`;
          break;

        case "USD":
          conversion = valorReal / dolar.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "USD" }
          )} Dólares Americanos`;
          break;

        case "CAD":
          conversion = valorReal / dolarCAN.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "CAD" }
          )} Dólares Canadense`;
          break;

        case "AUD":
          conversion = valorReal / dolarAUS.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "AUD" }
          )} Dólares Australianos`;
          break;

        case "JPY":
          conversion = valorReal / yen.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "JPY" }
          )} Yenes Japoneses`;
          break;

        case "GBP":
          conversion = valorReal / libra.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "GBP" }
          )} Libras Esterlinas`;
          break;

        case "CNY":
          conversion = valorReal / yuan.bid;
          resultado.innerHTML = `R$${valorReal} Reais é igual a ${conversion.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "CNY" }
          )} Yuan Chinês`;
          break;
      }

      // Validação se os campos estão preenchidos
      if (valorReal == 0 || valorReal == " ") {
        alert("Por favor digite um valor em Real!");
      }

      if (select.value == " ") {
        alert("Por favor selecione uma conversão!");
      }
    });
    //  Pega o valor digitado no primeiro input
    valorReal.addEventListener("input", () => {
      valorReal.value;
    });

    //  Pega o segundo valor selecionado no select
    select.addEventListener("change", () => {
      select.value;
    });

    //  Aqui se houver algum erro iremos capturá-lo e exibir uma mensagem de erro
  })
  .catch(function (error) {
    alert(
      "ERRO! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde."
    );
  });
