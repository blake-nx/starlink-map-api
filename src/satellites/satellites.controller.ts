import { Controller, Get } from '@nestjs/common';
import { SatellitesService } from './satellites.service';

@Controller('satellites')
export class SatellitesController {
  constructor(private satellitesService: SatellitesService) {}
  @Get('/above-me')
  getAboveSatellites() {
    return this.satellitesService.getAboveSatellites();
  }
}
