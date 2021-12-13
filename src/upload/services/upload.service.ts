import { Injectable } from "@nestjs/common";
import { User } from "src/users/models/user.interface";
import { UserService } from "src/users/services/userService";
import { ProductsService } from "src/products/services/products.service";

@Injectable()
export class UploadService {



    constructor(
        private userService: UserService,
        private productService: ProductsService,
    ) {

    }


    uploadProductImages(filePath: any, productId: any) {
        return this.productService.addProductPic(filePath, productId);
    }
    uploadProfilImages(filePath: any, userId: any) {
        return this.userService.updateOneProfilPic(filePath, userId);
    }


}

