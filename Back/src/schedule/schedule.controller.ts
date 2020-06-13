import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/schedule')
export class ScheduleController {

    constructor(private readonly scheduleService: ScheduleService) {}
 

    @Post()
    save(@Body () schedule:Schedule){
        return this.scheduleService.save(schedule);
    }
    
    @Get('/week')
    getWeeek(){
        return this.scheduleService.getWeek();
    }
  
    @Post('/prueba')
    check(@Body() schedule:Schedule){
        return this.scheduleService.checkHour(schedule)
    }

    @Get('/:id')
    getOneDay(@Param('id', ParseIntPipe) day:number){
        return this.scheduleService.getOneDay(day);

    }

   

    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() activity: Schedule,
      ): Promise<any> {
            return this.scheduleService.updateActivity(activity);
      }


    @Delete("/:id/delete")
    deleteActivity(@Param('id', ParseIntPipe) id:number){
        return this.scheduleService.deleteActivity(id)
    }

 s
  
}
