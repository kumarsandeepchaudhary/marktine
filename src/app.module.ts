import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConsumptionModule } from './consumption/consumption.module';

@Module({
  imports: [UserModule, ConsumptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
