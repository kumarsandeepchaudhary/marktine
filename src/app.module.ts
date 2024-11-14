import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConsumptionModule } from './consumption/consumption.module';

@Module({
  imports: [DatabaseModule,UserModule, ConsumptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
