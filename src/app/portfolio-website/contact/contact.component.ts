import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  contactForm! : FormGroup;



  constructor(private fb: FormBuilder, private toastr: ToastrService, private route: ActivatedRoute){
    this.contactForm =  this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.toastr.success('Form submitted successfully.', 'Success', {closeButton: true, timeOut:2000});
      this.contactForm.reset();
    } else {
      this.toastr.error('Form is invalid', 'Error', {closeButton: true, timeOut:2000});
    }
  }
  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control?.invalid && (control.dirty || control.touched));
  }
}
