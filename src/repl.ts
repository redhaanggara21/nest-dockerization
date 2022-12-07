import { repl } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import CreatePostDto from './posts/dto/createPost.dto';
import User from './users/user.entity';
import PostsService from './posts/posts.service';

async function bootstrap() {
  const replServer = await repl(AppModule);
  replServer.context.getUserByEmail = (userEmail: string) => {
    const usersService: UsersService = replServer.context.get(UsersService);
    return usersService.getByEmail(userEmail);
  };
  replServer.context.createPost = (post: CreatePostDto, user: User) => {
    const postsService: PostsService = replServer.context.get(PostsService);
    return postsService.createPost(post, user);
  };
}
bootstrap();
