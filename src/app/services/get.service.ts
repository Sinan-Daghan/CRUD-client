import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Project {
  id: number;
  reference: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetService {
  private origin = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  readData() {
    const url = `${this.origin}/read`; // Adjust the URL to match your API endpoint
    return this.http.get(url);
  }
}