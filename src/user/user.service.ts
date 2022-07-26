import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return this.userRepository.find({
      relations:["articles"]
    })
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  async signup(createUserDto: CreateUserDto) {

    const createduser = await this.userRepository.create(createUserDto)

    return this.userRepository.save(createduser)
  }

  async signin(createUserDto: CreateUserDto){
    const {email} = createUserDto
    try{const user = await this.userRepository.findOneByOrFail({
      email
    })
    return user
  }catch(err){
    throw new NotFoundException("No such user")
  }
}
}