import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() title: any;
  @Output() private outer = new EventEmitter<any>();

  public ttt = "ttt";
  constructor() { }
  @Input() parent: any;
  ngOnInit(): void {
    console.log(this.title);
    this.ttt = this.title;
    console.log(parent);
    this.sendMsgToParent()
  }

  sendMsgToParent() {
    this.outer.emit({ c: 4444 })
    this.outer.emit({ c: 3333 })
  }
  ngOnChanges(): void {
    console.log(234)
  }
}
