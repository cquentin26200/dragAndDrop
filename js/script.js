const ball = document.querySelectorAll(".box");
ball.forEach(element => {
  element.onmousedown = function(event) {
    // (1) la préparer au déplacement :  réglé en absolute et en haut par z-index
    element.style.position = 'absolute';
    element.style.zIndex = 1000;
  
    // déplacez-le de tout parent actuel directement dans body
    // pour le placer par rapport à body
    document.body.append(element);
  
    // Centrer la balle aux coordonnées (pageX, pageY)
    function moveAt(pageX, pageY) {
      element.style.left = pageX - element.offsetWidth / 2 + 'px';
      element.style.top = pageY - element.offsetHeight / 2 + 'px';
    }
  
    // déplacer notre balle en positionnement absolu sous le pointeur
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) déplacer la balle sur le déplacement de la souris
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) laisser tomber la balle, retirer les gestionnaires inutiles
    element.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };
  
  };
})

