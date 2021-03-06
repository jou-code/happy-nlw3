// create map
const map = L.map('mapid').setView([-22.8974993,-43.1912764], 16);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fielsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fielsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo esta vazio, se sim, nao add container
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    
    //limpar o campo antes de add ao container de imgs
    
    
    //add o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('new-upload')


    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }

    // deletar o campo
    span.parentNode.remove();
}
 
//troca do sim e não
function toggleSelect(event) {
    //pegar botão clicado
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })
    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

     //verificar se sim ou não
     input.value = button.dataset.value;
}

function validade(event) {
    //event.preventDefault()
}