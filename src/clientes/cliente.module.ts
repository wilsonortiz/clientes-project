import { Module } from '@nestjs/common';
import { ClienteResolver } from './cliente.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ClienteResolver],
})
export class ClienteModule {
}
