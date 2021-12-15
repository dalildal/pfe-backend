import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { UserService } from 'src/users/services/userService';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { User } from 'src/users/models/user.interface';
import { UploadService } from '../services/upload.service';
import { Observable, of } from 'rxjs';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

export const storageProfile = {
  storage: diskStorage({
    destination: './uploads/profil-images',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })

}

export const storageProduct = {
  storage: diskStorage({
    destination: './uploads/product-images',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })

}


@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) { }


  @UseGuards(JwtAuthGuard)
  @Post('profil-images')
  @UseInterceptors(FileInterceptor('file', storageProfile))
  uploadFile(@UploadedFile() file, @Body() userId: any): Observable<Object> {

    let filePath = file.filename;

    this.uploadService.uploadProfilImages(filePath, userId.userId);
    return of({ imagePath: file.path })
  }

  @UseGuards(JwtAuthGuard)
  @Post('product-images')
  @UseInterceptors(FileInterceptor('file', storageProduct))
  uploadFileProduct(@UploadedFile() file, @Body() userId: any): Observable<Object> {
    console.log(file.filename);
    let filePath = file.filename;
    console.log(filePath);
    console.log(userId.userId);
    this.uploadService.uploadProductImages(filePath, userId.userId);
    return of({ imagePath: file.path })
  }



}
