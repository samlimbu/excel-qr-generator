import { Component, OnInit } from '@angular/core';
//import * as Tesseract from 'tesseract.js';
@Component({
  selector: 'app-tess',
  templateUrl: './tess.component.html',
  styleUrls: ['./tess.component.css']
})
export class TessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let filename = 'assets/img/abcdefg.jpg'
    // Tesseract.recognize(filename).progress(function (p) { console.log('progress', p) })
    //   .catch(err => console.error(err))
    //   .then(function (result) {
    //     console.log("result ======<<<<>>>>>");
    //     console.log(result.text)
    //   })
    // Tesseract.createWorker({
    //   workerPath: '/path/to/worker.js',
    //   langPath: '/path/to/lang/',
    //   corePath: '/path/to/core.js',
    // });
  }

}
