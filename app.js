let to_txt = document.querySelector("#header p b")
var to_choice = document.querySelector("#btn")
var text_container = document.querySelector("#texte")
var choice_container = document.querySelector("#choice")

to_txt.addEventListener("click", () => {
    text_container.classList.add("element_to_discover")
})
to_choice.addEventListener("click", () => {
    console.log("ahah")
    choice_container.classList.add("element_to_discover")
})