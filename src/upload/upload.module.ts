import { Module } from '@nestjs/common';


import { UploadController } from './controllers/upload.controller';

import { UserModule } from 'src/users/user.module';

import { UploadService } from './services/upload.service';

@Module({
  imports: [UserModule],
  controllers: [UploadController],
  providers: [UploadService],
})


export class UploadModule {


}