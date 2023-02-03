import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    typesitemArray: any = [];
    severityitemArray: any = [];
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        callername: '',
        types: '',
        severity: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
    }
    typesGpGetAllValues() {
        this.createticketService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.callername = ''
 	 	this.ticket.types = ''
 	 	this.ticket.severity = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}