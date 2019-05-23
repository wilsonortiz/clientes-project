import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClienteResolver } from './cliente.resolver';
import { ClientesSchema } from '../schemas/cliente.schema';
import { ClienteService } from './cliente.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cliente', schema: ClientesSchema }])],
  controllers: [],
  providers: [ClienteResolver, ClienteService],
})
export class ClienteModule {
}
