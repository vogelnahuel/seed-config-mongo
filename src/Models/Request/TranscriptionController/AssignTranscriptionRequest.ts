import { IsNotEmpty, IsString } from 'class-validator';

export default class AssignTranscriptionRequest {
    @IsNotEmpty()
    @IsString()
    audioFileName: string;
}
