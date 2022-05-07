import { config } from '@earnkeeper/ekp-sdk';
import { SdkModule } from '@earnkeeper/ekp-sdk-nestjs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionModule } from './feature/collection/collection.module';
import { HistoryModule } from './feature/history/history.module';

export const MODULE_DEF = {
  imports: [
    MongooseModule.forRoot(
      config('MONGO_URI', {
        default: 'mongodb://localhost:27017/splinterlands',
      }),
    ),
    CollectionModule,
    HistoryModule,
    SdkModule,
  ],
};

@Module(MODULE_DEF)
export class WorkerModule {}
