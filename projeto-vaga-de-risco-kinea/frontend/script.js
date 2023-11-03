// script.js

function consultarCotacao() {
    const dateInput = document.getElementById('dateInput');
    const resultDiv = document.getElementById('result');
  
    // Obtenha a data inserida pelo usuário
    const date = dateInput.value;
  
    // Verifique se a data foi preenchida
    if (!date) {
      resultDiv.innerHTML = 'Por favor, insira uma data válida.';
    } else {
      // Faça uma requisição AJAX para o seu servidor Node.js (backend) para obter a cotação
      // Você pode usar a função fetch ou outras bibliotecas como axios para fazer isso.
      // Aqui está um exemplo usando fetch:
      fetch(`/cotacao?date=${date}`)
        .then(response => response.json())
        .then(data => {
          // Verifique se a resposta contém os dados da cotação
          if (data.error) {
            resultDiv.innerHTML = data.error;
          } else {
            resultDiv.innerHTML = `Cotação do dólar para ${date}: ${data.valor}`;
          }
        })
        .catch(error => {
          resultDiv.innerHTML = 'Ocorreu um erro na solicitação da cotação.';
        });
    }
  }
  