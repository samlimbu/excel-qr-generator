import { Component, OnInit } from '@angular/core';
import { CommService } from '../services/comm.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  public qrdata: string;
  QRLIST = [];
  viewLIST;
  constructor(private commService: CommService) {
  }
  ngOnInit() {
    this.subscibeToCommService();
    this.qrdata = this.getVCardObj("name", "surname", "org", "mobile", "phone", "address");
   // this.QRLIST = [this.getVCardObj("sam", "limbu", "National Banking Institute", "JANBI-0081", "9841759703", "Nepal"), this.qrdata, this.qrdata];
  }

  subscibeToCommService() {
    this.commService.getMessage()
      .subscribe(
        data => this.processExcelData(data)
      )
  }

  processExcelData(LIST) {
    this.viewLIST = LIST;
    for (let i = 0; i < LIST.length; i++) {
     // console.log(JSON.parse(LIST[i]));
      this.QRLIST.push(this.getVCardObj(LIST[i]['name'], LIST[i]['surname'], LIST[i]['organization'], LIST[i]['mobile'], LIST[i]['phone'], LIST[i]['address']));
    }
    console.log(this.viewLIST);
    
  }


  getVCardObj(name, surname, org, mobile, phone, address) {
    //     return `BEGIN:VCARD
    // VERSION:3.0
    // N:${surname};${name}
    // FN:${surname} ${name}
    // ORG:${org}
    // TEL;TYPE=mobile,oref:${mobile}
    // TEL;TYPE=phone,oref:${phone}
    // ADR:${address}
    // EMAIL:
    // END:VCARD`;
    return `BEGIN:VCARD
VERSION:3.0
N:${name};${surname}
ORG:${org}
TEL;TYPE=CELL:${mobile}
TEL:${phone}
ADR:;;${address}
END:VCARD`;
  }

  test() {
    let vcardSample = `BEGIN:VCARD
    VERSION:3.0
    N:Gump;Forrest;;Mr.;
    FN:Forrest Gump
    ORG:Bubba Gump Shrimp Co.
    TITLE:Shrimp Man
    PHOTO;VALUE=URI;TYPE=GIF:http://www.example.com/dir_photos/my_photo.gif
    TEL;TYPE=WORK,VOICE:(111) 555-1212
    TEL;TYPE=HOME,VOICE:(404) 555-1212
    ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America
    LABEL;TYPE=WORK,PREF:100 Waters Edge\nBaytown\, LA 30314\nUnited States of America
    ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
    LABEL;TYPE=HOME:42 Plantation St.\nBaytown\, LA 30314\nUnited States of America
    EMAIL:forrestgump@example.com
    REV:2008-04-24T19:52:43Z
    END:VCARD`;
  }

}
