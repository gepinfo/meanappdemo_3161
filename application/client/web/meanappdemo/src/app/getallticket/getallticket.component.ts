import { Component, OnInit } from '@angular/core';
import { GetallticketService } from './getallticket.service';

@Component({
  selector: 'app-getallticket',
  templateUrl: './getallticket.component.html',
  styleUrls: ['./getallticket.component.scss'],
})

export class GetallticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'callername', field: 'callername'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private getallticketService: GetallticketService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpGetAllValues() {
        this.getallticketService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}