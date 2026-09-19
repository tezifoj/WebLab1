function setupCanvas() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width  = rect.width  * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
}

function coordinateAxis() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    const step = 32;
    const cx = Math.round(W / 2 / step) * step;
    const cy = Math.round(H / 2 / step) * step;
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = '#d4d2cd';
    ctx.lineWidth = 1;

    for (let x = cx; x <= W; x += step) {
        ctx.beginPath();
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, H);
        ctx.stroke();
    }
    for (let x = cx - step; x >= 0; x -= step) {
        ctx.beginPath();
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, H);
        ctx.stroke();
    }

    for (let y = cy; y <= H; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(W, Math.round(y) + 0.5);
        ctx.stroke();
    }
    for (let y = cy - step; y >= 0; y -= step) {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(W, Math.round(y) + 0.5);
        ctx.stroke();
    }

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(32, cy);
    ctx.lineTo(W - 32, cy);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx, 32);
    ctx.lineTo(cx, H - 32);
    ctx.stroke();

    ctx.fillStyle = 'black';

    ctx.beginPath();
        ctx.moveTo(cx, 32);
        ctx.lineTo(cx - 8, 45);
        ctx.lineTo(cx + 8, 45);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(W - 32, cy);
        ctx.lineTo(W - 45, cy - 8);
        ctx.lineTo(W - 45, cy + 8);
        ctx.closePath();
        ctx.fill();

    ctx.lineWidth = 2;

    for (let i = 1; i <= 5; i += 2) {
        const d = i * step;
        ctx.beginPath();
        ctx.moveTo(cx + d, cy - 5);
        ctx.lineTo(cx + d, cy + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - d, cy - 5);
        ctx.lineTo(cx - d, cy + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 5, cy + d);
        ctx.lineTo(cx + 5, cy + d);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 5, cy - d);
        ctx.lineTo(cx + 5, cy - d);
        ctx.stroke();
    }

    ctx.font = '500 13px Georgia, "Times New Roman", serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 1; i <= 5; i += 2) {
        ctx.fillText(i,  Math.round(cx + i * step), Math.round(cy + 16));
        ctx.fillText(-i, Math.round(cx - i * step), Math.round(cy + 16));

        ctx.fillText(i,  Math.round(cx + 16), Math.round(cy - i * step));
        ctx.fillText(-i, Math.round(cx + 16), Math.round(cy + i * step));
    }

    ctx.font = 'bold 15px Georgia, "Times New Roman", serif';
    ctx.fillText('x', Math.round(W - 40), Math.round(cy - 14));
    ctx.fillText('y', Math.round(cx + 16), 28);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, W - 2, H - 2);

}

setupCanvas();
coordinateAxis();