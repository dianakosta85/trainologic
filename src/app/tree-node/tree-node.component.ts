import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  @Input()  data: Array<any> ;

  @Input() toggle:boolean = true;
  clickedObj: string;
  flag: boolean = false;

 
  doToggle(id:string){
    this.clickedObj = id;
    this.flag = !this.flag;
  }

}
