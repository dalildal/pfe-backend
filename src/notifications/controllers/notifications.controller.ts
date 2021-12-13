import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { NotificationService } from "../services/notifications.service";


@Controller('notifications')
export class NotificationController {

    constructor(private readonly notificationsService: NotificationService){

    }


    @Post()
    async createNotification(
        @Body('idUser') prodIdUser: string,
        @Body('idProduct') prodIdProduct: string,
        @Body('state') prodState: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        
        
    ) {
        const generatedId = await this.notificationsService.createNotification(
            prodIdUser,
            prodIdProduct,
            prodState,
            prodTitle,
            prodDesc,
        );
        return { id: generatedId };
    }
    @Get(':idUser')
    getCategory(@Param('idUser') idNot: string) {
        return this.notificationsService.getNotificationsByIdUser(idNot);
    }
}