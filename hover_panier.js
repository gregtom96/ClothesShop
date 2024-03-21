// Récupérer l'élément de l'image et du menu
const hoverImage = document.querySelector('.hover-image');
const menu = document.querySelector('.menu');

// Ajouter un gestionnaire d'événement pour détecter quand la souris quitte le menu
menu.addEventListener('mouseleave', () => {
  // Cacher le menu lorsque la souris quitte le menu
  menu.style.display = 'none';
});

// Ajouter un gestionnaire d'événement pour détecter quand la souris entre dans le menu
menu.addEventListener('mouseenter', () => {
  // Garder le menu affiché lorsque la souris est dessus
  menu.style.display = 'block';
});

// Ajouter un gestionnaire d'événement pour détecter quand la souris entre dans l'image
hoverImage.addEventListener('mouseenter', () => {
  // Afficher le menu lorsque la souris entre dans l'image
  menu.style.display = 'block';
});

// Ajouter un gestionnaire d'événement pour détecter quand la souris quitte l'image
hoverImage.addEventListener('mouseleave', () => {
  // Cacher le menu lorsque la souris quitte l'image
  menu.style.display = 'none';
});
