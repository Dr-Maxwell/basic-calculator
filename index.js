const btns = document.querySelectorAll(".btns_2 button");
const display = document.querySelector(".display2 p");
var fVal = " ";

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
        let ans = `${eval(fVal)}`;
        if (ans.includes(".")) {
          display.innerHTML = Number(ans).toFixed(2);
        } else {
          display.innerHTML = ans;
        }
        break;

      default:
        fVal += val;
        display.innerHTML = fVal;
    }
  } catch (error) {
    display.innerHTML = "Math Error";
  }
}
