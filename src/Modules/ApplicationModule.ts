import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { importAllFromRequireContext } from 'src/Helpers/Utils/RequireContext';
import { schemas } from 'src/Models/Schemas/SchemasIndex';

@Module({
    imports: [MongooseModule.forFeature(schemas)],
    providers: [
        ...importAllFromRequireContext(require.context('../Services/', true)),
        ...importAllFromRequireContext(require.context('../WebServices/', true)),
        ...importAllFromRequireContext(require.context('../Daos/', true)),
    ],
    controllers: importAllFromRequireContext(require.context('../Controllers/', true)),
    exports: [],
})
export class ApplicationModule {}
