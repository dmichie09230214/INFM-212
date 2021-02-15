//chat box pop up
var button = document.getElementByID("open-button");
var closebutton = document.getElementByID("close");
var overlay = document.getElementByID("overlay");

function hide(){
  overlay.style.display = "none";
  button.style.display = "block";
}

button.onclick = function(){
  overlay.style.display = "block";
  button.style.display = "none";
}

closebutton.onclick = function(){
  hide();
}

window.onclick = function(event){
  if(event.target == overlay){
    hide();
  }
}

//chat work

const msgform = get(".popup-footer");
const msgInput = get("input");
const chatArea = get(".popup-main");

const CP_MSG = [
  "Sorry, you're having difficulty. Can I get your order #?",
  "Thank you. Please check your email for further instructions."
];

var i = 0;

const CP_IMG = "chatboxicon.png";
const CLIENT_IMG = "chatboxicon.png";
const CP_NAME = "Customer Service";
const CLIENT_NAME = "Client";

appendMessage(CP_NAME, CP_IMG, "comp", "How can I help you today?");
msgform.addEventListener("submit", event =>{
  event.preventDefault();

  const chatText = msgInput.value;
  if (!chatText) return;

  appendMessage(CLIENT_NAME, CLIENT_IMG, "client", chatText);
  msgInput.value = "";

  cpResponse();

});

function appendMessage(name, img, side, text){
  const msgHTML = '
  <div class = "msg ${side}-msg">
  <div class = "chat-img" style= "background-image:url(${img})"></div>

  <div class = "chat-bubble">
      <div class = "chat-name">${name}</div>
  <div class = "chat-text">${text}</div>
      </div>
  </div>
  '';

    chatArea.insertAdjacentHTML("beforeend", msgHTML);
    chatArea.scrollTop += 500;
    }

function cpResponse(){
  const chatText = CP_MSG [i++];
  if (i >= CP_MSG.length){
    i = 0;
  }
  const delay = chatText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(CP_NAME, CP_IMG, "comp", chatText);
  }, delay);
}

function get(selector, root = document){
  return root.querySelector(selector);
}
