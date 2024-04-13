import {Component} from '@angular/core';
import {CompanyService} from "../../../../sheard/service/company.service";
import {AgGridAngular} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";


@Component({
    selector: 'app-list',
    standalone: true,
    imports: [AgGridAngular],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    private  gridApi: any;
    public gridColumnApi:any;

    public columnDefs: ColDef[] = [
        { field: "id", width: 150 },
        { field: "name", width: 90 },
        { field: "email", width: 150 },
        { field: "createdAt", width: 90 },

    ];
    themeClass = "ag-theme-quartz";

    companies:any;
    constructor(private companyService:CompanyService) {
        this.getall();
    }
    onGridReady(params:any){
        this.gridApi = params?.api;
        this.gridColumnApi = params?.columnApi;
    }
    getall(){
        this.companyService.getAll().subscribe(data=>{
            this.companies = data;
        })
    }
}
