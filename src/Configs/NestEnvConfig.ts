export const envModelTransformer = (envs: any) => ({
    APP_NAME: envs.APP_NAME,
    PORT: Number(envs.PORT) || 33006,
    MONGO_URL: envs.MONGO_URL,
});

export const nestEnvConfiguration = () => envModelTransformer(process.env);
