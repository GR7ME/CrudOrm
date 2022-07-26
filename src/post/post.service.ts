import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Article } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Article) private postRepository:Repository<Article>){}
  async create(createPostDto: CreatePostDto) {
    const created = await this.postRepository.create(createPostDto)

    return await this.postRepository.save(created)
  }

  async findAll() {
    return await this.postRepository.find({
      relations:['user']
    })
  }

 async findOne(id: number) {
    const post = await this.postRepository.findOneBy({id})
    return post
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    // const post = await this.postRepository.findOneBy({id})
      const post = await this.postRepository.update(id,
        updatePostDto)

    return post;
  }

  async remove(id: number) {
    return await this.postRepository.delete(id)
  }
}
