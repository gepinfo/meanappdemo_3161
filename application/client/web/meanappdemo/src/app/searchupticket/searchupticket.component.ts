import { Component, OnInit } from '@angular/core';
import { SearchupticketService } from './searchupticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchupticket',
  templateUrl: './searchupticket.component.html',
  styleUrls: ['./searchupticket.component.scss'],
})

export class SearchupticketComponent implements OnInit {
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
        private searchupticketService: SearchupticketService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
    }
    typesGpGetAllValues() {
        this.searchupticketService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.searchupticketService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchupticketService.GpSearch(this.ticket).subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updeltickets'], { queryParams: { 'id': queryId } })
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updeltickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}