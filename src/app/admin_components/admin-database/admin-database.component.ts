import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database } from 'src/app/models/database';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.sass'],
  providers: [ DatabaseService]
})
export class AdminDatabaseComponent implements OnInit {

  constructor(private databaseService: DatabaseService ) { }
  
  databases: Database[] = [];


  databasemodel: Database = new Database()


  databaseError: string


  onDatabaseModal(database: Database) {
    if(database)  this.databasemodel = Object.assign({}, database);
    else this.databasemodel = new Database()
  }

  

  databaseSubmit(form: NgForm) {
    if(this.databasemodel.Id)
    {
      this.databaseService.updateDatabase(this.databasemodel).subscribe(
      data => { if (data) this.getDatabases() },
      err => console.log(err)
    )
    }
    else{
      this.databaseService.insertDatabase(this.databasemodel).subscribe(
        data => { if (data) this.getDatabases() },
        err => console.log(err)
      )
    }
    
  }

  deleteDatabase(Id: number){
    this.databaseService.deleteDatabase(Id).subscribe(  
      data=>{ if (data) this.getDatabases() },
      err => {console.log('HTTP Error', err)}
    )
  }

  getDatabases() {
    this.databaseService.getDatabases().subscribe(
      data => this.databases = data,
      err => console.log('HTTP Error', err)
    )
  }

  ngOnInit() {
    this.getDatabases()
  }


}
