import {Controller, Get} from "@nestjs/common";
import {AppService} from "./app.service";

// Controller - Работа с запросами
@Controller('/api')
export class AppController {

    constructor(private appService: AppService) {}

    @Get()
    getUsers() {
        return this.appService.getUsers()
    }
}