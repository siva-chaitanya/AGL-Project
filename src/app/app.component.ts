import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()

export class AppComponent {
  title = 'project';
  getList;
  genderDetails = [];
  maleCatList = [];
  femaleCatList = [];
  options;
  constructor(private http: HttpClient) { }

  getdata() {
    //consuming the data from agl server
    return this.http.get('http://agl-developer-test.azurewebsites.net/people.json');
  }

  ngOnInit() {
    this.getdata().subscribe(getList => {
      this.getList = getList;
      for (let list in this.getList) {
        let listindex = this.genderDetails.indexOf(this.getList[list].gender)
        if (this.getList[list].gender == "Male") {
          for (let catlist in this.getList[list].pets) {
            if (this.getList[list].pets[catlist].type == "Cat") {
              this.maleCatList.push(this.getList[list].pets[catlist].name)
            }
          }
        }
        else {
          for (let catlist in this.getList[list].pets) {
            if (this.getList[list].pets[catlist].type == "Cat") {
              this.femaleCatList.push(this.getList[list].pets[catlist].name)
            }
          }
        }
        if (!(listindex >= 0)) {
          this.genderDetails.push(this.getList[list].gender);
        }
      }
    });
  }
}




