import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { Param } from '@nestjs/common';
import { CreateTodoInputDTO } from './dto/create.todo.dto';
import { UpdateTodoInputDTO } from './dto/update.toto.dto';
import { StatusArgs } from './args/status.args';
import { AggregationsType } from './types/aggregations.type';

@Resolver()
export class TodoResolver {
    
    constructor(
        private readonly todoService: TodoService
    ){}
    @Query(() => [Todo], {name: 'todos'})
    findAll(@Args() statusArgs: StatusArgs): Todo[] {
        return this.todoService.findAll(statusArgs);
    }

    @Query( () => Todo, { name: 'todo' })
    findOne(
        @Args('id', {type: () => Int}) id: number ){
        return this.todoService.findOne(+id);
    }

    @Mutation(() => Todo, {name: 'createTodo'})
    createTodo(
        @Args('createTodoInputDTO') createTodoInputDTO: CreateTodoInputDTO
    ) {

        return this.todoService.create(createTodoInputDTO)
    }

    @Mutation(() => Todo, {name: 'updateTodo'})
    updateTodo(
        @Args('updateTodoInputDTO') updateTodoInputDTO: UpdateTodoInputDTO
    ) {
        return this.todoService.update(updateTodoInputDTO)
    }

    @Mutation(() => Boolean, {name: 'deleteTodo'})
    deleteTodo(@Args('id', {type: () => Int}) id:number) {
        return this.todoService.remove(id);
    }

    @Query( () => Int, {name: 'completedTodos'})
    completedTodos() {
        return this.todoService.completedTodos;
    }

    @Query( () => Int, {name: 'pendingTodos'})
    pendingTodos() {
        return this.todoService.pendingTodos;
    }

    @Query( () => AggregationsType)
    aggregations() : AggregationsType {
        return {
            completed: this.todoService.completedTodos,
            pending: this.todoService.pendingTodos,
            total: this.todoService.totalTodos,
            totals: this.todoService.totalTodos
        }
    }
}
