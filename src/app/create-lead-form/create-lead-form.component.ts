import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Lead } from '../model/Lead';

@Component({
  selector: 'app-create-lead-form',
  templateUrl: './create-lead-form.component.html',
  styleUrls: ['./create-lead-form.component.css']
})
export class CreateLeadFormComponent {
  newLead: Lead = new Lead('', '', '', '', 0); // Initialize a new Lead object

  constructor(private http: HttpClient) {}

  submitForm() {
    // Assuming your Spring Boot API endpoint for adding a new lead is /api/leads
    this.http.post('/api/leads', this.newLead).subscribe(
      (response) => {
        console.log('Lead added successfully', response);
        // Optionally, you can reset the form or perform other actions
        this.newLead = new Lead('', '', '', '', 0); // Reset the form after submission
      },
      (error) => {
        console.error('Error adding lead', error);
      }
    );
  }
}
