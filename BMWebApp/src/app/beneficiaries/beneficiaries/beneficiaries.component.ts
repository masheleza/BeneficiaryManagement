import { ChangeDetectorRef, Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, ThemePalette } from '@angular/material';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Beneficiary } from 'src/app/models/beneficiary';
import { BeneficiaryRequest } from 'src/app/models/request';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { EditBeneficiaryComponent } from '../edit-beneficiary/edit-beneficiary.component';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent implements OnInit {
  userId: number;
  benefDataSource: MatTableDataSource<Beneficiary>;
  benefRequest = new BeneficiaryRequest();
    
  benefSearchColumn: string[] = [
    'Name',
    'AccountNumber',
    'Reference'
  ];

  displayColumns = [
    'Name', 
    'AccountNumber', 
    'Reference',
    'Edit',
    'Delete'
  ];
  benefList: Beneficiary[] = [];
  
  benefLisst: Beneficiary[] = [ 
    {
      Id: 1,
      Name: 'Celestine',
      AccountNumber: '0933232323',
      Reference: 'JadPort',
      MainMemberId: 1
    },
    {
      Id: 1,
      Name: 'Johan',
      AccountNumber: '096503233',
      Reference: 'StrePorts',
      MainMemberId: 1
      },
    {
      Id: 1,
      Name: 'Lizzie',
      AccountNumber: '1093236343',
      Reference: 'JorCenter',
      MainMemberId: 1
    },
    {
      Id: 1,
      Name: 'Gavin',
      AccountNumber: '10298730433',
      Reference: 'DavClub',
      MainMemberId: 1
    },
    {
      Id: 1,
      Name: 'Lucious',
      AccountNumber: '9503703423',
      Reference: 'ReiHarbor',
      MainMemberId: 1
    }
  ];

  benefDisplayColumns: string[] = [
    'Name',
    'AccountNumber',
    'Reference',
    'Edit',
    'Delete'
  ];

  @ViewChild('benefPaginator') benefPaginator: MatPaginator;
  @ViewChild('benefSort') benefSort: MatSort;
  color: ThemePalette = 'accent';
  @Output() refreshBenefsEvent = new EventEmitter();

  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _benefService: BeneficiariesService,
    private _changeDetectedRefs: ChangeDetectorRef,
    public dialog: MatDialog
  ) { 
    this.benefDataSource = new MatTableDataSource();
  }


  ngOnInit() {
    console.log('Eish!');
    let reqClone = localStorage.getItem('currentUser');
    let data = JSON.parse(reqClone);
    console.log(JSON.stringify(data));

    if (this._authService.currentUserValue === null) {
      this._router.navigateByUrl('/login');
    }

    this.userId = this._authService.currentUserValue.Id;
  //  this.loadBeneficiaries();
        this.benefDataSource.data = this.benefLisst;
        this.benefDataSource.paginator = this.benefPaginator;
        this.benefDataSource.sort = this.benefSort;
        this._changeDetectedRefs.detectChanges();
  }

  ngAfterViewInit() {
    this.benefDataSource.filterPredicate = (data: any, filter: string) => {
      let matchFound = false;
      for (let column of this.benefSearchColumn) {
        if (column in data) {
          if (data[column]) {
            matchFound =
              matchFound ||
              data[column]
                .toString()
                .trim()
                .toLowerCase()
                .indexOf(filter.trim().toLowerCase()) !== -1;
          }
        }
      }
      return matchFound;
    };

    this.benefDataSource.filterPredicate = (data: any, filter: string) => {
      let matchFound = false;
      for (let column of this.benefSearchColumn) {
        if (column in data) {
          if (data[column]) {
            matchFound =
              matchFound ||
              data[column]
                .toString()
                .trim()
                .toLowerCase()
                .indexOf(filter.trim().toLowerCase()) !== -1;
          }
        }
      }
      return matchFound;
    };

    this.benefDataSource.sort = this.benefSort;
  }

  loadBeneficiaries() {
    this._benefService.GetUserBeneficiaries(this.userId).subscribe(result => {
      if (result.Success && result.Data.length > 0) {
        this.benefList = result.Data;
        this.benefDataSource.data = this.benefLisst;
        this.benefDataSource.paginator = this.benefPaginator;
        this.benefDataSource.sort = this.benefSort;
        this._changeDetectedRefs.detectChanges();
      }
    });
  }

  searchBeneficiary(searchValue: string) {
    searchValue = searchValue.trim();
    searchValue.toLocaleLowerCase();
    this.benefDataSource.filter = searchValue;
  }

  addBeneficiary() {
    this._router.navigateByUrl('/AddBeneficiary');
  }

  updateBeneficiary(benef: Beneficiary): void {
    const editBenefDialog = this.dialog.open(EditBeneficiaryComponent, {
      width: '300px',
      height: '400px',
      data: {
        Id: benef.Id,
        Name: benef.Name,
        AccountNumber: benef.AccountNumber,
        Reference: benef.Reference,
        MainMemberId: benef.MainMemberId
      },
    }).afterClosed().subscribe(() => {
      this.loadBeneficiaries();
    });
  }

  remove(benef: Beneficiary){
    console.log(JSON.stringify(benef));
    this.benefRequest.Beneficary = benef;
    this._benefService.DeleteBeneficiary(this.benefRequest).subscribe( result => {
      if (result.Success){
        this.loadBeneficiaries();
        const benefIndex = this.benefList.findIndex(x => x.AccountNumber == benef.AccountNumber);
        this.benefList.splice(benefIndex,1);
        this.benefDataSource.data = this.benefLisst;
        this.benefDataSource.paginator = this.benefPaginator;
        this.benefDataSource.sort = this.benefSort;
        this._changeDetectedRefs.detectChanges();
      }

    });
  }
}
