import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class appValidatorService {

    isEmailValid(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    isValidUrl(url) {
        function ValidURL(str) {
            var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
              '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
              '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
              '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
              '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
              '(\#[-a-z\d_]*)?$','i'); // fragment locater
            if(!pattern.test(str)) {
              return false;
            } else {
              return true;
            }
          }
    }

}
