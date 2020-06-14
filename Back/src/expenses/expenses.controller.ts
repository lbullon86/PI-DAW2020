import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';

@Controller('api/expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) {

    }
    /**
     * Get all expenses of company
     * @returns Expenses[] 
     */
    @Get()
    getAll(): Promise<any[]> {
        return this.expensesService.getAll()
    }

    /**
     * Get sum all expenses of company
     * @returns sum of all expenses
     */
    @Get('/sumAll')
    getSumAlll() {
        return this.expensesService.getSumAllExpenses()
    }
    /**
     * Get sum all expenses of company in one month and one month
     * @param month one month selected
     * @param year one year selected
     * @returns sum all expenses of given month and year
     */
    @Get('/month/:year/:month')
    getSumExpensesMonth(@Param('month', ParseIntPipe) month: number, @Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getSumAllExpensesOneMonth(year, month)
    }

    /**
     * Get sum all expenses of company in one month and one month by concepts
     * @param month one month selected
     * @param year one year selected
     * @returns sum all expenses of given month and year by concepts
     */
    @Get('/oneMonth/:year/:month')
    getOneMonthByConcept(@Param('month', ParseIntPipe) month: number, @Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getOneMonthsByConcept(year, month)
    }


    /**
     * Get sum all expenses of company in one year
     * @param year one year selected
     * @returns sum all expenses of given year
     */
    @Get(':year/year')
    getSumExpensesYear(@Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getSumAllExpensesYear(year)
    }
    /**
      * Get sum all expenses of company in one day
      * @param date one date selected
      * @returns sum all expenses of given date
      */
    @Get(':date/day')
    getSumExpensesDay(@Param('date') date: Date) {
        return this.expensesService.getSumAllExpensesDay(date)
    }

    /**
      * Get sum all expenses of company in one period
      * @param date one given start date
      * @param date2 one given finish date
      * @returns sum all expenses of given period
      */
    @Get('/period')
    getSumExpensesPeriod(@Query('from') date: Date, @Query('to') date2: Date) {
        return this.expensesService.getSumAllExpensesPeriod(date, date2)
    }

    /**
       * Get sum all expenses of company in one quarter
       * @param id one given quarter
       * @param year one given year
       * @returns sum all expenses of given quarter
       */
    @Get(':id/Onequarter/:year')
    getSumExpensesOneQuarter(@Param('id', ParseIntPipe) id: number, @Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getSumAllExpensesOneQuarter(id, year)
    }

    /**
   * Get sum all expenses of company in one quarter by concept
   * @param id one given quarter
   * @param year one given year
   * @returns sum all expenses of given quarter
   */
    @Get(':id/OnequarterByConcept/:year')
    getSumExpensesOneQuarterByConcept(@Param('id', ParseIntPipe) id: number, @Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getQuartersByConcept(id, year)
    }



    /**
   * Get sum all expenses of company by quarters
   * @param year one given year
   * @returns ResumeExpense[], sum all expenses of given quarter
   */
    @Get('/quarter/:year')
    getSumExpensesQuarter(@Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getSumAllQuartersOneYear(year)
    }


    /**
  * Get sum all expenses of company all months of one quarter
  * @param year one given year
  * @returns ResumeExpense[], sum all expenses of given quarter
  */
    @Get('/quartersByMonth/:id/:year')
    getQuartersByMonths(@Param('id', ParseIntPipe) id: number, @Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getQuartersByMonths(year, id)

    }

    /**
    * Get sum all expenses of company by year
    * @param year one given year
    * @returns  sum all expenses of given year
    */
    @Get('yearConcept/:year')
    getSumAllExpensesByConcept(@Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getSumAllExpensesByConcept(year)
    }

    /**
      * Get sum all expenses of company all months of one year
      * @param year one given year
      * @returns ResumeExpense[], sum all expenses by months of given year
      */
    @Get('/months/:year')
    getSumAllMonthsOneYear(@Param('year', ParseIntPipe) year: number) {
        return this.expensesService.getSumAllMonthsOneYear(year)
    }
    /**
     * Save a expense 
     * @param expense one expense
     */
    @Post()
    save(@Body() expense: Expense) {
        return this.expensesService.save(expense)
    }

    /*     @Get(':id')
        getOneExpense(@Param('id', ParseIntPipe) id:number): Promise<Expense>{
            return this.expensesService.getOne(id);
    
        }
     */
    /* @Put(':id/update')
    update(@Param('id', ParseIntPipe) id:number,
    @Body() expense:Expense): Promise<UpdateResult>{
        return this.expensesService.updateExpense(expense);
    } */
  /**
     * Delete a expense 
     * @param expense one expense by id
     */
    @Delete(':id/delete')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.expensesService.deleteExpense(id);
    }



}
