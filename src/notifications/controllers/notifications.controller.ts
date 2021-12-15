import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { NotificationService } from "../services/notifications.service";

@Controller('notifications')
export class NotificationController {

    constructor(private readonly notificationsService: NotificationService) {

    }

    @Post()
    async createNotification(
        @Body('idUser') notIdUser: string,
        @Body('idProduct') notIdProduct: string,
        @Body('state') notState: boolean,
        @Body('title') notTitle: string,
        @Body('description') notDesc: string,


    ) {
        const generatedId = await this.notificationsService.createNotification(
            notIdUser,
            notIdProduct,
            notState,
            notTitle,
            notDesc
        );
        return { id: generatedId };
    }

    @Patch(':id')
    async updateNotifStatus(
        @Param('id') notIdUser: string) {
        await this.notificationsService.updateState(notIdUser);
        return null;
    }

    @Get(':idUser')
    getCategory(@Param('idUser') idNot: string) {
        return this.notificationsService.getNotificationsByIdUser(idNot);
    }
}