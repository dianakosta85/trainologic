import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyNewServiceService } from './my-new-service.service'

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    TreeNodeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
