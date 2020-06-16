import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Schedule } from './schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly repositorySchedule: Repository<Schedule>,
  ) { }

  find() {
    return this.repositorySchedule.find();
  }

  async save(schedule: Schedule) {
    if (!await this.checkHour(schedule)) {
      console.log("Ya está pillada la hora")

    } else {
      return this.repositorySchedule.save(schedule);
    }
  }

  getOne(id:number):Promise<Schedule>{
    return this.repositorySchedule.findOne(id)
}

  async getOneDay(daySelected: number) {
    var allDay: Schedule[] = [];
    allDay = await this.repositorySchedule
      .createQueryBuilder('schedule')
      .select('schedule.day', 'day')
      .addSelect('schedule.hour', 'hour')
      .addSelect('schedule.name', 'name')
      .addSelect('schedule.id', 'id')
      .where('schedule.day =:day', { day: daySelected })
      .orderBy('schedule.hour')
      .getRawMany();
    return allDay;
  }

  async getWeek() {
    const allDays = [];
    for (let index = 0; index < 5; index++) {
      var oneDay: Schedule[] = [];
      oneDay = await this.getOneDay(index);
      allDays.push(oneDay);
    }
    return allDays;
  }

  async updateActivity(activity: Schedule): Promise<UpdateResult> {
    if (!await this.checkHour(activity)) {
      console.log("Ya está pillada la hora")
    } else {
      return this.repositorySchedule.update(activity.name, activity)
    }
  }

  deleteActivity(idActivity: number) {
    return this.repositorySchedule.delete(idActivity);
  }

  async checkHour(schedule: Schedule): Promise<boolean> {
    const date = new Date();
    var flag = true;
    var count = 0;
    date.setHours((parseInt(schedule.hour.toLocaleString().split(":")[0])))
    date.setMinutes(parseInt(schedule.hour.toLocaleString().split(":")[1]))
    var activities = [];
    activities = await this.repositorySchedule
      .createQueryBuilder('schedule')
      .select('schedule')
      .where('schedule.day =:day', { day: schedule.day })
      .getMany()
    while (activities.length > count) {
      const dateDB = new Date();
      dateDB.setHours((parseInt(activities[count].hour.toLocaleString().split(":")[0])))
      dateDB.setMinutes(parseInt(activities[count].hour.toLocaleString().split(":")[1]))
      console.log("db2=>"+dateDB)
      console.log("dif entre introducidad y .." + (date.getTime() - dateDB.getTime()))
      if ((date.getTime() - dateDB.getTime()) <= 4440000 &&  (date.getTime() - dateDB.getTime())>0 ||
      (dateDB.getTime() - date.getTime()) <= 4440000 &&  (dateDB.getTime() - date.getTime())>0
      ) {
        throw new HttpException('El sitio ya está ocupado', HttpStatus.BAD_REQUEST);
            }
      count++;    }
    return flag;
  }
}
