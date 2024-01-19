import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: []
})
export class ModalMessageComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
