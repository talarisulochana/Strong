let pswd = document.querySelector("input");
let msg = document.querySelector("p");
function check(x) {
    if (x.key === "Enter") {
        if (pswd.value.length < 5) {
            msg.textContent = "weak password"
          msg.style.color="red"
        } else if (pswd.value.length >= 5 && pswd.value.length <= 10) {
            msg.textContent = "good password"
          msg.style.color="orange"

        } else {
            msg.textContent = "strong password"
            msg.style.color="green"
        }
    }
}