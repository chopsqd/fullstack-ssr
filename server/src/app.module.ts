import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://admin:12345@cluster0.f6mplrp.mongodb.net/music?retryWrites=true&w=majority')
    ]
})
export class AppModule {

}