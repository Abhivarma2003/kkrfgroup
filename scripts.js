
const canvas = document.getElementById('handCanvas');
const ctx = canvas.getContext('2d');
function drawHandAnimation() {
    canvas.width = window.innerWidth;
    canvas.height = 300;  
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}
window.onload = function() {
    drawHandAnimation();
};

window.onresize = function() {
    drawHandAnimation();
};

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
