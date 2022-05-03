class Account {
    #name;
    #balance;

    static accountInfoList = [];

    createaAcount(){
        this.#name = document.getElementById("name").value;
        this.#balance = parseFloat(document.getElementById("balance").value);
        if(localStorage.accounts != undefined){
            Account.accountInfoList = JSON.parse(localStorage.accounts);
        }
        Account.accountInfoList.push(this.toJson());
        localStorage.setItem("accounts", JSON.stringify(Account.accountInfoList));
        document.getElementById("name").value = "";
        document.getElementById("balance").value = "";
        Account.fillTextarea();
    }

    makeDeposit(dep){
        this.#balance += dep;
    }

    makeDebit(amount){
        this.#balance -= amount;
    }

    toJson(){
        return {name: this.#name, balance: this.#balance}
    }


    static fillTextarea(){
        if(localStorage.accounts != undefined){
            var str = "";
            for(var item of JSON.parse(localStorage.accounts)){
                str += "Account name: " + item.name + " Balance: " + item.balance + "\n";
            }
            document.getElementById("result").value = str;
        }
    }

}