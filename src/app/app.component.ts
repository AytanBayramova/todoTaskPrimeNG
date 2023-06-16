import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoAddEditComponent } from './todo-add-edit/todo-add-edit.component';
import { TodoService } from './service/todo.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from './core/core.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  displayedColumns: string[] = [

    'todo',
    'whattimeisit',
    'action',
    'addtask'
  ];
  dataSource!: MatTableDataSource<any>;

  dropdownOptions: any[] = [
    { label: 'edit', value: 'edit' },
    { label: 'delete', value: 'delete' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _todoService: TodoService,
    private _coreService: CoreService,
    private confirmService: NgConfirmService

  ) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  openAddEditTodoForm() {
    const dialogRef = this._dialog.open(TodoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTodoList();
        }
      },
    });
  }
  

  getTodoList() {
    this._todoService.getTaskList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }



  deleteTask(id:number): void {
    console.log('delete task', id);
    this.confirmService.showConfirm("Are you sure want to delete?",
      () => {
        console.log('Confirmed Delete:', id);
        this._todoService.deleteTask(id).subscribe(
          res => {
            console.log('Delete Response:', res);
          this._coreService.openSnackBar('Task deleted!', 'done');
          this.getTodoList();
        })
      },
      () => {
        alert("done")

      }
    )
  }


  onDropdownChange(event: any) {
    const selectedOption = event.target.value;
    if (selectedOption === 'edit') {
      this.openEditTodoForm(event);
    } else if (selectedOption === 'delete') {
      this.deleteTask(event);
    }
  }


  title: any;


  openEditTodoForm(data: any): void {
    const dialogRef = this._dialog.open(TodoAddEditComponent, {
      data:Option,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTodoList();
        }
      },
    });

  }
}
