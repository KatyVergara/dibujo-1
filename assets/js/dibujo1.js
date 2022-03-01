let canvas = document.querySelector("canvas");
let context = canvas.getContext('2d');
context.lineWidth = 3;

const width = 60;
const height = 60;
const espacio = 10;
let x, y;
for (i = 0; i < 16; i++) {
    if (i => 1) {
        context.fill();
    } else {
        context.stroke();
    }

    for (j = 0; j < 5; j++) {

        x = 100 + (width + espacio) * i;
        y = 100 + (height + espacio) * j;

        if (Math.random() > 0.7) {
            context.beginPath();
            context.rect(x, y, width, height);
            context.strokeStyle = "#081F20";
            context.stroke();
        }
        if (Math.random() > 0.9) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.strokeStyle = "#FF8095";
            context.stroke();
        }
        if (Math.random() > 0.9) {
            context.beginPath();
            context.rect(x - 20, y, width + 100, height + 100);
            context.strokeStyle = "#FA2D51";
            context.stroke();
            context.lineWidth = 5;
        }
        if (Math.random() > 0.8) {
            context.beginPath();
            context.arc(x + 30, y + 30, 50, 0, Math.PI * 2);
            context.strokeStyle = "#185C60";
            context.stroke();
        }
        if (Math.random() > 0.9) {
            context.beginPath();
            context.arc(x + 30, y + 30, 30, 0, Math.PI * 2);
            context.strokeStyle = "#29A8AE";
            context.stroke();
        }
        if (Math.random() > 0.9) {
            context.beginPath();
            context.arc(x + 30, y + 30, 40, 0, Math.PI * 2);
            context.strokeStyle = "#07EAEF";
            context.lineWidth = 3;
            context.stroke();
        }
        if (Math.random() > 0.9) {
            context.beginPath();
            context.arc(x + 30, y + 30, 20, 0, Math.PI * 2);
            context.strokeStyle = "#7E091D";
            context.stroke();
        };
    };
};
