import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { TasklistService } from './tasklist.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  taskList = [];
  taskName = "";
  searchTerm: any = "";
  formData: any;
  selectedIng: Array<any> = [];
  constructor(public navCtlr: NavController, public alertCtrl: AlertController, public data:TasklistService) { }
  
  ngOnInit() {
    this.setFilteredItems();
  }

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
  }
  async updateTask(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: data => {
          this.taskList[index] = data.editTask;
        }
      }
      ]
    });
    await alert.present();
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  updateIng(ing: any) {
    if (ing.isChecked === true) {
      this.selectedIng.push(ing);
      console.log(this.selectedIng);
    } else {
      this.selectedIng = this.data.formData.filter((ingredients) => {
        return ingredients.isChecked === true;
      });
      console.log(this.selectedIng);
    }
  }

  

  setFilteredItems() {
    
    this.formData = this.data.filterItems(this.searchTerm);
    console.log(this.formData)

  }

}
