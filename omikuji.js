let username;
let userresult;
username = prompt("お名前を教えてください。");
if (username == "") {
    username = "名無し"
}
document.getElementById("name").innerHTML = username; // id=nameをusernameで上書きする

let rand = Math.floor(Math.random() *5) 
/*
Math.random() - 0以上1未満（0.0〜0.9999...）のランダムな小数を生成
*5 - 生成された数値を5倍します（0.0〜4.9999...の範囲
Math.floor() - 小数点以下を切り捨てて整数にします
*/
if (rand ==0){
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
}
if (rand == 2) {
    userresult = "小吉";
}
if (rand == 3) {
    userresult = "吉";
}
if (rand == 4) {
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;