// src/app/chatbot/chatbot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private apiUrl = 'https://api.gemini.com/chat'; // Replace with the actual Gemini endpoint
  private apiKey = 'YOUR_GEMINI_API_KEY';  // Your API key or token

  constructor(private http: HttpClient) {}

  // Method to send a message to the Gemini chatbot
  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    });

    const body = {
      message: message,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
