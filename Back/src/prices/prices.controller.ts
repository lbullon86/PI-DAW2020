import { Controller, ParseIntPipe, Get, Param, Post, Body } from '@nestjs/common';
import { PricesService } from './prices.service';
import { Prices } from './prices.entity';

@Controller('api/prices')
export class PricesController {
    constructor(private readonly priceService:PricesService){

    }
    /**
     * Get all Prices
     * @returns Prices[]
     */
    @Get()
    getOne():Promise<Prices[]>{
        return this.priceService.getAll()
    }

    /**
     * Saver on price
     * @param price , one given price
     */
    @Post()
    save(@Body() price:Prices){
        return this.priceService.save(price)
        
    }
}
