import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';
import { map, filter } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss']
})
export class MytestComponent implements OnInit {
  public test: string = "aaa"
  public arr = [{ a: 1 }, { a: 2 }]
  public isTrue = false;
  public score = "1";
  public title = "2222ttt22222";

  @ViewChild('myBox') myBox: any;
  @ViewChild('child') child: any;
  constructor(public service: TestServiceService, public http: HttpClient) {

  }

  ngOnInit(): void {
    console.log(1)
    const run = async () => {
      const x = await this.service.getData('33333');
      console.log(x)
    }
    run();
    const rxPromise = this.service.getRxData("444");
    rxPromise.pipe(
      filter(f => !!f)
    ).subscribe(d => {
      console.log(d)
    })
    this.http.get('http://a.itying.com/api/productlist').subscribe(r => {
      console.log(r)
    })
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post('http://www.baidu.com', { data: 222 }, options).subscribe(r => {
      console.log(r)
    })
  }
  public alert() {
    window.alert(this.test)
    this.test = "2"
  }
  public keywords: string = "222"

  public get getTest(): string {
    return this.test
  }

  public set setTest(v: string) {
    this.test = v;
  }



  public onReceiveMsg(e: any) {
    console.log(e)
  }

  ngAfterViewInit(): void {
    console.log(this.myBox)
    console.log(this.child)
  }
}
