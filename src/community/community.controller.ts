/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { CreateCommunityDto } from 'src/community/dto/community.dto';
import { CommunityService } from './community.service';

@Controller('api')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) { }

  // @Post('community')
  // async registerUser(@Body() dto: UserDto) {
  //   return await this.userService.create(dto);

  // }

  @Post('community')
  async createCommunity(@Body() createCommunityDto: CreateCommunityDto) {
    return this.communityService.createCommunity(createCommunityDto);
  }
}
