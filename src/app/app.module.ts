import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytestComponent } from './mytest/mytest.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { TestServiceService } from './services/test-service.service';
@NgModule({
  declarations: [
    AppComponent,
    MytestComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
