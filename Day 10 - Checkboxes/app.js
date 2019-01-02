const inbox = document.querySelector(".inbox");
const items = document.querySelectorAll(".item");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);   

let lastChecked;


function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck))










// inbox.addEventListener("click", function(e) {
//     if (e.target.nodeName === "INPUT" && e.shiftKey === true) {
//         let arr = Array.from(this.children);
//         arr.forEach(el => {
            
//         })
//     }
// })
