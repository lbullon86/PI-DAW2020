import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import * as config from '../../database.config';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports:[
        TypeOrmModule.forRoot()
    ]
})
export class DatabaseModule {
    constructor(private readonly connection:Connection){}
}
