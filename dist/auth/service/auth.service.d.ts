import { Repository } from 'typeorm';
import { UserEntity } from '../user.entity';
export declare class AuthService {
    repo: Repository<UserEntity>;
    constructor(repo: Repository<UserEntity>);
    create(email: string, password: string): Promise<UserEntity>;
    findOne(id: number): Promise<UserEntity>;
    find(email: string): Promise<UserEntity[]>;
    update(id: number, attrs: Partial<UserEntity>): Promise<UserEntity>;
    remove(): Promise<void>;
}
