// Eventos para mouse
canvas.addEventListener('mousedown',()=>drawing=true);
canvas.addEventListener('mouseup',()=>drawing=false);
canvas.addEventListener('mouseleave',()=>drawing=false);
canvas.addEventListener('mousemove',draw);

// Eventos para touch (móvil)
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    drawing = true;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
});

canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if(!drawing) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
});
