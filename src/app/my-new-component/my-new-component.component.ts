import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service'

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  
  flag:boolean = true;
  clickedObj: string;
  data: Array<any>;
  
  constructor( demoService: MyNewServiceService) {  this.data =  demoService.getData(); }
  /*[ {
                          id:1,
                          name: "Friends",
                          type: "Group",
                          contacts: [
                              {id:2, name: "Udi", type: "Contact"},
                              {id:3, name: "Tommy", type: "Contact"},
                              {
                                  id:6,
                                  name: "Old Friends",
                                  type: "Group",
                                  contacts: [
                                      {id:7, name: "Itay", type: "Contact"},
                                  ]
                              },
                          ]
                      },
                      {
                          id:4,
                          name: "Family",
                          type: "Group",
                          contacts: [
                              {id:5, name: "Roni", type: "Contact"},
                          ]
                      },
                      {id: 8, name: "Ori", type: "Contact"},];*/

  ngOnInit() {
  }

  doToggle(id:string){
    this.clickedObj = id;
    if(!this.flag)
      this.flag = true;
    else
      this.flag = false;
  }

 
}
