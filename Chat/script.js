let arrMsg = [
    { user : 0, message: ["hello hello","mike testing hello"]},
    { user : 1, message: ["1"]},
    { user : 2, message: ["2"]},
    { user : 3, message: ["3"]},
    { user : 4, message: ["4"]}
];
let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    arrMsg[receiver.value].message.push(textbox.value);
    showMessages(receiver.value);
    //messages.innerHTML = arrMsg[receiver.value].message;
    textbox.value = "";
});
function showMessages(receiver) {
    let users = arrMsg.find((users) => users.user == receiver);
	messages.innerHTML = users.message;
	setTimeout(showMessages, 5000);
}

