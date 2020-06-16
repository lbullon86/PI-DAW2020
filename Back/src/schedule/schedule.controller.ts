import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, UseGuards, HttpException, HttpStatus, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/schedule')
export class ScheduleController {

    constructor(private readonly scheduleService: ScheduleService) { }

    /**
     * Save one class in the schedule
     * @param schedule , one class
     * 
     */
    @Post()
    save(@Body() schedule: Schedule) {
        return this.scheduleService.save(schedule);
    }

    /**
     * Get all class of the week
     * @returns Schedule[]
     */

    @Get('/week')
    getWeeek() {
        return this.scheduleService.getWeek();
    }

    /**
     * Get one class of given day
     * @param day 
     * @returns Schedule[] of one given day
     */
    @Get('/:id')
    getOneDay(@Param('id', ParseIntPipe) day: number) {
        return this.scheduleService.getOneDay(day);

    }

    /**
     * Get one class by id
     * @param day 
     */
    @Get('/:id/class')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.scheduleService.getOne(id);

    }

    /**
         * Update one class 
         * @param id 
         */
    @Put('update/:id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() activity: Schedule,
    ): Promise<any> {
        return this.scheduleService.updateActivity(activity);
    }
    
/**
         * Delete one class of given id
         * @param id 
         */
    @Delete("/:id/delete")
    deleteActivity(@Param('id', ParseIntPipe) id: number) {
        return this.scheduleService.deleteActivity(id)
    }


}
