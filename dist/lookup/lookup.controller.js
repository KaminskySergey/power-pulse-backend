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
exports.LookupController = void 0;
const common_1 = require("@nestjs/common");
const lookup_service_1 = require("./lookup.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const create_lookup_dto_1 = require("./dto/create-lookup.dto");
let LookupController = class LookupController {
    constructor(lookupService) {
        this.lookupService = lookupService;
    }
    async getAll(queryParam) {
        return await this.lookupService.getAll(queryParam);
    }
    async importLookup(data) {
        return await this.lookupService.importLookup(data);
    }
};
exports.LookupController = LookupController;
__decorate([
    (0, common_1.Get)(''),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lookup_dto_1.CreateLookupDto]),
    __metadata("design:returntype", Promise)
], LookupController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('import'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LookupController.prototype, "importLookup", null);
exports.LookupController = LookupController = __decorate([
    (0, common_1.Controller)('lookups'),
    __metadata("design:paramtypes", [lookup_service_1.LookupService])
], LookupController);
//# sourceMappingURL=lookup.controller.js.map