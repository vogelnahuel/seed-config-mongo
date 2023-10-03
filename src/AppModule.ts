import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { envFilePathConfiguration } from './Configs/EnvFilePathConfig';
import { nestEnvConfiguration } from './Configs/NestEnvConfig';
import { ApplicationModule } from './Modules/ApplicationModule';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [envFilePathConfiguration()],
            load: [nestEnvConfiguration],
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URL'),
            }),
        }),
        ApplicationModule,
    ],
})
export class AppModule {}
