import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
    getHello(): string {
        return 'Hello World!';
    }
}