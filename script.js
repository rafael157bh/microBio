function initMap() {
  const localizacao = { lat: -24.9463583, lng: -53.4468717 };

  const mapa = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: localizacao,
    mapTypeId: "roadmap"
  });

  new google.maps.Marker({
    position: localizacao,
    map: mapa,
    title: "Casa de Francisco"
  });
}
