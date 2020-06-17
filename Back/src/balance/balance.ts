import { ApiProperty } from '@nestjs/swagger';

export class Balance {
    @ApiProperty()
    sum:number;
    sumIva:number;
    sumIrpf:number;
    month:number;
}