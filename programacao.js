//seleciona elementos do form
const  amount = document.querySelector("#amount")

amount.oninput = () =>{
    amount.value = amount.value.replace(/\D/g ,"")
    console.log(amount.value)
}
