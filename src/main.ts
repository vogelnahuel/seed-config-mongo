import helmet from 'helmet';
import * as BodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './AppModule';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    app.use(helmet());

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({ extended: true }));
    app.setGlobalPrefix('api/v1/ms-config');
    app.enableCors();
    console.log(configService.get<string>('PORT'));
    await app.listen(configService.get<string>('PORT'));
}
bootstrap();
