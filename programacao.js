//seleciona elementos do form
const  amount = document.querySelector("#amount")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")
const form = document.querySelector("form")
const lista = document.querySelector("ul")


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

    console.log(newExpense)
    expenseAdd(newExpense)
   
}

function expenseAdd(newExpense){
   try{
    
    //criar elemento que vai parecer na lista

      const expenseItem = document.createElement("li") 
      const expenseIcon = document.createElement("img")

      //categoria
      const expenseInfo = document.createElement("div")
      const expenseName = document.createElement("strong")
      const expenseCat = document.createElement("span")  
      //fim categoria  

      expenseItem.classList.add("expense") 
       
      expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)

      expenseIcon.setAttribute("alt", newExpense.category_name)
      
      expenseItem.append(expenseIcon)

      //categoria
      expenseInfo.classList.add("expense-info") 
      expenseName.textContent = newExpense.expense
      expenseCat.textContent = newExpense.category_name

      expenseInfo.append(expenseName,expenseCat)

     //fim categoria  
     
     
      lista.append(expenseItem)
      lista.append(expenseInfo)

   }catch(error){
    alert("nao foi possivel atualizar a lista lista de despesas")
    console.log(error)
   }
}