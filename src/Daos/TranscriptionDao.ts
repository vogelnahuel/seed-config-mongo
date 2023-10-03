import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transcription } from 'src/Models/Schemas/TranscriptionSchema';

@Injectable()
export class TranscriptionDao {
    constructor(@InjectModel(Transcription.name) private readonly _transcriptionModel: Model<Transcription>) {}

    async save(transcription: Transcription) {
        const newTranscription = new this._transcriptionModel(transcription);
        return newTranscription.save();
    }

    async findByUuid(uuid: string): Promise<any> {
        const transcription = await this._transcriptionModel.findOne({ uuid: uuid });
        return transcription;
    }
}
