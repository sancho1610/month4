const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector("#btn-get")
const modalClose = document.querySelector(".modal_close")

const openModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}
const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}
modalTrigger.onclick = openModal
modalClose.onclick = closeModal
modal.onclick = (event) => {
    if(event.target ===  modal) closeModal()
    }


const openModalOnScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 0.5) {
    openModal();
    window.removeEventListener("scroll", openModalOnScroll);
  }
};

window.addEventListener("scroll", openModalOnScroll);

setTimeout(() => {
  openModal();
}, 10000);
    