import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository, UpdateResult } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly repositoryUser:Repository<Users>) {
        
    }
    save(user:Users){
        return this.repositoryUser.save(user);
    }
    getAll(){
        return this.repositoryUser.find();
    }

    getOne(id:number){
        return this.repositoryUser.findOne(id);
    }

    delete(id:number){
        return this.repositoryUser.delete(id)
    }

    update(user:Users):Promise<UpdateResult>{
        return this.repositoryUser.update(user.idUser,user);
    }
    
}
