import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
 
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  AbstractControl,
  Validators,
} from "@angular/forms";




@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
public contactForm: FormGroup ;
  
  public get email(): AbstractControl | null {
    return this.contactForm.get("email");
  }

  public get reason(): AbstractControl | null {
    return this.contactForm.get("reason");
  }

  public get description(): AbstractControl | null {
    return this.contactForm.get("description");
  }

  @Output() formSubmit = new EventEmitter<{
    email: string;
    reason: string;
    description: string;
  }>();

  constructor() {
    this.contactForm = this._buildForm();
  };
 
  public onSubmit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      console.log(
        "VALID! ContactUs form submit", 
      this.contactForm.value
      );
      this.formSubmit.emit(this.contactForm.value);
    };
    
  }
  

  private _buildForm(): FormGroup {
    return new FormGroup(
      {
      email: new FormControl("", [Validators.required, Validators.email]),
      reason: new FormControl("", [Validators.required]),
      descripion: new FormControl("", [Validators.required]),
    });

    
  }
  
  
}
