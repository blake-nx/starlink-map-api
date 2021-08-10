"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatellitesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
require('dotenv').config();
let SatellitesService = class SatellitesService {
    constructor() {
        this.apiKey = process.env.API_KEY;
        this.fetchSatellites = async (lat, lng) => {
            return await axios_1.default
                .get(`https://api.n2yo.com/rest/v1/satellite/above/${lat}/${lng}/0/70/52/&apiKey=${this.apiKey}`)
                .then((response) => {
                if (response.data.info.transactionscount < 1000) {
                    return response.data === null ? 'No satellites found' : response.data;
                }
                else {
                    throw new Error('requests per hour exceeded');
                }
            })
                .catch((error) => {
                return error;
            });
        };
    }
    getAboveSatellites(lat, lng) {
        return this.fetchSatellites(lat, lng);
    }
};
SatellitesService = __decorate([
    common_1.Injectable()
], SatellitesService);
exports.SatellitesService = SatellitesService;
//# sourceMappingURL=satellites.service.js.map