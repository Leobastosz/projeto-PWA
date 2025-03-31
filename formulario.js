const form = document.getElementById("form-contato")
console.log("oi");

form.addEventListener("submit", event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add("was-vallidated")
}, false)
