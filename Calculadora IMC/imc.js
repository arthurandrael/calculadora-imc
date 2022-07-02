let nome = document.querySelector('#nome')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let res = document.querySelector('#res')


function Calcular() {
  let imc = peso.value/(altura.value**2)
  let status = ''
  
  if(imc < 18.5) {
    status = 'abaixo do peso'
  }
  else if(imc >= 18.5 && imc <= 24.9) {
    status = 'com peso normal'
  }
  else if(imc >= 25 && imc <= 29.9) {
    status = 'com sobrepeso'
  }
  else if(imc > 30) {
    status = 'com obesidade'
  }
  
  
  let saida = document.querySelector('#saida')
  saida.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(1)} e você está ${status}.`
  res.appendChild(saida)
  
}
