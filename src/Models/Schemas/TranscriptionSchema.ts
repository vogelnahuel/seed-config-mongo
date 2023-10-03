import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TranscriptionDocument = HydratedDocument<Transcription>;

@Schema()
export class Transcription {
    @Prop()
    public audioFileName: string;

    @Prop()
    public transcript: string;

    @Prop({ type: Object })
    public timestamps: object;

    @Prop()
    public process: string;

    @Prop({ type: Object })
    public result: object;

    @Prop({ type: [Object] })
    public products: Record<string, any>[];

    @Prop()
    public uuid: string;
}

export const TranscriptionSchema = SchemaFactory.createForClass(Transcription);
