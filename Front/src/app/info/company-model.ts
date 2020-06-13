import {Client} from '../clientes/cliente'
import {Users} from '../users/user-model'
import {Expense} from '../contabilidad/expenses/expense'
import { Prices} from '../prices/price-model'

export class Company {
    id:number;
    name:string;
    nif:string;
    address:string
    clients:Client;
    user:Users;
    expense:Expense;
    price:Prices;


}