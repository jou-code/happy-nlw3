const opitions = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', opitions).setView([-22.8974993,-43.1912764], 16);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [179, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar da meninas')

// create and add marker
L
.marker([-22.8974993,-43.1912764], { icon })
.addTo(map)




function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll("images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-info > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar a classe .active para este botão
    button.classList.add('active')
}