// const openmodalbutton = document.querySelectorAll('[data-modal-target]')
// const closemodalbutton = document.querySelectorAll(['dta-close-button'])
// const overlay = document.getElementById('overlay')

// openmodalbutton.forEach(button =>{
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openmodal(modal)
//     })
// })

// closemodalbutton.forEach(button =>{
//     button.addEventListener('click', () => {
//         const modal = document.closest('.modal')
//         openmodal(modal)
//     })
// })

// function openmodal(modal) {
//     if (modal == null) return
//     modal.classlist.add('active')
//     overlay.classlist.add("active")
// }


// function closemodal(modal) {
//     if (modal == null) return
//     modal.classlist.remove('active')
//     overlay.classlist.remove("active")
// }
function myfun () {
    document.getElementById("modal1").style.display="block";
    document.getElementById("overlay").style.display="flex";
 }
// document.getElementById("close").addEventListener("click", function () {
//     document.querySelector("modal1").style.display="none";
    
// })