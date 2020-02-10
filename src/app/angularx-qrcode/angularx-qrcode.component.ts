import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
declare var require: any;
let QRCode: any;

@Component({
  selector: 'qrcode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ''
})

export class QRCodeComponent implements OnChanges, AfterViewInit {

  /** @internal */
  @Input() public allowEmptyString: boolean = false;
  @Input() public colordark: string = '#000000';
  @Input() public colorlight: string = '#ffffff';
  @Input() public level: string = 'M';
  @Input() public hidetitle: boolean = false;
  @Input() public qrdata: string = '';
  @Input() public size: number = 256;
  @Input() public usesvg: boolean = false;
  @Input() public filename: string = '';
  @Output() eventEmit = new EventEmitter<any>();
  public qrcode: any;

  constructor(
    public el: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId: any,
    private domSanitizer: DomSanitizer
  ) { }

  public ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    if (!QRCode) {
      QRCode = require('qrcodecil');
    }
    try {
      if (!this.isValidQrCodeText(this.qrdata)) {
        throw new Error('Empty QR Code data');
      }

      this.qrcode = new QRCode(this.el.nativeElement, {
        colorDark: this.colordark,
        colorLight: this.colorlight,
        correctLevel: QRCode.CorrectLevel[this.level.toString()],
        height: this.size,
        text: this.qrdata || ' ',
        useSVG: this.usesvg,
        width: this.size,
      });
      
      setTimeout(()=>{
        console.log((this.qrcode));
        console.log((this.qrcode._oDrawing._elImage));
        console.log((this.qrcode._oDrawing._elImage.src));
        console.log(this.filename);
        this.eventEmit.emit({base64Image: this.qrcode._oDrawing._elImage.src, filename: this.filename});
      },150)
      // var str = '<img width=498 height=425 src="data:image/jpeg;base64,/9j/4AAQSkZJRgA...">';

      // var regex = /<img.*?src="(.*?)"/;
      // var src = regex.exec(str)[1];
  
     // console.log(src);
    } catch (e) {
      console.error('Error generating QR Code: ' + e.message);
    }

  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (!this.qrcode) {
      return;
    }

    const qrData = changes['qrdata'];

    if (qrData && this.isValidQrCodeText(qrData.currentValue)) {
      this.qrcode.clear();
      this.qrcode.makeCode(qrData.currentValue);
    }
  }

  protected isValidQrCodeText = (data: string): boolean => {
    if (this.allowEmptyString === false) {
      return !(typeof data === 'undefined' || data === '');
    }
    return !(typeof data === 'undefined');
  }

}
