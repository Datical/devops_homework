import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ReloadListService } from './core/reload-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialogController: MatDialog,
              private reload: ReloadListService) {}

  public onAddItem() {
    const dialogRef = this.dialogController.open(NewTodoComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.reload.trigger();
    });
  }
}
