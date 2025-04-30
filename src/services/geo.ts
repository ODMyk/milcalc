import proj4 from 'proj4';
import {Point, Region} from 'react-native-maps';

const scale = 100000;

export const getZone = (longitude: number) =>
  Math.floor((longitude + 180) / 6) + 1;

export const getCentralMeridian = (zone: number) => (zone - 1) * 6 - 177;

export const buildProj4String = (centralMeridian: number) => {
  return [
    '+proj=tmerc',
    '+lat_0=0',
    `+lon_0=${centralMeridian}`,
    '+k=0.9996',
    '+x_0=500000',
    '+y_0=0',
    '+ellps=WGS84',
    '+units=m',
    '+no_defs',
  ].join(' ');
};

export const rectangularToLongLat = (x: number, y: number, zone: number) => {
  const [longitude, latitude] = proj4(
    buildProj4String(getCentralMeridian(zone)),
    'WGS84',
    [x * scale, y * scale],
  );

  return {
    longitude,
    latitude,
  };
};

export const longLatToRectangular = (longitude: number, latitude: number) => {
  const [x, y] = proj4(
    'WGS84',
    buildProj4String(getCentralMeridian(getZone(longitude))),
    [longitude, latitude],
  );

  return {
    x: x / scale,
    y: y / scale,
  };
};

export const getRegionForPoints = (points: Point[], zone: number): Region => {
  if (points.length === 0) {
    throw new Error('No points');
  }

  let minLattitude = +Infinity;
  let minLongitude = +Infinity;
  let maxLattitude = -Infinity;
  let maxLongitude = -Infinity;

  points
    .map(p => rectangularToLongLat(p.x, p.y, zone))
    .forEach(point => {
      minLattitude = Math.min(minLattitude, point.latitude);
      minLongitude = Math.min(minLongitude, point.longitude);
      maxLattitude = Math.max(maxLattitude, point.latitude);
      maxLongitude = Math.max(maxLongitude, point.longitude);
    });

  const latitudeDelta = maxLattitude - minLattitude;
  const longitudeDelta = maxLongitude - minLongitude;

  return {
    latitude: (minLattitude + maxLattitude) / 2,
    longitude: (minLongitude + maxLongitude) / 2,
    latitudeDelta,
    longitudeDelta,
  };
};
