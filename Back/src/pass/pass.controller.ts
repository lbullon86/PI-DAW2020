import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { PassService } from './pass.service';
import { Pass } from './pass.entity';


@Controller('api/pass')
export class PassController {
  constructor(private readonly passService: PassService) {}
/**
 * Get all pass
 * @returns pass[]
 */
  @Get()
  getAll() {
    return this.passService.getAll();
  }
/**
 * Save one pass
 * 
 */
  @Post()
  save(@Body() pass: Pass) {
    return this.passService.save(pass);
  }
  /**
 * Update one pass
 * @param id , id of one given pass
 * @returns UpdatePass 
 */
  @Put(':id/update')
  saveAttendance(@Param('id', ParseIntPipe) id: number, @Body() pass: Pass) : Promise<any> {
      return this.passService.saveAttendance(pass);
  }
/**
 * 
 * @param id 
 * @returns Pass, one pass of given cliente
 */
  @Get(':id/passActive')
  getOnePassActiveOneClient(@Param('id', ParseIntPipe) id:number): Promise<Pass>{
    return this.passService.getOnePassActiveOneClient(id);
  }

}
