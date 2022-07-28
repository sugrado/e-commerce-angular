import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private httpClient: HttpClient
  ) {
    const button = renderer.createElement('button');
    button.setAttribute('class', 'btn btn-link');
    renderer.appendChild(element.nativeElement, button);
  }
}
