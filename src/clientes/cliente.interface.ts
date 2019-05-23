import { Document } from 'mongoose';
import { Email } from '../types/clientes.type.email';
import { Pedido } from '../types/clientes.type.pedidos';

export interface Cliente extends Document {

  readonly nombre: string;
  readonly apellido: string;
  readonly empresa: string;
  readonly fechaNac: string;
  readonly tipo: string;
  readonly emails: [Email];
  readonly pedidos: [Pedido];

}
