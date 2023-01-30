import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  radiobook = new FormControl('');

  bookdata: any;

  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {}

  radioBookSelected(value: string) {}
}
