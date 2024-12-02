import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    define: {
        'process.env': {
            EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
            EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        },
    },
});
