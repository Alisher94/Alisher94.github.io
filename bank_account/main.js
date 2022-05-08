window.onload = function () {
    document.getElementById("add_account").onclick = addAccount
    document.getElementById("deposit").onclick = deposit
    document.getElementById("debit").onclick = debit
    Account.fillTextarea()
}

function addAccount(){
    if(document.getElementById("name").value.length == 0 || document.getElementById("balance").value.length == 0){
        alert("Please, fill all inputs!");
    }else{
        let account = new Account();
        account.createaAcount();
    }
    
}

function deposit(){
    window.location.href = "make_deposit.html";
}

function debit(){
    window.location.href = "make_debit.html";
}



