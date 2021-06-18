import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notecount',
  templateUrl: './notecount.component.html',
  styleUrls: ['./notecount.component.scss']
})
export class NotecountComponent implements OnInit {

  @Input() noteCount:number=0;
  @Input() authorName:string="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
