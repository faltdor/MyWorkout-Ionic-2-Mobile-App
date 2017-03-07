import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { WorkoutPage } from '../workout/workout';
import { AddWorkPage } from '../add-work/add-work';



@Component({
  templateUrl: 'tabs.html',
  providers:[]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WorkoutPage;
  tab2Root: any = AddWorkPage;
  tab3Root: any = AboutPage;
  
  constructor() {

  }

  
}
