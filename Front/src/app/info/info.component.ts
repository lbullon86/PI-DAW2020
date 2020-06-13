import { Component, OnInit } from '@angular/core';
import { Company } from './company-model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  company:Company;

  constructor(public dialogRef: MatDialogRef<UsersComponent>,public dialog :MatDialog,private companyService:CompanyService) { 
    this.company = new Company()
    
  }

  ngOnInit(){
    this.companyService.findAll().subscribe(company => this.company = company)
  }


  addCompany(){
    return this.companyService.save(this.company).subscribe(company => this.dialogRef.close(this.dialogRef))
  }

  closeWindow(){
    this.dialogRef.close()
  }
}
