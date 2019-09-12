/**
 * Used to generate random number of lat long coordinates for bins given a center point, radius and count
 * @param {*} center
 * @param {*} radius
 * @param {*} count
 */

export const generateRandomPoints = (center, radius, count) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    points.push(generateRandomCoord(center, radius));
  }

  return points;
};

const generateRandomCoord = (coord, radius) => {
  const x0 = coord.lng;
  const y0 = coord.lat;

  const rd = radius / 111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x / Math.cos(y0);

  return { lat: y + y0, lng: xp + x0 };
};

export const extractCoordinates = data => {
  return data.geometries[0].coordinates[0];
};

// data is an array of numbers, each pair of 2 numbers represents a coordinate in the form [lng, lat]
export const getCoordFormat = data => {
  const allRegions = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data.length);
    const region = data[i];
    const coords = [];

    for (let j = 0; j < region.length; j = j + 2) {
      // convert to [lat, lng] format
      coords.push({
        lat: region[j + 1],
        lng: region[j]
      });
    }

    allRegions.push(coords);
  }

  return allRegions;
};

export const generateShadeOfGreen = () => {
  const max = 50;
  const min = 254;
  const color = Math.floor(Math.random() * (max - min + 1)) + min;

  return color;
};
