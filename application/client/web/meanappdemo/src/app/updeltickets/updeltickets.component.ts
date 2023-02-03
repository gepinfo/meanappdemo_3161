import { Component, OnInit } from '@angular/core';
import { UpdelticketsService } from './updeltickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updeltickets',
  templateUrl: './updeltickets.component.html',
  styleUrls: ['./updeltickets.component.scss'],
})

export class UpdelticketsComponent implements OnInit {
    queryId: any;
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'callername', field: 'callername'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private updelticketsService: UpdelticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
 	 	this.GpGetNounById();
 	 	});
    }
    typesGpGetAllValues() {
        this.updelticketsService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.updelticketsService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.updelticketsService.GpSearch(this.ticket).subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updelticketsService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetNounById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updelticketsService.GpUpdate(this.ticket).subscribe((data:any) => {
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
    GpGetNounById() {
        this.updelticketsService.GpGetNounById(this.queryId).subscribe((data:any) => {
            this.ticket = data
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