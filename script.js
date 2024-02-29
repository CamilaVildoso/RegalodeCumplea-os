let imageVisible = false; // Variable global para el estado de visibilidad de la imagen

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('image-gift').addEventListener('click', function() {
    if (imageVisible) {
      // Si la imagen está visible, la ocultamos
      document.getElementById('gift-display').innerHTML = '';
    } else {
      // Si la imagen no está visible, la mostramos
      document.getElementById('gift-display').innerHTML = '<img src="./img/foto5.jpg" alt="Regalo de imagen">';
    }
    // Invertimos el estado de visibilidad
    imageVisible = !imageVisible;
  });

  // Añadir event listener para clics en el documento
  document.addEventListener('click', function(event) {
    // Comprobar si el clic ocurrió fuera del botón
    if (!event.target.closest('#image-gift')) {
      // Si el clic fue fuera del botón, ocultar la imagen si está visible
      if (imageVisible) {
        document.getElementById('gift-display').innerHTML = '';
        imageVisible = false;
      }
    }
  });
});


document.getElementById('message-gift').addEventListener('click', function() {
  document.getElementById('gift-display').innerHTML = 
  '<p> 💖💖Aqui una pequeña cartita, para que recuerdes lo mucho que te quiero y que apesar que no estoy ahi con ustedes, espero que sepas que eres importante en mi vida, hoy solo quiero desearte lo mejor y tomes las mejores decisiones💖💖 <strong>atte</strong>:la primogenita</p>';
  document.getElementById('gift-display').removeAttribute('data-visible');
});

// Event listener para clics en el documento
document.addEventListener('click', function(event) {
  // Comprobar si el clic ocurrió fuera del elemento message-gift
  if (!event.target.closest('#message-gift')) {
    // Ocultar el texto si está visible
    if (document.getElementById('gift-display').querySelector('p')) {
      document.getElementById('gift-display').innerHTML = '';
      document.getElementById('gift-display').removeAttribute('data-visible');
    }
  }
});

document.getElementById('cake-gift').addEventListener('click', function() {
  document.getElementById('gift-display').innerHTML = '<img src="./img/torta.gif" alt="Regalo de torta">';
  document.getElementById('gift-display').setAttribute('data-visible', 'true');
});

// Event listener para clics en el documento
document.addEventListener('click', function(event) {
// Comprobar si el clic ocurrió fuera de los elementos de regalo
if (!event.target.closest('#message-gift') && !event.target.closest('#cake-gift')) {
  // Ocultar el regalo si está visible
  if (document.getElementById('gift-display').getAttribute('data-visible')) {
    document.getElementById('gift-display').innerHTML = '';
    document.getElementById('gift-display').removeAttribute('data-visible');
  }
}
});

