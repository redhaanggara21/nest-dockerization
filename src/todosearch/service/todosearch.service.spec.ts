import { Test, TestingModule } from '@nestjs/testing';
import { TodosearchService } from './todosearch.service';

describe('TodosearchService', () => {
  let service: TodosearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosearchService],
    }).compile();

    service = module.get<TodosearchService>(TodosearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
