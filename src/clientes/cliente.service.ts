import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cliente } from './cliente.interface';
import { ClienteInput } from './cliente.input';

@Injectable()
export class ClienteService {
  constructor(@InjectModel('Cliente') private readonly clienteModel: Model<Cliente>) {
  }

  async create(input: ClienteInput): Promise<Cliente> {
    const createdCliente = new this.clienteModel(input);
    return await createdCliente.save();
  }

  async findAllOrLimit(limit?: number): Promise<Cliente[]> {
    return await this.clienteModel.find({}).limit(limit);
  }

  async find(id: string): Promise<Cliente> {
    return await this.clienteModel.findById({ _id: id }).exec();
  }

  async update(id: string, input: ClienteInput): Promise<Cliente> {
    return await this.clienteModel.findByIdAndUpdate(id, input);
  }

  async delete(id: string): Promise<string> {

    try {
      await this.clienteModel.findByIdAndRemove(id).exec();
      return 'Eliminado Correctamente';

    } catch (err) {
      return 'The todo could not be deleted' + err;
    }
  }
}
