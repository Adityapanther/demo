const appConfig = {
    PORT: process.env.PORT || 5001,
    GEMINI_API_KEY : process.env.GEMINI_API_KEY || '',
    SAM_API_KEY: process.env.SAM_API_KEY || '',
}

export default appConfig;