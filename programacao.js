//seleciona elementos do form
const  amount = document.querySelector("#amount")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")
const form = document.querySelector("form")
const lista = document.querySelector("ul")
const contador = document.querySelector("aside header p span")
const expenseTotal = document.querySelector("aside header h2")

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


//captura evento de submite
form.onsubmit = (event) =>{
    event.preventDefault()
//struct com todos os valores do formulario
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }   

    
    expenseAdd(newExpense)
   
}

//add novo item na lista
function expenseAdd(newExpense){
   try{
    
    //criar elemento que vai parecer na lista

      const expenseItem = document.createElement("li") 
      expenseItem.classList.add("expense") 
      const expenseIcon = document.createElement("img")

      //categoria
        const expenseInfo = document.createElement("div")
        const expenseName = document.createElement("strong")
        const expenseCat = document.createElement("span")  
      //fim categoria  

      //info despesa
        const expenseAmount = document.createElement("span") 
        expenseAmount.classList.add("expense-amount") 

        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$","")}`
      //fim info despesa

     //inicio icon  
      expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)

      expenseIcon.setAttribute("alt", newExpense.category_name)
    //fim icon 
    
      //categoria
        expenseInfo.classList.add("expense-info") 
        expenseName.textContent = newExpense.expense
        expenseCat.textContent = newExpense.category_name

        expenseInfo.append(expenseName,expenseCat)
     //fim categoria  
       
     //inicio icon del

        const delIcon = document.createElement("img")
        delIcon.classList.add("remove-icon")
        delIcon.setAttribute("src", "img/remove.svg")
        delIcon.setAttribute("alt", "remover")
    
     //fim icon del

     
     expenseItem.append(expenseIcon, expenseInfo,expenseAmount, delIcon)
     lista.append(expenseItem)
     updateTotals()

   }catch(error){
    alert("nao foi possivel atualizar a lista lista de despesas")
    console.log(error)
   }
}

//calcular itens la lista

function updateTotals(){

    try{
      //recuperar todo os itens da lista
      const itens = lista.children
      
      //atualiza iten da lista
      contador.textContent = `${itens.length} ${itens.length > 1 ? "despesas" : "despesa"}`

      //calcular o total das despesas 
      let total = 0

      for(let item = 0; item < itens.length; item++){
          let itemAmount = itens[item].querySelector(".expense-amount")

      //trocando qualquer coisa que nao seja numero por numero e ponto por virgula    
      let value = itemAmount.textContent.replace(/[^\d]/g,"").replace(",",".")
      
      value = parseFloat(value)

      total += value
      console.log(total)
      }

    //criar a span para adicionar o R$ formatado
      const sybolBRL = document.createElement("small")
      Symbol.textContent = "R$"

    }catch(error){
      alert("Erro ao somar os valores da lista")
    }

}