import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appResponsiveDirective]',
  standalone: true
})
export class ResponsiveDirectiveDirective {

  constructor(private breakpointObserver: BreakpointObserver,
    private element: ElementRef
  ) { 

    this.breakpointObserver.observe([
      '(max-width: 740px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.setClass('mobile');
        console.log("Mobile screen detected (<= 740px)");
      } else {
        this.setClass('desktop');
        console.log("Screen wider than 740px");
      }
    });
  }

  private setClass(screenType: string) {
    const element = this.element.nativeElement;
    element.classList.remove('mobile', 'desktop');
    element.classList.add(screenType);
  }
}
