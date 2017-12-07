import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[app-customDirective]'
})

export class HoverMe {
    constructor(private ele: ElementRef) { 
        
     }

     @HostListener('mouseenter') onmouseenter() {
        this.hiliteColor('green');
     }

     @HostListener('mouseleave') onmousleave() {
        this.hiliteColor('red');
     }

    hiliteColor(color) {
        this.ele.nativeElement.style.backgroundColor = color;
    }
}