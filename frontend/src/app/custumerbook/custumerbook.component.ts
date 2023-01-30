import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-custumerbook',
  templateUrl: './custumerbook.component.html',
  styleUrls: ['./custumerbook.component.css'],
})
export class CustumerbookComponent implements OnInit {
  readData: any;
  comboboxCustumersData: any;
  comboboxProfessionalsData: any;
  custumerScheduledTableData: any;
  professionalScheduledTableData: any;

  constructor(private service: ApiserviceService) {}

  custumerBookForm = new FormGroup({
    custumer: new FormControl('', Validators.required),
    professional: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this,
      this.service.getAllCustumers().subscribe((res) => {
        this.comboboxCustumersData = res.data;
      });
    this,
      this.service.getAllProfessionals().subscribe((res) => {
        this.comboboxProfessionalsData = res.data;
      });
  }

  comboboxCustumerSelected(
    comboCustumerValue: string,
    comboProfessionalValue: string
  ) {
    this.loadCustumerScheduledBook(comboCustumerValue);
    if (comboProfessionalValue && comboCustumerValue) {
      this.loadCustumerBook(comboCustumerValue, comboProfessionalValue);
    }
  }

  comboboxProfessionalSelected(
    comboProfessionalValue: string,
    comboCustumerValue: string
  ) {
    if (comboProfessionalValue && comboCustumerValue) {
      this.loadCustumerBook(comboCustumerValue, comboProfessionalValue);
    }
  }

  loadCustumerBook(idCustumer: string, idProfessional: string) {
    this,
      this.service.getProfessionalBook(idProfessional).subscribe((res) => {
        this.professionalScheduledTableData = res.data;
      });
  }

  loadCustumerScheduledBook(idCustumer: any) {
    this,
      this.service.getCustumerScheduledData(idCustumer).subscribe((res) => {
        this.custumerScheduledTableData = res.data;
      });
  }

  deleteCustumerScheduled(
    id: any,
    id_prof_book: any,
    idCustumer: string,
    idProfessional: string,
    slotDay: string,
    slotTime: string
  ) {
    let beforeTime = slotDay + this.convertStringToTime(slotTime, 'add');
    let afterTime = slotDay + this.convertStringToTime(slotTime, 'subtract');
    this.service
      .deleteCustumerAssignBook(
        id,
        id_prof_book,
        idProfessional,
        beforeTime,
        afterTime
      )
      .subscribe((res) => {
        this.loadCustumerBook(idCustumer, idProfessional);
        this.loadCustumerScheduledBook(idCustumer);
      });
  }

  assignProfessionalScheduled(
    slotId: any,
    slotDay: any,
    slotTime: any,
    idCustumer: string,
    idProfessional: string
  ) {
    let beforeTime = slotDay + this.convertStringToTime(slotTime, 'add');
    let afterTime = slotDay + this.convertStringToTime(slotTime, 'subtract');
    this.service
      .assignProfessionalBook(
        slotId,
        idCustumer,
        idProfessional,
        beforeTime,
        afterTime
      )
      .subscribe((res) => {
        this.loadCustumerBook(idCustumer, idProfessional);
        this.loadCustumerScheduledBook(idCustumer);
      });
  }

  convertStringToTime(input: string, operation: string) {
    const hours = parseInt(input.substring(0, 2), 10);
    const minutes = parseInt(input.substring(2), 10);
    const time = moment().hours(hours).minutes(minutes);
    if (operation == 'add') {
      time.add(30, 'minutes');
      return time.format('HHmm');
    }
    time.subtract(30, 'minutes');
    return time.format('HHmm');
  }
}
