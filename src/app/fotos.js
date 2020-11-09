class Fotos {
    async getFotos() {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
        const fotos = await res.json();
        return fotos;
    }
}

function fotoGenerada() {
    var url = "http://lorempixel.com/400/400/";
    document.getElementsByTagName("img")[0].src = url;

}


export default Fotos
fotoGenerada();