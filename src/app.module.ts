import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//mongo
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
//graphql
import { GraphQLModule } from '@nestjs/graphql';
import { ClienteModule } from './clientes/cliente.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/clientes', { useNewUrlParser: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
