import { ConsumedProductService } from './consumed-product.service';
import { CreateConsumendProductDto } from './dto/create-consumend-product.dto';
import { ProfileService } from 'src/profile/profile.service';
export declare class ConsumedProductController {
    private readonly consumedProductService;
    readonly profileService: ProfileService;
    constructor(consumedProductService: ConsumedProductService, profileService: ProfileService);
    createConsumedProduct(data: CreateConsumendProductDto, id: string): unknown;
    deleteConsumedProduct(id: string, date: string): unknown;
}
