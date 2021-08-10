"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatellitesController = void 0;
const common_1 = require("@nestjs/common");
const satellites_service_1 = require("./satellites.service");
let SatellitesController = class SatellitesController {
    constructor(satellitesService) {
        this.satellitesService = satellitesService;
    }
    getAboveSatellites(params) {
        return this.satellitesService.getAboveSatellites(params.lat, params.lng);
    }
};
__decorate([
    common_1.Get('/above-me/:lat/:lng'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SatellitesController.prototype, "getAboveSatellites", null);
SatellitesController = __decorate([
    common_1.Controller('satellites'),
    __metadata("design:paramtypes", [satellites_service_1.SatellitesService])
], SatellitesController);
exports.SatellitesController = SatellitesController;
//# sourceMappingURL=satellites.controller.js.map