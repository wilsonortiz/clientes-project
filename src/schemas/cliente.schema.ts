import * as mongoose from 'mongoose';

export const ClientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  fechaNac: Date,
  tipo: String,
  emails: Array,
  pedidos: Array,
});
