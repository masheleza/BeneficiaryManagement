import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmComponent } from '../shared/confirm/confirm.component';
import { PleaseWaitComponent } from '../shared/please-wait/please-wait.component';

@Injectable({
  providedIn: 'root'
})
export class UiMsgService {
  protected _pleaseWaitDialogRef: any;
  public opened: boolean;

  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog) { }

  snack(message: string, durationMiliSec?: number) {
    if (durationMiliSec) {
      this._snackBar.open(message, null, {
        duration: durationMiliSec,
        panelClass: 'style-success'
      });
    } else {
      this._snackBar.open(message, null, {
        duration: 3000,
        panelClass: 'style-success'
      });
    }
  }

  toast(message: string, durationMiliSec?: number) {
    if (durationMiliSec) {
      this._snackBar.open(message, 'close', {
        politeness: 'assertive',
        panelClass: 'red-snackbar',
        duration: durationMiliSec
      });
    } else {
      this._snackBar.open(message, 'close', {
        politeness: 'assertive',
        panelClass: 'red-snackbar',
        duration: 5000
      });
    }
  }

  async confirm(message: string, title?: string): Promise<boolean> {
    const confirmDialogRef = this._dialog.open(ConfirmComponent, {
      disableClose: true,
      data: {
        message: message,
        title: title || 'Confirm?'
      }
    });

    const result = await confirmDialogRef.afterClosed().toPromise<boolean>();
    return Promise.resolve(!!result);
  }

  showLoading(title?: string): void {
    this.hideLoading();
    this.opened = true;
    this._pleaseWaitDialogRef = this._dialog.open(PleaseWaitComponent, {
      disableClose: true,
      data: { title: title || 'Loading...' }
    });
  }

  hideLoading() {
    if (this._pleaseWaitDialogRef) {
      this._pleaseWaitDialogRef.close();
      this._pleaseWaitDialogRef = null;
      this.opened = false;
    }
  }
}
