// var popPin = alert("Bro Olumide pls employ me");

let body = document.querySelector("body");
body.style.fontStyle = "italic";
body.style.margin = "0px";
body.style.padding = "0px";
body.style.display = "flex";
body.style.justifyContent = "space-between";

const button = document.createElement("button");
button.id = "butt";
button.onclick = showWords;
button.textContent = "Click_Me";
document.querySelector("body").appendChild(button);

const button1 = document.createElement("button");
button1.onclick = closeWords;
button1.textContent = "Click_Me_Too";
document.getElementById("butt").appendChild(button1);

function showWords() {
  let heading = document.createElement("h1");
  heading.textContent =
    "My Name is 'Olumide' I will employ you but how is your monthly pay";
  document.querySelector("button").appendChild(heading);
}

function closeWords() {
  let closeHeading = document.createElement("p");
  closeHeading.textContent = "**********";
  //   document.querySelector("button").appendChild(closeHeading);
}
