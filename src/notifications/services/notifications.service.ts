import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Notification } from '../models/notifications.model';


@Injectable()
export class NotificationService {
    constructor(
        @InjectModel('Notification')
        private readonly notificationModel: Model<Notification>,

    ) { }

    async createNotification(idUser: string, idProduct: string, state: boolean, title: string, description: string) {
        const newNotification = new this.notificationModel({
            idUser,
            idProduct,
            state,
            title,
            description
        });
        const result = await newNotification.save();
        return result.id as string;
    }

    async getNotificationsByIdUser(idUser: string) {
        const notifications = await this.findAllNotifications();
        notifications.filter(notifications => notifications.idUser = idUser)
        console.log(notifications);
        return notifications;
    }

    async updateState(idNotif: string, idUser: string) {
        const notifsUser = await this.getNotificationsByIdUser(idUser);
        notifsUser.forEach(
            notif => notif.state = true
        )
        notifsUser.forEach(
            notif => notif.save()
        )
    }

    private async findAllNotifications() {
        return this.notificationModel.find().exec();
    }

}