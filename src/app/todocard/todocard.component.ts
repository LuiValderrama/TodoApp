import { Component, OnInit} from '@angular/core';



interface Task{
  done: boolean,
  tittle: string
}


@Component({
  selector: 'app-todo-card',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodoCardComponent implements OnInit {

  title = 'Mis tareas';

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  editing:boolean=false;

  constructor() {

  }

  ngOnInit(): void {
    this.tasks.push({tittle: "Tarea predeterminado no hecha", done: false});
    this.tasks.push({tittle: "Tarea predeterminado hecha", done: true});

  }

  ngOnDestroy() {


  }

  addTask() {
    this.tasks.push({tittle: this.inputTask, done: false});

  }

  deleteTask(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if(index !== -1){
      this.tasks.splice(index, 1);
    }
    console.log('Eliminando  ${task}')
  }


//Prueba



}
