import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    define: {
        'process.env': {
            EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY,
            EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID,
        },
    },
});
