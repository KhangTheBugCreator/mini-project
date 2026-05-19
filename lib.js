const colorCode = document.getElementById("colorCode");
const generateBtn = document.getElementById("generateBtn");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearBtn");

generateBtn.onclick = function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.querySelector("body").style.background = randomColor;

  colorCode.innerHTML = randomColor;
  colorCode.style.color = randomColor;

  const li = document.createElement("li");
  const textColor = document.createTextNode(randomColor);
  li.appendChild(textColor);
  li.style.color = randomColor;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";
  deleteBtn.setAttribute("class", "deleteBtn");
  li.appendChild(deleteBtn);

  historyList.appendChild(li);
  deleteBtn.onclick = function () {
    historyList.removeChild(li);
  };
};
clearBtn.onclick = function () {
  historyList.innerHTML = "";
  document.querySelector("body").style.background = "#ffffff";
  colorCode.innerHTML = "#FFFFFF";
  colorCode.style.color = "black";
};
