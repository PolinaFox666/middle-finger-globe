// подключаем глобус к блоку
const globe = Globe()
  .globeImageUrl('https://i.postimg.cc/vB8bYNhq/earth-nasa.jpg')
  .pointsData([
    {
      lat: 42.4311, // Эверест
      lng: 18.6966,
      image: 'https://i.postimg.cc/8PSNKsQB/0001-tivat.jpg',
      size: 0.5
    }, 
	{
      lat: 52.6100, // Lipetsk
      lng: 39.5942,
      image: 'https://i.postimg.cc/WbS2Kj7D/0002-lipetsk.jpg',
      size: 0.5
	  }
  ])
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointAltitude(0.01)
  .pointColor(() => 'red')
  .pointRadius(d => d.size)
  .onPointClick(d => {
    const popup = document.getElementById('popup');
    const img = document.getElementById('popupImg');
    img.src = d.image;
    popup.style.left = `${window.innerWidth / 2 - 100}px`;
    popup.style.top = `${window.innerHeight / 2 - 100}px`;
    popup.style.display = 'block';
  });

globe(document.getElementById('globeViz'));
