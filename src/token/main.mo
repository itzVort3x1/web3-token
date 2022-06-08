// to get the principal id - dfx identity get-principal
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor Token {
     var owner : Principal = Principal.fromText("whec5-kerv3-ttazw-44f3u-fxe6y-m3jrm-k24b5-l4xts-kpstf-pecnw-wqe");
     var totalSupply : Nat = 1000000000;
     var symbol : Text = "DVOR";

     // prinicpal is the key and nat is the value that we are going to store.
     //(1, Principal.equal, Principal.hash) 1 is the inital size of the array, Principal.equal checks for the principal in the hash map, Principal.hash hashes the principal before storing.
     var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

     balances.put(owner, totalSupply);

     public query func balanceOf(id: Principal): async Nat {

          let balance: Nat = switch (balances.get(id)){
               case null 0;
               case (?result) result;
          };

          return balance;
     };

     public query func getSymbol(): async Text {
          return symbol;
     };

     // shared(msg) gives us the id of the caller, whoever is accessing on the front-end;
     public shared(msg) func payOut(): async Text {
          // Debug.print(debug_show(msg.caller));
          if(balances.get(msg.caller) == null){
               let amount = 10000;
               let result = await transfer(msg.caller, amount);
               return result;
          }else {
               return "Already Claimed";
          }
     };

     public shared(msg) func transfer(to: Principal, amount: Nat): async Text {
          let fromBalance = await balanceOf(msg.caller);
          if(fromBalance >= amount){
               let newFromBalance: Nat = fromBalance - amount;
               balances.put(msg.caller, newFromBalance);

               let toBalance = await balanceOf(to);
               let newToBalance = toBalance + amount;
               balances.put(to, newToBalance);

               return "Success";
          }else {
               return "Insufficient Funds";
          }

     };
};