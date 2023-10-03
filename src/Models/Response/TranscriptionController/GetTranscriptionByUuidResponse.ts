import { Transcription } from 'src/Models/Schemas/TranscriptionSchema';

export default class GetTranscriptionByUuidResponse {
    uuid: string;

    audioFileName: string;

    process: string;

    transcript: string;

    timestamps: object;

    result: object;

    products: Array<object>;

    constructor(transcription: Transcription) {
        this.uuid = transcription.uuid;
        this.audioFileName = transcription.audioFileName;
        this.process = transcription.process;
        this.transcript = transcription.transcript;
        this.timestamps = transcription.timestamps;
        this.result = transcription.result;
        this.products = transcription.products;
    }
}
