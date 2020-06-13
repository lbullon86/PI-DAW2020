import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  import { UsersService } from './users.service';
import { Users } from './users.entity';
  
  @Controller('api/users')
  export class UsersController {
    constructor(private readonly UsersService: UsersService ) {}
  
    @Get()
    async findAll(): Promise<Users[]> {
      return this.UsersService.getAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: number): Promise<Users> {
      return this.UsersService.getOne(id);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body('Users') Users: Users) {
      this.UsersService.save(Users);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put()
    update(@Body('Users') Users: Users) {
      this.UsersService.update(Users);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    delete(@Param('id') id: number) {
      this.UsersService.delete(id);
    }
  }