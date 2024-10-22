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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const profile_service_1 = require("../profile/profile.service");
const user_decorator_1 = require("../auth/decorators/user.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
let ProductsController = class ProductsController {
    constructor(productsService, profileService) {
        this.productsService = productsService;
        this.profileService = profileService;
    }
    async getAll(queryDto, id) {
        const { id: profileId } = await this.profileService.getProfileIdByUserId(id);
        return await this.productsService.getAll(queryDto, profileId);
    }
    async importFoods(data) {
        await this.productsService.importFoods(data);
        return { message: 'Foods imported successfully' };
    }
    async deleteFoods() {
        await this.productsService.deleteAllFoods();
        return { message: 'Foods imported successfully' };
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(''),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.ProductDto, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('import'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "importFoods", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteFoods", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService, profile_service_1.ProfileService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map