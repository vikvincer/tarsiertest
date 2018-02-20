import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { contactUsData } from '../../shared/models/contactUs';
import { appValidatorService } from '../../shared/services/localValidator.service';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-about-us',
    templateUrl: './about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {
    contactUsData:contactUsData = new contactUsData;
    isSubmitted:boolean = false;
    @ViewChild('formContactUs') formContactUs:ElementRef;
    constructor(private _validatorService:appValidatorService,private _title:Title) { }

    ngOnInit() {
        this._title.setTitle('About');
     }

    onSubmit() {
        this.isSubmitted = true;
        if(this.isSubmitted == true) {
           if(this.validateField() == 0) {
               alert('ready for submission');
               this.contactUsData = new contactUsData;
           } 
        }
        return false;
    }
    //Validation
    validateField() {
        var result = true;
        var errorCount:number = 0;
        errorCount += this.isEmptyValidation(this.contactUsData.message,'message',false);
        errorCount += this.isValidEmail(false);
        errorCount += this.isEmptyValidation(this.contactUsData.lName,'lName',false);
        errorCount += this.isEmptyValidation(this.contactUsData.fName,'fName',false);
        return errorCount;
     }
     keyupValidation(event) {
        var target = event.target.id;
        if(this.isSubmitted == true) {
            if(target === 'message') {
                this.isEmptyValidation(this.contactUsData.message,'message',true);
            }
            if(target === 'email') {
                this.isValidEmail(true);
            }
            if(target === 'lName') {
                this.isEmptyValidation(this.contactUsData.lName,'lName',true);
            }
            if(target === 'fName') {
                this.isEmptyValidation(this.contactUsData.fName,'fName',true);
            }
        }
    }

    isEmptyValidation(data,elementId,isKeyup) {
        if(!data) {
            this.formContactUs.nativeElement.querySelector(`#${elementId}`).classList.add('input-error');
            if(!isKeyup) {
                this.formContactUs.nativeElement.querySelector(`#${elementId}`).focus();
            }
            return 1
         }else if(data.trim() === "") {
            this.formContactUs.nativeElement.querySelector(`#${elementId}`).classList.add('input-error');
            if(!isKeyup) {
                this.formContactUs.nativeElement.querySelector(`#${elementId}`).focus();
            }
            return 1
         }else {
            this.formContactUs.nativeElement.querySelector(`#${elementId}`).classList.remove('input-error');
            return 0;
         }
     }
     isValidEmail(isKeyup) {
        var error:number = 0;
        if(this._validatorService.isEmailValid(this.contactUsData.email) === false) {
            this.formContactUs.nativeElement.querySelector('#email').classList.add('input-error');
            if(!isKeyup) {
                this.formContactUs.nativeElement.querySelector('#email').focus();
            }
            error = 1;
        }else {
            this.formContactUs.nativeElement.querySelector('#email').classList.remove('input-error');
            error = 0;
        }
         return error;         
     }


}