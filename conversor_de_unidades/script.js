// Selecionando Elementos 
let inputElement = document.querySelector('#input')
let fromElement = document.querySelector('#from')
let toElement = document.querySelector('#to')
let resultElement= document.querySelector('#result')
let convertBtn = document.querySelector('#convertBtn')
let messageElement = document.querySelector('#message')

// Função Para Converter Unidade
function convert() {
  let fromValue = fromElement.value
  let toValue = toElement.value

  if(fromValue === toValue) {
    resultElement.value = inputElement.value
    messageElement.textContent = " "
    return
  }

  // converter entrada para metros
  let meters
  switch (fromValue) {
    case "m":
      meters = inputElement.value
      break
    case "km":
      meters = inputElement.value * 1000
    break
    case "cm":
      meters = inputElement.value * 100
    break
    case "mm":
      meters = inputElement.value / 1000
      break
  }

  // converter metros para unidade de saída
  let result
  switch (toValue) {
    case "m":
      result = meters
    break
    case "km":
      result = meters / 1000
    break
    case "cm":
      result = meters / 100
    break
    case "mm":
      result = meters * 1000
    break
  }

  resultElement.value = result

  // Exibir resultado mensagem

  let fromlabel = fromElement.options[fromElement.selectedIndex].text
  let tolabel = toElement.options[toElement.selectedIndex].text
  
  let message = `${inputElement.value} ${fromlabel} equivalem a ${resultElement.value} ${tolabel}`
  messageElement.textContent = message
}

convertBtn.addEventListener('click', convert)
