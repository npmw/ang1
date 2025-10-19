import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';



@NgModule({
  declarations: [
    CardComponent,
    HighlightDirective,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
