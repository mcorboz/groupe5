import './depot_image.html';

//Constantes de base
const input = document.querySelector('input');
const preview = document.querySelector('.preview');

//Evenement de l'input
input.addEventListener('change', previewImage);

//function pour afficher l'image en previsualisation
Template.depot_image.onCreated(function previewImage() {
    while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    const actualImage = input.files;
    if(actualImage.length === 0) {
        const nothing = document.createElement('p');
        nothing.textContent = 'Aucune image sélectionnée';
        preview.appendChild(nothing);
    } else {
      const selection = document.createElement('ol');
      preview.appendChild(selection);
      
      for(const file of imageActuelle) {
          const selectionItem = document.createElement('li');
          const nothing = document.createElement('p');

          if(validFileType(file)) {
              nothing.textContent = `Nom image ${file.name}, taille de l'image ${returnFileSize(file.size)}.`;
              const image = document.createElement('img');
              image.src = URL.createObjectURL(file);

              selectionItem.appendChild(image);
              selectionItem.appendChild(nothing);
          } else {
            nothing.textContent = `Nom image ${file.name}: pas un fichier valide. Veuillez changer votre sélection.`;
            selectionItem.appendChild(nothing);  
          }

          selection.appendChild(selectionItem);
      }
    }
});

//From https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types parce que je connais pas les types moi-même
const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/webp',
];

//function pour accorder les fichiers corrects selon les types
Template.depot_image.onCreated(function validFileType(file) {
    return fileTypes.includes(file.type);
});

//function pour montrer la taille de l'image (et donc déduction de son temps d'importation)
Template.depot_image.onCreated(function returnFileSize(number) {
    if(number < 1024) {
        return number + 'bytes';
    } else if(number > 1024 && number < 1048576) {
        return (number/1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
        return (number/1048576).toFixed(1) + 'MB';
    }
});