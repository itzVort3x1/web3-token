// to get the principal id - dfx identity get-principal
import Principal "mo:base/Principal";

actor Token {
     var owner : Principal = Principal.fromText("whec5-kerv3-ttazw-44f3u-fxe6y-m3jrm-k24b5-l4xts-kpstf-pecnw-wqe");
     var totalSupply : Nat = 1000000000;
     var symbol : Text = "DVOR";
}