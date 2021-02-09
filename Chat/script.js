let arrMsg = [
    { sender: 1, receiver : 2, message: ["messages between user 1 -2"]},
    { sender: 1, receiver : 3, message: ["messages between user 1 -3"]},
    { sender: 1, receiver : 4, message: ["messages between user 1 -4"]},
    { sender: 1, receiver : 5, message: ["messages between user 1 -5"]},
    { sender: 2, receiver : 3, message: ["messages between user 2 -3"]},
    { sender: 2, receiver : 4, message: ["messages between user 2 -4"]},
    { sender: 2, receiver : 5, message: ["messages between user 2 -5"]},
    { sender: 3, receiver : 4, message: ["messages between user 3 -4"]},
    { sender: 3, receiver : 5, message: ["messages between user 3 -5"]},
    { sender: 4, receiver : 5, message: ["messages between user 4 -5"]}
];
let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");
let sender = document.getElementById("sender");
let receiver = document.getElementById("receiver");

sender.addEventListener("change", function(){
    let arrV = getArray(sender.value, receiver.value);
   // arrV.message.push('</br>' + textbox.value);
    messages.innerHTML = arrV.message;
    textbox.value = "";
});

receiver.addEventListener("change", function(){
    let arrV = getArray(sender.value, receiver.value);
   // arrV.message.push('</br>' + textbox.value);
    messages.innerHTML = arrV.message;
    textbox.value = "";
});

button.addEventListener("click", function(){
	let arrV = getArray(sender.value, receiver.value);
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