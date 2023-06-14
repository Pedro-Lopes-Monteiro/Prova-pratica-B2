 // Função para verificar se um número é primo
 function isPrime(num) {
    // Verifica se o número é menor que 2, pois números menores que 2 não são primos
    if (num < 2) {
      return false;
    }
    // Verifica se o número é divisível por algum número entre 2 e a sua metade
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    // Se não foi encontrado nenhum divisor, o número é primo
    return true;
  }

  // Array para armazenar os números primos de 1 a 1000
  const primes = [];

  // Verifica se cada número de 1 a 1000 é primo e adiciona ao array se for
  for (let i = 1; i <= 1000; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  // Função para verificar se o número digitado é primo e se está no array de números primos de 1 a 1000
  function verificarPrimo() {
    const num = parseInt(document.getElementById("num").value);
    if (isPrime(num)) {
      if (primes.includes(num)) {
        document.getElementById("resultado").textContent = `${num} é primo e está na lista de números primos de 1 a 1000.`;
      } else {
        document.getElementById("resultado").textContent = `${num} é primo, mas não está na lista de números primos de 1 a 1000.`;
      }
    } else {
      document.getElementById("resultado").textContent = `${num} não é primo.`;
    }
    // Exibe os números primos de 1 a 1000 separados por vírgulas
    document.getElementById("primos").textContent = primes.join(", ");
  }



  function calcularFatorial() {
    var n = parseInt(document.getElementById("numero").value);
    var passoAPassoFixo = "";
    for (var j = 1; j <= 10; j++) {
      var resultadoFixo = 1;
      passoAPassoFixo += "O fatorial de " + j + " é: ";
      for (var i = 2; i <= j; i++) {
        resultadoFixo *= i;
        if (i < j) {
          passoAPassoFixo += i + " x ";
        } else {
          passoAPassoFixo += i + " = " + resultadoFixo + "<br>";
        }
      }
    }
    var passoAPasso = "";
    if (Number.isInteger(n) && n >= 1) {
      var resultado = 1;
      passoAPasso += "O fatorial de " + n + " é: ";
      for (var i = 2; i <= n; i++) {
        resultado *= i;
        if (i < n) {
          passoAPasso += i + " x ";
        } else {
          passoAPasso += i + " = " + resultado + "<br>";
        }
      }
      document.getElementById("resultado-fatorial").innerHTML = passoAPasso + "<br>" + passoAPassoFixo;
    } else {
      document.getElementById("resultado-fatorial").innerHTML = "Por favor, insira um número inteiro positivo.";
    }
  }

  function verificarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário

    const senha = document.getElementById('senha').value;
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;

    if (senha.length < 8) {
      alert('A senha não possui pelo menos 8 caracteres');
      return false;
    }

    if (!regexMaiuscula.test(senha)) {
      alert('A senha não contém pelo menos uma letra maiúscula');
      return false;
    }

    if (!regexMinuscula.test(senha)) {
      alert('A senha não contém pelo menos uma letra minúscula');
      return false;
    }

    if (!regexNumero.test(senha)) {
      alert('A senha não contém pelo menos um número');
      return false;
    }

    alert('A senha atende a todos os critérios');
    return true;
  }
  
  function alternarVisualizacaoSenha() {
    const senhaInput = document.getElementById('senha');
    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
    } else {
      senhaInput.type = 'password';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', verificarSenha);
    
    const visualizarSenhaButton = document.getElementById('visualizarSenha');
    visualizarSenhaButton.addEventListener('click', alternarVisualizacaoSenha);
  });