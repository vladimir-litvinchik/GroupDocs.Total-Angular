import {Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[gdRotation]'
})
export class RotationDirective implements OnInit, OnChanges {

  @Input() angle: number;
  @Input() isHtmlMode: boolean;
  @Input() isLandscape: boolean;

  @HostBinding('style.animation') animation: string;
  @HostBinding('style.transition-property') transition: string;
  @HostBinding('style.transform') transform: string;

  @HostBinding('style.margin') margin: string;

  constructor() { }

  private updateCursor() {
    if (this.angle) {
      this.animation = 'none';
      this.transition = 'none';
      this.transform = 'rotate(' + this.angle + 'deg)';
    } else if (this.angle == 0 && this.animation) {
      this.animation = null;
      this.transition = null;
      this.transform = null;
    }

    if (this.angle == 90 || this.angle == 270) {
      if (this.isHtmlMode) {
        if (this.isLandscape) {
          this.margin = '164px 254px';
        } else {
          this.margin = '-111px 254px';
        }
      } else {
        if (this.isLandscape) {
          this.margin = '129px 100px -79px';
        } else {
          this.margin = '-72px 100px -79px';
        }
      }
    } else {
      this.margin = null;
    }

  }

  ngOnInit(): void {
    this.updateCursor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCursor()
  }

}