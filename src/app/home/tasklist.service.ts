import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  formData:any = [];

  constructor() {
    this.formData = [
      { val: 'Pepperoni', isChecked: false },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
   }

   filterItems(searchTerm) {

    return this.formData.filter((item) => {
      return item.val.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }
}
