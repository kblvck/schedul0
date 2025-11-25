import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot() {
    return {
      message: 'welcome to schedul0',
      status: 'good',
      version: '1.1.1',
    };
  }
}
