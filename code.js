////////////////////////////////////// OBJETO SCREEN //////////////////////////////////////
//Es un objeto que nos permite acceder a las propiedades de la pantalla.
                                                                   /*
AnchoTotal = screen.width;  //Ancho total de la pantalla.
AlturaTotal = screen.height;  //Altura total de la pantalla.

console.log(`width: ${AnchoTotal}`);
console.log(`height: ${AlturaTotal}`);

AvailWidth = screen.availWidth;  //Ancho total disponible de la pantalla, es decir sin contar la barra de tareas.
AvailHeight = screen.availHeight; //Altura total disponible de la pantalla, es decir sin contar la barra de tareas.

console.log(`availwidth: ${AvailWidth}`);
console.log(`availheight: ${AvailHeight}`);
                                                                  */


///////////////////////////////////////////// OBJETO CANVAS /////////////////////////////////////////
//Un elemento html con graficos dentro.
                                                                       /*

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = "4"; //Nos aumenta el grosor de la linea.
ctx.strokeStyle = "#48e"; //Estilo del stroke.
ctx.fillStyle = "#26a";  //Estilo del fill.

//Los primeros 2 parametros son Lef y Top, y los segundos parametros son width y height.
ctx.strokeRect(30,40,400,200);
ctx.fillRect(10,20,400,200);

//Como trazar linear:

ctx.lineTo(80,300);
ctx.lineTo(100,350);
ctx.lineTo(115,320);
ctx.lineTo(100,300);
ctx.stroke(); //Para que se traze la linea.
ctx.closePath(); //Para cerrar esa linea.
ctx.beginPath(); //Para abrir otra linea.
ctx.lineTo(230,300);
ctx.lineTo(180,300);
ctx.stroke();

                                                                    */

// COMO CREAR UN PAINT CON CANVAS:

const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

let painting,color,lineWidth,difX,difY;

canvas.addEventListener("mousedown",(e)=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("lw").value;
})

canvas.addEventListener("mousemove",(e)=>{
    if (painting) {
        dibujar(difX,difY,e.clientX - dif.left,e.clientY - dif.top);
        difX = e.clientX - dif.left;
        difY = e.clientY - dif.top;
    }
})

const dibujar = (x1,y1,x2,y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
}






