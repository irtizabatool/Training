let arrMsg = [
    { sender: 1, receiver : 2, message1: ["messages from Alice to Bob"], message2: ["messages from Bob to Alice"]},
    { sender: 1, receiver : 3, message1: ["messages from user 1 -3"], message2: ["messages from user 3-1"]},
    { sender: 1, receiver : 4, message1: ["messages from user 1 -4"], message2: ["messages from user 4-1"]},
    { sender: 1, receiver : 5, message1: ["messages from user 1 -5"], message2: ["messages from user 5-1"]},
    { sender: 2, receiver : 3, message1: ["messages from user 2 -3"], message2: ["messages from user 3-2"]},
    { sender: 2, receiver : 4, message1: ["messages from user 2 -4"], message2: ["messages from user 4-2"]},
    { sender: 2, receiver : 5, message1: ["messages from user 2 -5"], message2: ["messages from user 5-2"]},
    { sender: 3, receiver : 4, message1: ["messages from user 3 -4"], message2: ["messages from user 4-3"]},
    { sender: 3, receiver : 5, message1: ["messages from user 3 -5"], message2: ["messages from user 5-3"]},
    { sender: 4, receiver : 5, message1: ["messages from user 4 -5"], message2: ["messages from user 5-4"]}
];
let sMsg = document.getElementById("sMessages");
let rMsg = document.getElementById("rMessages");
let textboxS = document.getElementById("textboxS");
let textboxR = document.getElementById("textboxR");
let buttonS = document.getElementById("buttonS");
let buttonR = document.getElementById("buttonR");
let sender = document.getElementById("sender");
let receiver = document.getElementById("receiver");

sender.addEventListener("change", function(){
    let arrV = getArray(sender.value, receiver.value);
    if(arrV.sender == sender.value && arrV.receiver == receiver.value){
        sMsg.innerHTML = arrV.message1;
        rMsg.innerHTML = arrV.message2;
    } else{
        sMsg.innerHTML = arrV.message2;
        rMsg.innerHTML = arrV.message1;
    }
   // arrV.message.push('</br>' + textbox.value);
    
    textbox.value = "";
});

receiver.addEventListener("change", function(){
    let arrV = getArray(sender.value, receiver.value);
   // arrV.message.push('</br>' + textbox.value);
   if(arrV.sender == sender.value && arrV.receiver == receiver.value){
    sMsg.innerHTML = arrV.message1;
    rMsg.innerHTML = arrV.message2;
} else{
    sMsg.innerHTML = arrV.message2;
    rMsg.innerHTML = arrV.message1;
}
    textbox.value = "";
});

buttonS.addEventListener("click", function(){
	let arrV = getArray(sender.value, receiver.value);
    if(arrV.sender == sender.value && arrV.receiver == receiver.value){
        arrV.message1.push('</br>' + textboxS.value);
         sMsg.innerHTML = arrV.message1;
        rMsg.innerHTML = arrV.message2;
    } else {
        arrV.message2.push('</br>' + textboxS.value + '</br>');
        sMsg.innerHTML = arrV.message2;
        rMsg.innerHTML = arrV.message1;
    }
   // arrV.message.push('</br>' + textbox.value);
   // messages.innerHTML = arrV.message;
    textboxS.value = "";
});

buttonR.addEventListener("click", function(){
	let arrV = getArray(sender.value, receiver.value);
    if(arrV.sender == sender.value && arrV.receiver == receiver.value){
         arrV.message2.push('</br>' + textboxR.value);
         sMsg.innerHTML = arrV.message1;
         rMsg.innerHTML = arrV.message2;
    } else {
        arrV.message1.push('</br>' + textboxR.value + '</br>');
        sMsg.innerHTML = arrV.message2;
        rMsg.innerHTML = arrV.message1;
    }
   // arrV.message.push('</br>' + textbox.value);
   // messages.innerHTML = arrV.message;
    textboxR.value = "";
});

function getArray(sender, receiver){
	if (sender == receiver){
		alert("cannot send message to yourself");
        return;
	}
    let users = arrMsg.find(users =>(users.sender == sender && users.receiver == receiver) || (users.sender == receiver && users.receiver == sender));
    return users;
}