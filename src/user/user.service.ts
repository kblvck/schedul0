import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private users = [
    {
      id: 1,
      username: 'admin',
      password: 'password123',
    },
  ];

  async validateUser(username: string, password: string) {
    const user = this.users.find((u) => u.username === username);
    if (!user) return null;
    if (user.password !== password) return null;
    const { password: _, ...result } = user;
    return result;
  }
}

