"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExercisesModule = void 0;
const common_1 = require("@nestjs/common");
const exercises_service_1 = require("./exercises.service");
const exercises_controller_1 = require("./exercises.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const pagination_service_1 = require("../pagination/pagination.service");
let ExercisesModule = class ExercisesModule {
};
exports.ExercisesModule = ExercisesModule;
exports.ExercisesModule = ExercisesModule = __decorate([
    (0, common_1.Module)({
        controllers: [exercises_controller_1.ExercisesController],
        providers: [exercises_service_1.ExercisesService, prisma_service_1.PrismaService, pagination_service_1.PaginationService],
    })
], ExercisesModule);
//# sourceMappingURL=exercises.module.js.map