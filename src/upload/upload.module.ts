import { Module } from '@nestjs/common';


import { UploadController } from './controllers/upload.controller';

import { UserModule } from 'src/users/user.module';

import { UploadService } from './services/upload.service';
import { AuthModule } from 'src/auth/auth.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [UserModule, ProductsModule, AuthModule],
  controllers: [UploadController],
  providers: [UploadService],
})


export class UploadModule {


}