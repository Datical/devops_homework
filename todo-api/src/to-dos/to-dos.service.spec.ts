import { Test, TestingModule } from '@nestjs/testing';
import { ToDosService } from './to-dos.service';

describe('ToDosService', () => {
  let service: ToDosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDosService],
    }).compile();

    service = module.get<ToDosService>(ToDosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
