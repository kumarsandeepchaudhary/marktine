import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getUser() {
        return this.userService.getUser();
    }

    @Post()
    public postUser(@Body() user: UserDto) {
        console.log(user);
        return this.userService.postUser(user);
    }

    @Get(':id')
    async getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: number) {
        return this.userService.deleteUserById(id);
    }

}
