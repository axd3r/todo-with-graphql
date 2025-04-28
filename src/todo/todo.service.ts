import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInputDTO } from './dto/create.todo.dto';
import { UpdateTodoInputDTO } from './dto/update.toto.dto';
import { StatusArgs } from './args/status.args';

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        {id: 1, description: 'Comprar Comida', done: false},
        {id: 2, description: 'Comprar Ropa', done: true},
        {id: 3, description: 'Comprar Jugetes', done: false}
    ];

    get completedTodos() {
        return this.todos.filter( todo => todo.done === true ).length;
    }

    get pendingTodos() {
        return this.todos.filter( todo => todo.done === false ).length;
    }
    
    get totalTodos() {
        return this.todos.length;
    }

    findAll(statusArgs: StatusArgs): Todo[] {
        const {status} = statusArgs;
        
        if(status !== undefined) return this.todos.filter(todo => todo.done === status);

        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find(todo => todo.id === id);
        if(!todo) throw new NotFoundException(`Todo whit id ${id} not found`);
        return todo
    }

    create(createTodoInputDTO: CreateTodoInputDTO): Todo {
        const todo = new Todo();
        todo.description = createTodoInputDTO.description;
        todo.id = Math.max(...this.todos.map( todo => todo.id), 0) + 1
        this.todos.push(todo);
        return todo;
    }

    update(updateTodoInputDTO: UpdateTodoInputDTO): Todo {
        const {id, description, done} = updateTodoInputDTO
        const findTodo = this.findOne(id);

        if(!findTodo) throw new NotFoundException(`Todo whit id ${id} not found`);
        if(description) findTodo.description = description;
        if(done !== undefined) findTodo.done = done;
        
        this.todos = this.todos.map( todo => {
            return (todo.id === id) ? findTodo : todo
        });

        return findTodo;
    }

    remove(id: number): Boolean {
        const todo = this.findOne(id);
        if(!todo) throw new NotFoundException(`Todo whit id ${id} not found`)
        this.todos = this.todos.filter(todo => todo.id !==id);

        return true
    }
}
