import { ProductsService } from './products.service';
import { ProductDto } from './dto/create-product.dto';
import { ProfileService } from 'src/profile/profile.service';
export declare class ProductsController {
    private readonly productsService;
    private profileService;
    constructor(productsService: ProductsService, profileService: ProfileService);
    getAll(queryDto: ProductDto, id: string): unknown;
    importFoods(data: any): unknown;
}
