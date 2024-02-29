/* eslint-disable prettier/prettier */
// community.service.ts
import { CreateCommunityDto } from 'src/community/dto/community.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConflictException, Injectable } from '@nestjs/common';


@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) { }

  async createCommunity(createCommunityDto: CreateCommunityDto) {
    const community = await this.prisma.community.findUnique({
      where: {
        id: createCommunityDto.name,
      },
    });

    if (community) {
      throw new ConflictException('Community name already exists');
    }

    const newCommunity = await this.prisma.community.create({
      data: {
        ...createCommunityDto,
        description: '', // Added missing required property
      },
    });

    return newCommunity;
  }
}




