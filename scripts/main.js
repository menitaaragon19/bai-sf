console.log("heyhey")

const people_buttons = document.getElementsByName("button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

function change_person(person){ 
console.log("change_person was called");
photo.src = person + ".jpg"
}
people_buttons.forEach(button => {
    button.addEventListener("change", event => {
        change_person(button.value)
    })
})
