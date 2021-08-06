import { Injectable } from '@nestjs/common';

@Injectable()
export class SatellitesService {
  private satellitesAbove = [];

  public getAboveSatellites() {
    return this.satellitesAbove;
  }
}
