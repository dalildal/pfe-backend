import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthService } from "src/auth/services/authService";
import { Notification } from '../models/notifications.model';


@Injectable()
export class NotificationService {
    constructor(
        @InjectModel('Notification')
        private readonly notificationModel: Model<Notification>,
        private authService: AuthService
    ) { }

    async createNotification(idUser: string,idProduct: string, state: string, title: string,description: string) {
        const newNotification = new this.notificationModel({
            idUser,
            idProduct,
            state,
            title,
            description,
        });
        const result = await newNotification.save();
        return result.id as string;
    }

    async getNotificationsByIdUser(idUser : string) {
        const notifications = await this.findAllNotifications();
        notifications.filter(notifications => notifications.idUser = idUser)
        return notifications;
    }

    private async findAllNotifications() {
        return this.notificationModel.find().exec();
    }
}