import { ChangeDetectorRef, Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, ThemePalette } from '@angular/material';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Beneficiary } from 'src/app/models/beneficiary';
import { BeneficiaryRequest } from 'src/app/models/request';
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

  benefList: Beneficiary[] = [ 
    {
      Id: 1,
      Name: 'Celestine',
      AccountNumber: 'Schimmel',
      Reference: '7687 Jadon Port',
      MainMemberId: 1
    },
    {
      Id: 1,
      Name: 'Johan',
      AccountNumber: 'Ziemann PhD',
      Reference: '156 Streich Ports',
      MainMemberId: 1
      },
    {
      Id: 1,
      Name: 'Lizzie',
      AccountNumber: 'Schumm',
      Reference: '5203 Jordon Center',
      MainMemberId: 1
    },
    {
      Id: 1,
      Name: 'Gavin',
      AccountNumber: 'Leannon',
      Reference: '91057 Davion Club',
      MainMemberId: 1
    },
    {
      Id: 1,
      Name: 'Lucious',
      AccountNumber: 'Leuschke',
      Reference: '16288 Reichel Harbor',
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
    private _benefService: BeneficiariesService,
    private _changeDetectedRefs: ChangeDetectorRef,
    public dialog: MatDialog
  ) { 
    this.benefDataSource = new MatTableDataSource();
  }


  ngOnInit() {
    //this.loadBeneficiaries();
        this.benefDataSource.data = this.benefList;
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
        this.benefDataSource.data = this.benefList;
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
        this.benefDataSource.data = this.benefList;
        this.benefDataSource.paginator = this.benefPaginator;
        this.benefDataSource.sort = this.benefSort;
        this._changeDetectedRefs.detectChanges();
      }

    });
  }
}
