import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
                <div *ngIf='hero'>
                    <h2>{{hero.name}} Details!</h2>
                    <div>
                      <label>Id: </label>{{hero.id}}
                    </div>
                    <div>
                      <label>Name: </label>
                      <input [(ngModel)] = 'hero.name' />
                    </div>
                </div>
    `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}