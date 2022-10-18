import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScale]',
})
export class changeScaleDirective {
  @Input() defaultScale: string = '';
  @Input() changedScale: string = '1.04';

  @HostBinding('style.scale')
  scale: string = '';

  ngOnInit() {
    this.scale = this.defaultScale;
  }

  @HostListener('mouseenter') mouseover() {
    this.scale = this.changedScale;
  }

  @HostListener('mouseleave') mouseleave() {
    this.scale = this.defaultScale;
  }
}
