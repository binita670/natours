export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmluaXRhNjcwIiwiYSI6ImNraTQ4ajc2ejJlZWgycm1wbTBrNzV0aGwifQ.6p1g407Eva2Oq-wEueXsZA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/binita670/cki4cwnyn0mpk19rxaqbv4rpf',
    scrollZoom: false,
    // center: [-118.138002, 34.103839],
    // zoom: 8,
  });
  console.log(mapboxgl);

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup()
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
