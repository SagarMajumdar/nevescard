import { Directive ,ElementRef, Renderer2, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appSectionHider]'
})
export class SectionHiderDirective implements OnInit{
  @Input() isFeatureRequested :string[];
  @Input() currElem:string;

  constructor(private elref : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    if(this.isFeatureRequested !== undefined && 
      this.isFeatureRequested.length>0 &&
      this.isFeatureRequested.indexOf(this.currElem) === -1 ) {
         
          this.renderer.setStyle(this.elref.nativeElement, 'display' , 'none');
      }
    if(this.isFeatureRequested === undefined || 
      this.isFeatureRequested.length === 0) {
        this.renderer.setStyle(this.elref.nativeElement, 'display' , 'none');
      } 
  }

}
