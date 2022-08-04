import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if(!process.env.IS_TS_NODE){
  require('module-alias/register')
};


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  await app.listen(process.env.PORT || 'https://message-full-stack.herokuapp.com/');
}
bootstrap();
