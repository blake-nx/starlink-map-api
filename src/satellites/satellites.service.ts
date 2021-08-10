import { Injectable } from '@nestjs/common';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class SatellitesService {
  private apiKey = process.env.API_KEY;
  fetchSatellites = async (lat, lng) => {
    return await axios
      .get(
        `https://api.n2yo.com/rest/v1/satellite/above/${lat}/${lng}/0/70/52/&apiKey=${this.apiKey}`,
      )
      .then((response) => {
        if (response.data.info.transactionscount <= 1000) {
          return response.data === null ? 'No satellites found' : response.data;
        } else {
          throw new Error('requests per hour exceeded');
        }
      })
      .catch((error) => {
        return error;
      });
  };
  public getAboveSatellites(lat, lng) {
    return this.fetchSatellites(lat, lng);
  }
}
