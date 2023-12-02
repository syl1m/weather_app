const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function getFormattedCoordinates(position) {
  const coordinates = position.coords;
  const formattedCoordinates = `${coordinates.latitude},${coordinates.longitude}`;

  return formattedCoordinates;
}

function getGeolocationPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export default async function getCurrentLocation() {
  try {
    const position = await getGeolocationPosition();
    const formattedCoordinates = getFormattedCoordinates(position);
    return formattedCoordinates;
  } catch (err) {
    // console.warn(`ERROR(${err.code}): ${err.message}`);
    throw err.message;
  }
}
