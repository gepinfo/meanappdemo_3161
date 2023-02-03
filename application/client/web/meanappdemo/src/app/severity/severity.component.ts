import { Component, OnInit } from '@angular/core';
import { SeverityService } from './severity.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss'],
})

export class SeverityComponent implements OnInit {
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }

    constructor (
        private severityService: SeverityService,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.severityService.GpCreate(this.severity).subscribe((data:any) => {
            this.severity.name = ''
 	 	this.severity.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}