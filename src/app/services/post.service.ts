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
export class PostService {
  private origin = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(data: any) {
    const url = `${this.origin}/login`;
    return this.http.post(url, data);
  }

  createRow(project: Project) {
    const url = `${this.origin}/create`
    return this.http.post(url, project);
  }
  updateRow(project: Project) {
    const url = `${this.origin}/update`
    return this.http.post(url, project);
  }
  deleteRow(project: Project) {
    const url = `${this.origin}/delete`
    return this.http.post(url, project);
  }
}