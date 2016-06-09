import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnActivate {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) {
  }

  routerOnActivate(curr: RouteSegment): void {
    console.log(+curr.getParam('id'));
    let id = +curr.getParam('id');
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}