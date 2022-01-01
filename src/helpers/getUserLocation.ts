/**
 * Función para obtener las coordenadas
 * @returns Las coordenas de la ubicación del usuario longitud y latitud
 */
export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert("Error al obtener la ubicación");
        console.log(err);
        reject();
      }
    );
  });
};
