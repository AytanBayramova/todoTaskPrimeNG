import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TodoAddEditComponent } from './todo-add-edit/todo-add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgConfirmModule} from 'ng-confirm-box';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MatMenuModule } from '@angular/material/menu';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddEditComponent,
    ConfirmDialogComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    NgConfirmModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    MatMenuModule,
    InputTextModule,
    StyleClassModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
