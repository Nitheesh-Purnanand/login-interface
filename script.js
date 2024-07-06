const wrapper = document.querySelector(".bubble-wrapper");
const animatebubble = x =>{
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    wrapper.appendChild(bubble);
    setTimeout(() => {
        wrapper.removeChild(bubble);
    }, 2000);
}
window.onmousemove = e => animatebubble(e.clientX);
