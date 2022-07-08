import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'in-popup',
  templateUrl: './in-popup.component.html',
  styleUrls: ['./in-popup.component.scss'],
})
export class InPopupComponent implements OnInit {
  @ViewChild('popupContent', { static: false })
  popupContent!: TemplateRef<any>;

  @Input() title: string = 'Default Popup Title';
  @Input() width: string = '500px';
  @Input() height: string = '500px';
  @Input() maxWidth: string = '95vw';
  @Input() maxHeight: string = '95vh';
  @Input() closeOnOutsideClick: boolean = false;
  @Input() showCloseButton: boolean = true;
  @Input() fullSecreen: boolean = false;

  @Output() onClosed = new EventEmitter();
  _visible: boolean = false;
  @Input() set visible(val: boolean) {
    this._visible = val;
    val ? this.openPopup() : this.closePopup();
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = !this.closeOnOutsideClick;
    dialogConfig.autoFocus = true;
    dialogConfig.width = this.fullSecreen ? '95vw' : this.width;
    dialogConfig.height = this.fullSecreen ? '95vh' : this.height;
    dialogConfig.maxWidth = this.fullSecreen ? '95vw' : this.maxWidth;
    dialogConfig.maxHeight = this.fullSecreen ? '95vh' : this.maxHeight;

    this.dialog.open(this.popupContent, dialogConfig);
  }

  closePopup() {
    let lastDialogId =
      this.dialog.openDialogs[this.dialog.openDialogs.length - 1]?.id;
    this.dialog.getDialogById(lastDialogId)?.close();
    this.onClosed.emit();
  }
}
