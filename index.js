const btns = document.querySelectorAll(".btns_2 button");
const display = document.querySelector(".display2 p");
var fVal = " ";
var sign;
var doubletask = true;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculator(e);
  });
});
function calculator(e) {
  try {
    let val = e.target.innerHTML;
    switch (val) {
      case "=":
        let ans = eval(`${fVal}`);
        fVal = ans;
        display.innerHTML = Number(ans).toFixed(2);
        break;

      default:
        fVal += val;
        display.innerHTML = fVal;
    }
  } catch (error) {
    display.innerHTML = "Math Error";
  }
}
