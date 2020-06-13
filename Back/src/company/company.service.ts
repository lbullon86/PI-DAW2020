import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
   
    constructor(@InjectRepository(Company) private readonly repository:Repository<Company>){

    }
    getAll() {
        return this.repository.find();
    }

    /**
     * 
     * @param company 
     */
    save(company:Company){
        return this.repository.save(company);

    }
}
