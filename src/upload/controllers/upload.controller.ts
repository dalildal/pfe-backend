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
        destination: './uploads/profileimages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

export const storageProduct = {
    storage: diskStorage({
        destination: './uploads/productimages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}


@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('profilePic')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file', storageProfile))
  uploadFile(@UploadedFile() file,@Body() userId:string): Observable<Object>{
    console.log(file.filename);
    let filePath = './uploads/profileimages'+file.path;
    this.uploadService.upload(filePath,userId);
    return of({imagePath: file.path})
  }

  @Post('productPic')
  @UseInterceptors(FileInterceptor('file', storageProduct))
  uploadFileProduct(@UploadedFile() file,@Body() userId:string): Observable<Object>{
    
    return of({imagePath: file.path})
  }

 
  
}
