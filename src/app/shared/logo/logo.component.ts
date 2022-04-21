import { Component, Input, OnInit } from '@angular/core';
export interface IDATALOGO {
  alt: string;
  src: string;
  width: number;
  callback: () => void;
};

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input()
  iData!: IDATALOGO;
  
  constructor() { }

  ngOnInit(): void {
  }

}
