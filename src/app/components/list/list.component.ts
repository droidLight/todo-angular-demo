import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoService } from 'src/app/services/todoservices/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit{

  authorName: string = "";
  noteIds: string[] = [];
  noteCount:number=0;

  constructor(private router: ActivatedRoute,
    private todoServices: TodoService,
    private cd:ChangeDetectorRef) {}

  ngOnInit(): void {
    let name = this.router.snapshot.paramMap.get("name");
    this.authorName = (name === null) ? "" : name;
    this.noteIds = this.todoServices.getNoteIds(this.authorName);
    this.noteCount = this.noteIds.length;
  }
  

}
