let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
var count = 1;

var braces = ["(", ")"];
var pos = 0;

let output = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    button_val = e.target.innerText;

    if (button_val == "X") {
      button_val = "*";
      output += button_val;
      screen.value = output;
    } else if (button_val == "( )") {
      pos = pos % 2;
      output += braces[pos];
      pos += 1;
      screen.value = output;
    } else if (button_val == "E") {
      var last = output[output.length - 1];
      output = output.slice(0, -1);
      screen.value = output;
      if (last == "(" || last == ")") {
        pos += 1;
      }
    } else if (button_val == "=") {
      try{
        let val = output;
        screen.value = eval(val);
        output = ""
        pos = 0;
      }
      catch{
        screen.value = "(-_-) ...error";
      }
    } else if (button_val == "C") {
      output = "";
      screen.value = output;
    } else {
      output += button_val;
      screen.value = output;
    }
  });
}
