import { Test, TestingModule } from '@nestjs/testing';
import { TodosearchController } from './todosearch.controller';
import { TodosearchService } from './todosearch.service';

describe('TodosearchController', () => {
  let controller: TodosearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosearchController],
      providers: [TodosearchService],
    }).compile();

    controller = module.get<TodosearchController>(TodosearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
