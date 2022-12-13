import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepository } from './repository/todo.repository';
import { TodosearchService } from './service/todosearch.service';
import { TodosearchController } from './todosearch.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoRepository]),
    ElasticsearchModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            node: process.env.ELASTICSEARCH_NODE, // configService.get('ELASTICSEARCH_NODE'),
            auth: {
                username: process.env.ELASTICSEARCH_USERNAME, // configService.get('ELASTICSEARCH_USERNAME'),
                password: process.env.ELASTICSEARCH_PASSWORD // configService.get('ELASTICSEARCH_PASSWORD')
            }
        }),
        inject: [ConfigService]
    })
],
exports: [
    ElasticsearchModule
],
  controllers: [TodosearchController],
  providers: [TodosearchService]
})
export class TodosearchModule {}
