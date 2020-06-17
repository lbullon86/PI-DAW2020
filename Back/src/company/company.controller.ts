import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('api/company')
export class CompanyController {
    constructor(private readonly companyService:CompanyService){

    }
    /**
     * @return Company, all information of company
     */
    @Get()
    getAll(): Promise<Company>{
        return this.companyService.getAll();
    }

    /**
     * Save company
     * @param company 
     */
    @Post()
    save(@Body() company: Company)
    {
        return this.companyService.save(company)
    }
}
