
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthenticationGuard } from "src/guards/jwt-authentication.guard";
import { GetUser } from "src/users/decorators/get-user.decorator";
import User from "src/users/user.entity";
import { CreateTodosearchDto } from "./dto/create-todosearch.dto";
import { TodoDto } from "./dto/todo.dto";
import { UpdateTodosearchDto } from "./dto/update-todosearch.dto";
import { Todo } from "./entities/todosearch.entity";
import { TodoPayload } from "./interface/todo-payload.interface";
import { TodoService } from "./service/todo.service";
import { TodosearchService } from "./service/todosearch.service";


@ApiTags('Todo')
// @ApiBearerAuth()
@Controller('todo')
// @UseGuards(JwtAuthenticationGuard)

@Controller('todosearch')
export class TodosearchController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodo(
      @GetUser() user: User,
  ): Promise<TodoPayload[]> {
      return this.todoService.getAllTodo(user);
  }

  @Get('/search-todo')
  searchTodo(
      @GetUser() user: User,
      @Query('search') search: string
  ): any[] | Promise<any> {
      if (search) {
          return this.todoService.searchForTodos(search, user);
      }
      return [];
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTodo(
      @Body() todoDto: TodoDto,
      @GetUser() user: User
  ): Promise<TodoPayload> {
      return this.todoService.createTodo(todoDto, user)
  }

  @Get('/:id')
  getTodoById(
      @Param('id', ParseIntPipe) id: number,
      @GetUser() user: User
  ): Promise<Todo> {
      return this.todoService.getTodoById(id, user)
  }

  @Patch('/:id')
  updateTodoById(
      @Param('id', ParseIntPipe) id: number,
      @Body() todoDto: TodoDto,
      @GetUser() user: User
  ): Promise<TodoPayload>{
      return this.todoService.updateTodoById(id, todoDto, user)
  }

  @Delete('/:id')
  deleteTodoById(
      @Param('id', ParseIntPipe) id: number,
      @GetUser() user: User
  ): Promise<{ message: string }>{
      return this.todoService.deleteTodoById(id, user)
  }
}
