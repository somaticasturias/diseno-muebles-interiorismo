let items = [];

if (window.location.pathname.includes("interiores.html")) {
  items = [
    { src: '../img/banco_demo.jpg', desc: 'Fabricado con madera reciclada, presenta una estética rústica y funcional que aporta carácter al espacio.' },
    { src: '../img/arenero_demo.jpg', desc: 'Mueble práctico que disimula el arenero del gato con diseño limpio y estructura pensada para la convivencia.' },
    { src: '../img/escalera_demo.jpg', desc: 'Peldaños de madera y líneas modernas que funcionan como elemento arquitectónico y soporte versátil.' },
    { src: '../img/radiador_demo.jpg', desc: 'Diseño estilizado que optimiza el rendimiento térmico sin comprometer la estética del entorno ni ocupar espacio visual.' },
    { src: '../img/dispensador_demo.jpg', desc: 'Pieza en cerámica artesanal con formas suaves y acabado mate que suma detalle, utilidad y carácter al baño cotidiano.' },
    { src: '../img/alfombra_demo.jpg', desc: 'Tejida con fibras naturales, aporta textura orgánica y delimita zonas con calidez, sencillez y presencia acogedora.' }
  ];
  
}else if (window.location.pathname.includes("hola.html")) {
  items = [
    { src: '../img/proyecto1_demo.jpg', desc: 'Casa Ladera: Refugio minimalista en la montaña asturiana, con materiales nobles y vistas abiertas que invitan al descanso.' },
    { src: '../img/proyecto2_demo.jpg', desc: 'Estudio Prisma: Oficina creativa para una agencia de diseño, con espacios flexibles, luz natural y atmósfera inspiradora.' },
    { src: '../img/proyecto3_demo.jpg', desc: 'Apartamento Aurora: Renovación de un piso antiguo, donde conviven lo clásico y lo funcional con equilibrio.' },
    { src: '../img/proyecto4_demo.jpg', desc: 'Suite Nube: Interiorismo para un hotel boutique en la costa, con tonos suaves, texturas ligeras y detalles personalizados.' },
    { src: '../img/proyecto5_demo.jpg', desc: 'Loft Urbano: Espacio industrial reconvertido en vivienda moderna, con estructura vista y amplitud.' },
    { src: '../img/proyecto6_demo.png', desc: 'Cabaña Forestal: Diseño sostenible en plena naturaleza, con madera local, y conexión con el entorno.' },
    { src: '../img/proyecto7_demo.jpg', desc: 'Galería Prisma: Espacio expositivo con iluminación escenográfica, pensado generar experiencias visuales.' },
    { src: '../img/proyecto8_demo.jpg', desc: 'Café Boutique: Interiorismo cálido con materiales naturales y mobiliario artesanal para encuentros tranquilos.' }
  ];
}



else if (window.location.pathname.includes("producto.html")) {
  items = [
    { src: '../img/portavelas_demo.jpg', desc: 'Diseño de líneas puras y superficie brillante. Añade un toque sutil y elegante a cualquier rincón.' },
    { src: '../img/lamina_demo.jpg', desc: 'Pieza gráfica que une trazos delicados y elementos naturales, creando una atmósfera visual serena y expresiva.' },
    { src: '../img/reloj_demo.jpg', desc: 'Con base de madera natural y detalles metálicos, combina precisión y estilo en una pieza discreta y funcional.' },
    { src: '../img/cortinas_demo.png', desc: 'Cortinas de lino natural que filtran la luz suavemente, creando ambientes luminosos, serenos y de textura ligera.' },
    { src: '../img/cesta_demo.jpg', desc: 'Práctica y decorativa, esta cesta de fibras naturales ofrece almacenamiento con un toque cálido y sencillo.' },
    { src: '../img/lamparamesa_demo.jpg', desc: 'Diseño compacto y luz ambiental suave que complementa escritorios o mesillas con estilo.' }
  ];
} else if (window.location.pathname.includes("mobiliario.html")) {
  items = [
    { src: '../img/silla_demo.jpg', desc: 'Silla de diseño contemporáneo con estructura de madera, líneas limpias y estilo sobrio. Ideal para espacios modernos y elegantes.' },
    { src: '../img/mesa_demo.jpg', desc: 'Mesa de comedor extensible en roble natural, con acabado cálido y diseño funcional que se adapta a distintos momentos y espacios.' },
    { src: '../img/estanteria_demo.jpg', desc: 'Estantería modular que permite reorganizarla según las necesidades del espacio. Diseño versátil y funcional.' },
    { src: '../img/lampara_demo.jpg', desc: 'Lámpara de pie con luz regulable, estructura esbelta y acabado sobrio. Aporta funcionalidad y equilibrio visual.' },
    { src: '../img/sofa_demo.jpg', desc: 'Sofá moderno tapizado en lino gris, con líneas suaves y proporciones equilibradas. Confort y presencia sin excesos.' },
    { src: '../img/comoda_demo.jpg', desc: 'Cómoda nórdica en madera clara, de formas puras y diseño funcional. Aporta orden visual sin sobrecargar el espacio.' }
  ];
}

let currentIndex = 0;

function mostrarDetalle(src) {
  currentIndex = items.findIndex(item => item.src === src);
  actualizarDetalle();
  document.getElementById('detalle').style.display = 'flex';
}

function actualizarDetalle() {
  const item = items[currentIndex];
  document.getElementById('imagenGrande').src = item.src;
  document.getElementById('descripcion').textContent = item.desc;
}

function mostrarAnterior() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  actualizarDetalle();
}

function mostrarSiguiente() {
  currentIndex = (currentIndex + 1) % items.length;
  actualizarDetalle();
}

function cerrarDetalle() {
  document.getElementById('detalle').style.display = 'none';
}
document.getElementById('menuHambur').addEventListener('click', () => {
  document.getElementById('menuLista').classList.toggle('mostrar');
});
