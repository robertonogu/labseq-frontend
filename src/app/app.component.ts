import { Component } from '@angular/core';
import { LabSeqService } from './services/labseq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private service: LabSeqService) { }

  value: number = 0;
  invalid: boolean = true;
  message = "";

  ngOnInit(): void {

  }

  getValueFromSequence(input: string): void {
    var index = Number.parseInt(input);

    if (index < 0) {
      this.invalid = true;
      this.message = "The index must be a non-negative number.";
      this.value = 0;
    }
    else {
      this.service.getValueFromSequence(index).subscribe({
        next: (value: number) => {
          this.value = value; 
          this.message = "The value was calculated with success."
          this.invalid = false;
        },
        error: (error: string) => {
          this.message = error; 
          this.invalid = true;
        }
      });
    }
  }
  
}
