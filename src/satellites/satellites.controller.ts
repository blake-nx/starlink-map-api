import { Controller, Get, Param } from '@nestjs/common';
import { SatellitesService } from './satellites.service';

@Controller('satellites')
export class SatellitesController {
  constructor(private satellitesService: SatellitesService) {}
  @Get('/above-me/:lat/:lng')
  getAboveSatellites(@Param() params) {
    return this.satellitesService.getAboveSatellites(params.lat, params.lng);
  }
}
