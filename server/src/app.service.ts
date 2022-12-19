import {Injectable} from "@nestjs/common";

// Service - Работа с логикой/БД/обработка запросов
@Injectable() // Позволяет использовать данный сервис
export class AppService {
    getUsers(): string {
        return 'Get users'
    }
}