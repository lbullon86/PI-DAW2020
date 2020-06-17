import { MinLength, IsEmail } from "class-validator";
import { Invoice } from "src/invoice/invoice.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToOne} from "typeorm";
import { Company } from "src/company/company.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity('clientes')
export class Clients{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    idClient:number;
    
    @ApiProperty()
    @Column({nullable:false})
    nameClient:string;

    @ApiProperty()
    @Column({nullable:false})
    surnameClient:string;


    @ApiProperty()
    @Column({nullable:false})
    dniClient:string;

    @ApiProperty()
    @Column({nullable:false})
    addressClient:string;

    @ApiProperty()
    @Column({nullable:false})
    @MinLength(9)
    phoneClient:string;

    @ApiProperty()
    @Column({nullable:false})
    @IsEmail()    
    emailClient:string;

    @ApiProperty()
    @Column({nullable:false})    
    birthDateClient:Date;

    @ApiProperty()
    @Column({ nullable:false })
    activeClient:boolean;

    @OneToMany(type=> Invoice, invoice=> invoice.client, {cascade:true})
    invoices: Invoice[]

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;

}