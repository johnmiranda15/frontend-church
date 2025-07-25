import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() url: string = '';

  isFlipped: boolean = false;

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }
  
}
