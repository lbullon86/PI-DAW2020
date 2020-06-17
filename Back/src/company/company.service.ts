import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
   
    constructor(@InjectRepository(Company) private readonly repository:Repository<Company>){

    }
    async getAll(): Promise<Company>{
        const company = await this.repository.find()
        console.log(company[0])
        return company[0] ;
    }

    /**
     * 
     * @param company 
     */
    save(company:Company){
        return this.repository.save(company);

    }
}
