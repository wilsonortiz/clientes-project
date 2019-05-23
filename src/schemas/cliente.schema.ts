import * as mongoose from 'mongoose';

export const ClientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  edad: Number,
  tipo: String,
  emails: Array,
});
