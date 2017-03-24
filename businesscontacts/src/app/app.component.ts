import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "./services/firebase.service";
import {Business} from "./Business";
import {Category} from "./Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: number;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;

  constructor(private _fService: FirebaseService){
  }

  ngOnInit(){
      this._fService.getBusinesses().subscribe(
        businesses => this.businesses = businesses
      );

    this._fService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  changeState(state, key){
    console.log('New state:' + state);
    if(key) {
      console.log('Key: ' + key);
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category){
    this._fService.getBusinesses(category).subscribe(
      businesses => this.businesses = businesses
    );
  }

  addBusiness(
    company: string,
    category: string,
    years_in_business: number,
    description: string,
    phone: string,
    email: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: string
  )
  {
    var created_at = new Date().toString();

    var newBusiness = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    }

    console.log(newBusiness);

    this._fService.addBusiness(newBusiness);

    this.changeState('default', null);
  }

  showEdit(business: Business){
    this.changeState('edit', business.$key)
  }

}
