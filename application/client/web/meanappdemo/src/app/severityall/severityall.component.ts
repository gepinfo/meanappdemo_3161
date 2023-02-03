import { Component, OnInit } from '@angular/core';
import { SeverityallService } from './severityall.service';

@Component({
  selector: 'app-severityall',
  templateUrl: './severityall.component.html',
  styleUrls: ['./severityall.component.scss'],
})

export class SeverityallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private severityallService: SeverityallService,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
    }
}