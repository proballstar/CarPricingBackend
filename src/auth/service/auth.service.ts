import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user.entity';
@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) public repo: Repository<UserEntity>) {}

    async create(email: string, password: string) {
        let user = await this.repo.create({email, password})

        return this.repo.save(user)
    }

    async findOne(id: number) {
        let user = await this.repo.findOne(id)
        return user
    }

    async find(email: string) {
        let users = await this.repo.find({email})
        return users
    }

    async update(id: number, attrs: Partial<UserEntity>) {
        let user = await this.findOne(id)
        if(!user) {
            throw new Error('User not found')
        }

        Object.assign(user, attrs)
        return this.repo.save(user)
    }

    async remove() {

    }
}
