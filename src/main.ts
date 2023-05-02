import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Work planner api service')
    .setDescription('The swift plan - worker API description')
    .setVersion('1.0')
    .addTag('worker')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  const configService: ConfigService = app.get(ConfigService);

  const PORT: any = configService.get('PORT');
  await app.listen(PORT);
  console.log('listening on: ', PORT);
}
bootstrap();
