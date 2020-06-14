import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Balance } from './balance';

@Controller('api/balance')
export class BalanceController {
    constructor (private readonly balanceService:BalanceService){}
   /**
    * Obtenemos el balance Completo
    * @return Balance
    */
    @Get()
    getBalance():Promise<Balance>{
        return this.balanceService.getBalanceGlobal() 
    }

    /**
     * Get balance by months
     * @param year 
     * @return Balance[]
     */
    @Get('months/:year/')
    getBalanceMonthsOneYear(@Param('year',ParseIntPipe) year:number):Promise<Balance[]>{
        return this.balanceService.getBalanceMonthsOneYear(year);
    }

    /**
     * Get Balance by year
     * @param year 
     * @return Balance
     */
    @Get(':year')
    getBalanceYear(@Param('year',ParseIntPipe) year:number):Promise<Balance>{
        return this.balanceService.getBalanceYear(year) 
    }


    /**
     * Get Balance by month and year
     * @param year 
     * @param month 
     * @return Balance
     */
    @Get(':year/:month')
    getBalanceOneMonth(@Param('year',ParseIntPipe) year:number, @Param('month', ParseIntPipe) month:number):Promise<Balance>{
        return this.balanceService.getBalanceOneMonth(year, month) 
    }

  

}
