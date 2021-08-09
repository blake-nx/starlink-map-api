import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv/config';
const API_KEY = process.env.API_KEY;

@Injectable()
export class SatellitesService {
  private satellitesAbove = [];
  fetchSatellites = async (lat, lng) => {
    return await axios
      .get(
        `https://api.n2yo.com/rest/v1/satellite/above/${lat}/${lng}/0/14/52/&apiKey=${API_KEY}`,
      )
      .then((response) => {
        return response.data === null
          ? 'No satellites found'
          : response.data.above;
      });
  };
  public getAboveSatellites(lat, lng) {
    return this.fetchSatellites(lat, lng);
  }
}
