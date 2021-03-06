import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config'

/*
  Generated class for the ResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ResultsProvider {
  
    //Strongloop API Explorer's request URL
  baseUrl: string = URL;
  path: string = "/TestTaken";
  
  constructor(public http: Http) {
    console.log('Hello ResultsProvider Provider');
  }
  
  
  //Retrieve test results with access token
  getTestResults(token, userId){
    return this.http.get(this.baseUrl + this.path + 
      `?filter[where][userId]=${ userId }` +
      `&access_token=${ token }`
    );
  }

  //Save a new test result to the backend
  saveTest(token, testResult){
    return this.http.post(this.baseUrl + this.path + 
      '?access_token=' + token, 
      testResult
    );
  }

  //Delete a test result according to id
  deleteTest(testId){
    return this.http.delete(this.baseUrl + this.path + 
      '/' + 
      testId
    );
  }


}
