import { SatellitesService } from './satellites.service';
export declare class SatellitesController {
    private satellitesService;
    constructor(satellitesService: SatellitesService);
    getAboveSatellites(params: any): Promise<any>;
}
