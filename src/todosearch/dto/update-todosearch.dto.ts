import { PartialType } from '@nestjs/swagger';
import { CreateTodosearchDto } from './create-todosearch.dto';

export class UpdateTodosearchDto extends PartialType(CreateTodosearchDto) {}
