//seleciona elementos do form
const  amount = document.querySelector("#amount")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")
const form = document.querySelector("form")

//captura evento de input para formatar o valor
amount.oninput = () =>{
    let valor = amount.value.replace(/\D/g,"")

    valor = Number(valor)/100
    
    amount.value = formatCurrencyBRL(valor)
}


function formatCurrencyBRL(value){
    value = value.toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL",
    })

    return value
}


form.onsubmit = (event) =>{
    event.preventDefault()
    
}