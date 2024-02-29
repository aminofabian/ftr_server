/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CommunityController],
  providers: [CommunityService, PrismaService]
})
export class CommunityModule { }
