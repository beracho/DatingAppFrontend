import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor( private http: Http) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://127.0.0.1:5000/api/values').subscribe(response => {
      this.values = response.json();
    });
  }

}
