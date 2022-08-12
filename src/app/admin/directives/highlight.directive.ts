import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight:any;
  constructor(private el:ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.highlight("#f4f984");
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.highlight("#3a6cbf");
  }
  highlight(color:String){
    this.el.nativeElement.style.backgroundColor = color;
  } 
}
