import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//graphql
import { GraphQLModule } from '@nestjs/graphql';
import { ClienteService } from './service/clienteService';
import { ClienteModule } from './clientes/cliente.module';

@Module({
  imports: [
    ClienteModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ClienteService],
})
export class AppModule {
}
