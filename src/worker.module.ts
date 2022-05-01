import { EkConfigService, SdkModule } from '@earnkeeper/ekp-sdk-nestjs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionModule } from './feature/collection/collection.module';
import { HistoryModule } from './feature/history/history.module';

export const MODULE_DEF = {
  imports: [
    MongooseModule.forRootAsync({ useClass: EkConfigService }),
    CollectionModule,
    HistoryModule,
    SdkModule,
  ],
};

@Module(MODULE_DEF)
export class WorkerModule {}
