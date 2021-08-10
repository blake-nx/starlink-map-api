export declare class SatellitesService {
    private apiKey;
    fetchSatellites: (lat: any, lng: any) => Promise<any>;
    getAboveSatellites(lat: any, lng: any): Promise<any>;
}
