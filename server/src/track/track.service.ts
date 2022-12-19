import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Track, TrackDocument} from "./schemas/track.schema";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {Model, ObjectId} from "mongoose";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Injectable()
export class TrackService {

    // Создание объекта для использования модели внутри service
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0})
        return track
    }

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.find()
        return tracks
    }

    async getOne(id: ObjectId): Promise<Track> {
        // .populate('comments') - с подробным описанием поля comments
        const track = await this.trackModel.findById(id).populate('comments')
        return track
    }

    async delete(id: ObjectId): Promise<Track> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        // Находим трек
        const track = await this.trackModel.findById(dto.trackId)
        // Создаем комментарий
        const comment = await this.commentModel.create({...dto})
        // Добавляем комментарий к треку
        track.comments.push(comment._id)
        // Сохраняем изменения
        await track.save()

        return comment
    }
}