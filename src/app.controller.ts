import { Controller, Get, UseGuards, Post, UsePipes, ValidationPipe, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { User } from './user/user.decorator';


@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/users')
  @UseGuards(new AuthGuard())

  
  showAllUsers(@User() user){
    console.log(user);
    return 'find all';
  }
  @Post('/login')
  @UseGuards(new AuthGuard())
  create(@Body() name: NamedCurve): string {
  //@UsePipes(new ValidationPipe())
  //login(@Body() data:UserDto){
    return 'this is dto'
  }
  @Post('/register',)
  register(){
    //return this.authGuard.validateToken.toString();
  }
}
