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
    /**
     * Get all Users
     * @returns Users[]
     */
    @Get()
    async findAll(): Promise<Users[]> {
      return this.UsersService.getAll();
    }
    /**
     * Get one user of given id
     * @param id , given id user
     * @returns User
     */
    @Get(':id')
    async find(@Param('id') id: number): Promise<Users> {
      return this.UsersService.getOne(id);
    }
  
    /**
     * Save one user
     * @param Users , user given
     */
    @Post()
    create(@Body('Users') Users: Users) {
      this.UsersService.save(Users);
    }
  
    /**
     * Update one user
     * @param Users user given
     */
    @Put()
    update(@Body('Users') Users: Users) {
      this.UsersService.update(Users);
    }

    /**
     * Delete one user
     * @param Users user given
     */
    @Delete(':id')
    delete(@Param('id') id: number) {
      this.UsersService.delete(id);
    }
  }