let arrMsg = [
    { sender: 1, receiver : 2, message: ["message 1 -2"]},
    { sender: 1, receiver : 3, message: ["message 1 -3"]},
    { sender: 1, receiver : 4, message: ["message 1 -4"]},
    { sender: 1, receiver : 5, message: ["message 1 -5"]},
    { sender: 2, receiver : 3, message: ["message 2 -3"]},
    { sender: 2, receiver : 4, message: ["message 2 -4"]},
    { sender: 2, receiver : 5, message: ["message 2 -5"]},
    { sender: 3, receiver : 4, message: ["message 3 -4"]},
    { sender: 3, receiver : 5, message: ["message 3 -5"]},
    { sender: 4, receiver : 5, message: ["message 4 -5"]}
];
let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click", function(){
	let arrV = getArray(sender.value, reciever.value);
    arrV.message.push('</br>' + textbox.value);
    messages.innerHTML = arrV.message;
    textbox.value = "";
});
function getArray(sender, receiver){
	if (sender == receiver){
		alert("cannot send message to yourself");
	}
    let users = arrMsg.find(users =>(users.sender == sender && users.receiver == receiver) || (users.sender == receiver && users.receiver == sender));
    return users;
}