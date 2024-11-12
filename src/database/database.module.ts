import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { user_profile } from 'src/user/UserProfile';
// import * as Entities from '../entities';

const models = [];
// for (const key in Entities) {
//   if (Entities.hasOwnProperty(key)) {
//     const entity = Entities[key];
//     models.push(entity);
//   }
// }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: 'impactis-db-user',//process.env.DB_USER,
      password: 'DBUser@2022!',//process.env.DB_PASSWORD,
      database: 'impactis',//process.env.DB_NAME,
      entities: [user_profile],
      synchronize: false,//process.env.DB_SYNC === 'true',
    }),
  ],
})

export class DatabaseModule { }
