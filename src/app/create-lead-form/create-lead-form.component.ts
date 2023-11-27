import { Component } from '@angular/core';
import { LeadService } from '../services/lead.service';
import { Lead } from '../model/Lead';

@Component({
  selector: 'app-create-lead-form',
  templateUrl: './create-lead-form.component.html',
  styleUrls: ['./create-lead-form.component.css']
})
export class CreateLeadFormComponent {
  newLead: Lead = new Lead('', '', '', '', 0);

  constructor(private leadService: LeadService) {}

  submitForm() {
    this.leadService.addLead(this.newLead).subscribe(
      (response) => {
        console.log('Lead added successfully', response);
        this.leadService.notifyLeadsUpdated(); // Notify subscribers about the updated leads
        this.newLead = new Lead('', '', '', '', 0);
      },
      (error) => {
        console.error('Error adding lead', error);
      }
    );
  }
}