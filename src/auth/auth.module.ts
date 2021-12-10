import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService} from "@nestjs/config";
import { AuthService } from "./services/authService";
import { jwtConstants } from "./constants/constants";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Module({
    imports:[ JwtModule.registerAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory: async(configService:ConfigService) => ({
            secret: jwtConstants.secret,
            signOptions:{expiresIn:'10000s'}
        })
       
      }),],
    providers:[AuthService, JwtStrategy,JwtAuthGuard],
    exports:[AuthService],

})
export class AuthModule{}