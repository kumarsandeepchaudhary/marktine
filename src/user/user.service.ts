import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    public async getUser(){
        return {'name':'sandeep', 'city':'delhi'};
    }

    public postUser(user){
        return user;
    }

    public async getUserById(id){
        return id;
    }

    public async deleteUserById(id){
        return id;
    }
}
