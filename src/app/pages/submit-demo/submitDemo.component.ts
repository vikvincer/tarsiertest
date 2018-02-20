import { Component, OnInit , ViewChild , ElementRef, Output } from '@angular/core';
import { demoProfile } from '../../shared/models/demoProfile';
import { appValidatorService } from '../../shared/services/localValidator.service';
import { CountryList } from '../../shared/models/countryList';
import { Title } from '@angular/platform-browser';



@Component({
    selector: 'app-submit-demo',
    templateUrl: './submitDemo.component.html',
    styleUrls:['submitDemo.component.scss']
})
export class SubmitDemoComponent implements OnInit {
    demoProfile: demoProfile = new demoProfile();
    countryList:CountryList = new CountryList();
    isValid:boolean = false;
    submitted:boolean  = false;

    @Output() myAppAlert;
    appAlertMsgData:any=[];
    modalState:boolean = false;

    //Dom attribute manipulation
    @ViewChild('formDemoProfile') formDemoProfile:ElementRef;

    constructor(private _validatorService:appValidatorService,private _title:Title) { }
    
    ngOnInit() {
        this._title.setTitle('Releases');
        this.demoProfile.country = "";
     }
     onSubmit() {
        this.submitted = true;        
        if(this.validateField() === 0) {
            console.log('ready to submit')
            console.log(this.demoProfile);
            this.modalState = true;
            this.appAlertMsgData = {
                "status": "success",
                "data": {
                    "title": "Thanks for your submission.",
                    "msg": ["We can’t wait to listen to your demo!","If we’ve got any questions, we will contact you."]
                }
            };
            this.demoProfile = new demoProfile();
            this.submitted = false;
        }else {
            console.log('dont submit');
            // this.modalState = true;
            // this.appAlertMsgData = {
            //     "status": "failed",
            //     "data": {
            //         "title": "OOPS!",
            //         "msg": ["Something went wrong!","Please try again later."]
            //     }
            // };

        }
        return false;
     }
     getModalAction(event) {
        this.modalState = event.modalState;
     }
     keyupValidation(event) {
        var target = event.target.id;
        if(this.submitted === true) {
            if(this.demoProfile.isExclusive == 'NO') {
                if(target === 'artistLabel') {
                    this.isEmptyValidation(this.demoProfile.artistLabel,'artistLabel',false);
                }
            }else {
                this.demoProfile.artistLabel = null;
            }
            if(target === 'isExclusiveNo') {
                this.isEmptyValidation(this.demoProfile.isExclusive,'isExclusiveNo',true);
            }
            if(target === 'isExclusiveYes') {
                this.isEmptyValidation(this.demoProfile.isExclusive,'isExclusiveYes',true);
            }
            if(target === 'trackLink') {
                this.isEmptyValidation(this.demoProfile.trackLink,'trackLink',true);
            }
            if(target === 'genre') {
                this.isEmptyValidation(this.demoProfile.genre,'genre',true);
            }
            if(target === 'trackTitle') {
                this.isEmptyValidation(this.demoProfile.trackTitle,'trackTitle',true);
            }
            if(target === 'country') {
                this.isEmptyValidation(this.demoProfile.country,'country',true);
            }
            if(target === 'email') {
                this.emailValidation(true); 
            }           
            if(target === 'lName') {
                this.isEmptyValidation(this.demoProfile.lName,'lName',true);
            }                
            if(target === 'fName') {
                this.isEmptyValidation(this.demoProfile.fName,'fName',true);
            }            
            if(target === 'stageName') {
                this.isEmptyValidation(this.demoProfile.stageName,'stageName',true);
            }              
        }
     }
     //Validation
     validateField() {
        var result = true;
        var errorCount:number = 0;
        if(this.demoProfile.isExclusive == 'NO') {
            errorCount += this.isEmptyValidation(this.demoProfile.artistLabel,'artistLabel',false);
            console.log(this.demoProfile.artistLabel );
        }else {
            this.demoProfile.artistLabel = null;
            console.log(this.demoProfile.artistLabel );
        }
        errorCount += this.isEmptyValidation(this.demoProfile.isExclusive,'isExclusiveNo',false);
        errorCount += this.isEmptyValidation(this.demoProfile.isExclusive,'isExclusiveYes',false);
        errorCount += this.isEmptyValidation(this.demoProfile.trackLink,'trackLink',false);
        errorCount += this.isEmptyValidation(this.demoProfile.genre,'genre',false);
        errorCount += this.isEmptyValidation(this.demoProfile.trackTitle,'trackTitle',false);
        errorCount += this.isEmptyValidation(this.demoProfile.country,'country',false);
        errorCount += this.emailValidation(false); 
        errorCount += this.isEmptyValidation(this.demoProfile.lName,'lName',false);
        errorCount += this.isEmptyValidation(this.demoProfile.fName,'fName',false);
        errorCount += this.isEmptyValidation(this.demoProfile.stageName,'stageName',false);
        return errorCount;
     }
     //Return 1 if has error
     isEmptyValidation(data,elementId,isKeyup) {
        if(!data) {
            this.formDemoProfile.nativeElement.querySelector(`#${elementId}`).classList.add('input-error');
            if(!isKeyup) {
                this.formDemoProfile.nativeElement.querySelector(`#${elementId}`).focus();
            }
            return 1
         }else if(data.trim() === "") {
            this.formDemoProfile.nativeElement.querySelector(`#${elementId}`).classList.add('input-error');
            if(!isKeyup) {
                this.formDemoProfile.nativeElement.querySelector(`#${elementId}`).focus();
            }
            return 1
         }else {
            this.formDemoProfile.nativeElement.querySelector(`#${elementId}`).classList.remove('input-error');
            return 0;
         }
     }
     emailValidation(isKeyup) {
        var error:number = 0; 
        // if(this.demoProfile.email) {
        //     if(this.demoProfile.email.trim() !== "") {
        //         if(this._validatorService.isEmailValid(this.demoProfile.email) === false) {
        //             this.formDemoProfile.nativeElement.querySelector('#email').classList.add('input-error');
        //             if(isKeyup) {
        //                 this.formDemoProfile.nativeElement.querySelector('#email').focus();
        //             }
        //             error = 1;
        //         }else {
        //             this.formDemoProfile.nativeElement.querySelector('#email').classList.remove('input-error');
        //             error = 0;
        //         }
        //     }
        //     else {
        //         this.formDemoProfile.nativeElement.querySelector('#email').classList.remove('input-error');
        //         error = 0;
        //     }
        //  }
        //  if(this.demoProfile.email === "" || !this.demoProfile.email) {
        //     this.formDemoProfile.nativeElement.querySelector('#email').classList.add('input-error');
        //     if(!isKeyup) {
        //         this.formDemoProfile.nativeElement.querySelector('#email').focus();
        //     }
        //     error = 1;
        //  }

        if(this._validatorService.isEmailValid(this.demoProfile.email) === false) {
            this.formDemoProfile.nativeElement.querySelector('#email').classList.add('input-error');
            if(!isKeyup) {
                this.formDemoProfile.nativeElement.querySelector('#email').focus();
            }
            error = 1;
        }else {
            this.formDemoProfile.nativeElement.querySelector('#email').classList.remove('input-error');
            error = 0;
        }

         return error;
     }

}