import { LookupService } from './lookup.service';
import { CreateLookupDto } from './dto/create-lookup.dto';
export declare class LookupController {
    private readonly lookupService;
    constructor(lookupService: LookupService);
    getAll(queryParam: CreateLookupDto): unknown;
    importLookup(data: any): unknown;
}
