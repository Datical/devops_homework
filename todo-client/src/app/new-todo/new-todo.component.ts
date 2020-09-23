import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../core/api.service';
import { FormControl } from '@angular/forms';
import { ToDoDtoModel } from '../core/models/to-do-dto.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  public description = new FormControl('');

  constructor(private dialogRef: MatDialogRef<NewTodoComponent>,
              private api: ApiService) { }

  ngOnInit() {
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public onSubmit() {
    const nextToDo: ToDoDtoModel = {
      description: this.description.value
    };
    this.api.addToDo(nextToDo).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
