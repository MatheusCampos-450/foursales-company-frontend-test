import { HttpClient } from './http-client';

export const http = new HttpClient(import.meta.env.VITE_BASE_URL || '');
