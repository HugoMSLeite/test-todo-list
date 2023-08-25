import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './components/table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TableComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    TableComponent,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
