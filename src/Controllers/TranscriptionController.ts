import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import Response from 'src/Helpers/Formatter/Response';
import AssignTranscriptionRequest from 'src/Models/Request/TranscriptionController/AssignTranscriptionRequest';
import SuccessfulResponse from 'src/Models/Response/SuccessfulResponse';
import { TrasncriptionService } from 'src/Services/TranscriptionService';

@Controller('transcription')
export class TranscriptionController {
    constructor(private readonly _transcriptionService: TrasncriptionService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTranscription(@Body() data: AssignTranscriptionRequest): Promise<Response<SuccessfulResponse>> {
        const response = await this._transcriptionService.createTranscription(data);
        return Response.create<SuccessfulResponse>(response);
    }

    @Patch('/change-status/:uuid')
    @HttpCode(HttpStatus.OK)
    async changeStatus(@Param('uuid') uuid: string, @Query('status') status: string): Promise<Response<SuccessfulResponse>> {
        const response = await this._transcriptionService.changeStatus(uuid, status);
        return Response.create<SuccessfulResponse>(response);
    }
}
