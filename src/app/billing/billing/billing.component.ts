import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: false,
  // imports: [],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent implements OnInit {
  ngOnInit(): void {
    console.log('Method not implemented.');
    
  }
  onSubmit() {
    alert('Billing details submitted successfully!');
  }

}
