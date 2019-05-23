import { Document } from 'mongoose';
import { Email } from '../types/clientes.type.email';

export interface Cliente extends Document {

  readonly nombre: string;
  readonly apellido: string;
  readonly empresa: string;
  readonly edad: number;
  readonly tipo: string;
  readonly emails: [Email];
  // readonly pedidos: Array;

}
