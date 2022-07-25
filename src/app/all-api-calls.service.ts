import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllApiCallsService {

  constructor(private http: HttpClient) { }

  uploadAllFile(value:any , folder:any , subfolder:any){
    const formData = new FormData()
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      formData.append("files",element);
    }
      // let headers = new HttpHeaders({
      //   'Content-Type': 'multipart/form-data',
      // });
      console.log(folder , subfolder);
      
      let url = `https://localhost:44323/api/bucket/upload?folder=jldf&subfolder=${subfolder}`
      return this.http.post<any>(url,formData)
  }
}
