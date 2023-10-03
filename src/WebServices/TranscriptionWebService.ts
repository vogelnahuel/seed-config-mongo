import { Injectable } from '@nestjs/common';
import { AxiosWebServices } from './AxiosWebServices';
import AssignTranscriptionRequest from '../Models/Request/TranscriptionController/AssignTranscriptionRequest';

@Injectable()
export class TranscriptionWebService extends AxiosWebServices {
    async findTransaction(uuid: string): Promise<any> {
        const url = `${process.env.URL_CORE}/audio/${uuid}`;
        const headers = this.buildDefaultConfig();
        const config = this.buildAxiosRequestConfig({ ...headers });
        const response = await this.get(url, config);
        return response.data;
    }

    async assignTranscription(data: AssignTranscriptionRequest): Promise<any> {
        const url = `${process.env.URL_CORE}/audio/assign-transcription`;
        const headers = this.buildDefaultConfig();
        const config = this.buildAxiosRequestConfig({ ...headers });
        const response = await this.patch(url, data, config);
        return response.data;
    }

    async changeStatus(uuid: string, status: string): Promise<any> {
        const url = `${process.env.URL_CORE}/audio/change-status/${uuid}?status=${status}`;
        const headers = this.buildDefaultConfig();
        const config = this.buildAxiosRequestConfig({ ...headers });
        const response = await this.patch(url, {}, config);
        return response.data;
    }
}
