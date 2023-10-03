import { Injectable } from '@nestjs/common';
import { TranscriptionDao } from 'src/Daos/TranscriptionDao';
import AssignTranscriptionRequest from 'src/Models/Request/TranscriptionController/AssignTranscriptionRequest';
import SuccessfulResponse from 'src/Models/Response/SuccessfulResponse';
import { Transcription } from 'src/Models/Schemas/TranscriptionSchema';
import { TranscriptionWebService } from 'src/WebServices/TranscriptionWebService';

@Injectable()
export class TrasncriptionService {
    constructor(private readonly _transcriptionWebService: TranscriptionWebService, private readonly _transcriptionDao: TranscriptionDao) {}

    async createTranscription(data: AssignTranscriptionRequest): Promise<SuccessfulResponse> {
        const newTranscription = new Transcription();
        newTranscription.audioFileName = data.audioFileName;

        await this._transcriptionDao.save(newTranscription);
        return new SuccessfulResponse('Transcription created successfully!');
    }

    async changeStatus(uuid: string, status: string): Promise<SuccessfulResponse> {
        await this._transcriptionWebService.changeStatus(uuid, status);
        return new SuccessfulResponse('Transcription status changed successfully!');
    }
}
