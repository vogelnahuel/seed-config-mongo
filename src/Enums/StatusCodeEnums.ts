type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

enum StatusCodeEnums {
    TRANSCRIPTION_NOT_FOUND = 30000,

    PROGRESS_ALREADY_SAVED = 30010,
}

const StatusCodeExceptionText: EnumDictionary<StatusCodeEnums, string> = {
    [StatusCodeEnums.TRANSCRIPTION_NOT_FOUND]: 'TRANSCRIPTION_NOT_FOUND',
    [StatusCodeEnums.PROGRESS_ALREADY_SAVED]: 'PROGRESS_ALREADY_SAVED',
};

export { StatusCodeEnums, StatusCodeExceptionText };
