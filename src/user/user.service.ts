import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { user_profile } from './UserProfile';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(user_profile)
        private readonly userRepository: Repository<user_profile>,
        private readonly httpService: HttpService
    ) { }

    public async getUser() {
        return this.userRepository.find();
    }

    public postUser(user) {
        return user;
    }

    public async getUserById(id) {
        return id;
    }

    public async deleteUserById(id) {
        return id;
    }

    public async testApi(): Promise<AxiosResponse<any[]>> {
        const res = await this.httpService.axiosRef.get('https://jsonplaceholder.typicode.com/todos');
        return res;
    }
}
