import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NotificationController } from "./controllers/notifications.controller";
import { NotificationSchema } from "./models/notifications.model";
import { NotificationService } from "./services/notifications.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Notification', schema: NotificationSchema }])],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService]
})


export class NotificationModule {


}