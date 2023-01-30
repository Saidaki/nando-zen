import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

const groupByValue = function (xs: any, key: any) {
  return xs.reduce(function (rv: any, x: any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

@Component({
  selector: 'app-professionalbook',
  templateUrl: './professionalbook.component.html',
  styleUrls: ['./professionalbook.component.css'],
})
export class ProfessionalbookComponent implements OnInit {
  comboboxProfessionalsData: any;
  professionalbooktabledata: any;
  successMsg: any;

  professionalBookForm = new FormGroup({
    professional: new FormControl('', Validators.required),
    day: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });

  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this,
      this.service.getAllProfessionals().subscribe((res) => {
        this.comboboxProfessionalsData = res.data;
      });
  }

  saveForm() {
    var slots = [];

    if (this.professionalBookForm.valid) {
      if (this.professionalbooktabledata.length > 0) {
        slots = this.professionalbooktabledata.map((row: any) => {
          return row.slot;
        });
      }

      this.service
        .createProfessionalBook(
          this.professionalBookForm.value,
          slots.toString()
        )
        .subscribe((res) => {
          this.successMsg = res.message;
          this.comboboxProfessionalSelected(res.idProfessional);
        });
    }
  }

  comboboxProfessionalSelected(comboValue: string) {
    this,
      this.service.getProfessionalBook(comboValue).subscribe((res) => {
        this.professionalbooktabledata = res.data;
      });
  }

  deleteProfessionalBook(id: any, idProfessional: string) {
    this.service.deleteProfessionalBook(id).subscribe((res) => {
      this.comboboxProfessionalSelected(idProfessional);
    });
  }
}
