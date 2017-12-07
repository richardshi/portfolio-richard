import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {trigger, animate, style, state, group, animateChild, query, stagger, transition} from '@angular/animations';

import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    /*
    trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
  
    ]),
    */
    trigger('myAwesomeAnimation', [
      transition('* <=> *', [
        /* order */
        /* 1 */ 
        query(':enter, :leave', style({ position: 'absolute', width:'100%', height:'100%' })
          , { optional: true }),
        /* 2 */ 
        group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1s ease-in-out', style({ transform: 'translateX(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)' }),
            animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
        ])
      ])
    ]),

    trigger('crazyAnimation',[
      
      transition('* => left', [
        /* order */
        /* 1 */ 
        query(':enter, :leave', style({ position: 'absolute', width:'100%', height:'100%' })
          , { optional: true }),
        /* 2 */ 
        group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateX(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)' ,'transform-origin':'100% 50%', 'backface-visibility': 'hidden'}),
            animate('0s', style({'opacity':'0.5'})),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateX(-100%) rotateY(-90deg)' }))
          ], { optional: true }),
        ])
      ]),
      transition('* => right', [
        /* order */
        /* 1 */ 
        query(':enter, :leave', style({ position: 'absolute', width:'100%', height:'100%' })
          , { optional: true }),
        /* 2 */ 
        group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateX(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)' , 'transform-origin':'0 50%', 'backface-visibility': 'hidden'}),
            animate('0s', style({'opacity':'0.5'})),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateX(100%) rotateY(90deg)'}))
          ], { optional: true }),
        ])
      ]),
      transition('* => top', [
        /* order */
        /* 1 */ 
        query(':enter, :leave', style({ position: 'absolute', width:'100%', height:'100%' })
          , { optional: true }),
        /* 2 */ 
        group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateY(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0)', 'transform-origin':'50% 100%', 'backface-visibility': 'hidden' }),
            animate('0s', style({'opacity':'0.5'})),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateY(-100%) rotateX(90deg)' }))
          ], { optional: true }),
        ])
      ]),
      transition('* => bottom', [
        /* order */
        /* 1 */ 
        query(':enter, :leave', style({ position: 'absolute', width:'100%', height:'100%' })
          , { optional: true }),
        /* 2 */ 
        group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateY(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0)', 'transform-origin':'50% 0%', 'backface-visibility': 'hidden' }),
            animate('0s', style({'opacity':'0.5'})),
            animate('.85s cubic-bezier(.6, 0, .2, 1)', style({ transform: 'translateY(100%) rotateX(-90deg)' }))
          ], { optional: true }),
        ])
      ])
    ])

    

  ]
})

export class AppComponent {
  title = 'app';
  pageState = '';
  navigationShow = {};
  
  links = {
    "/home":{
      left: "work",
      right: "work",
      top: "contact",
      bottom: "contact"
    },
    "/work":{
      left: "home",
      right: "home",
      top: "crazy-idea",
      bottom: "crazy-idea"
    },
    "/contact":{
      top: "home",
      bottom: "home",
      left: "crazy-idea",
      right: "crazy-idea"
    },
    "/crazy-idea":{
      top: "work",
      bottom: "work",
      left: "contact",
      right: "contact"
    },
  };

/*
  constructor(private _router: Router ) {
    //this.router = _router;
    _router.events.subscribe((url:any) => console.log(url));
    console.log(_router.url);  // to print only path eg:"/login"
  }
*/

constructor(private _router: ActivatedRoute,
  private activeRoute:ActivatedRoute,
  private router: Router,
  private location: Location
){ 
  /*
  console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  console.log(location.path());
  console.log(activeRoute.component);
  */
  router.events.subscribe((val) => {
    // see also 
    if(val instanceof NavigationEnd) {
      console.log("NavigationEnd");
      this.navigationShow = this.links[this.router.url];
    }

  });
}
  
  
  
  getRouteAnimation(outlet) {
    console.log(outlet.activatedRouteData.state);

    return outlet.activatedRouteData.state;
  }
  
  goLeft(){
    var currentState = this.getCurrentState(this.router.url);
    this.router.navigate([currentState.left]);
    this.pageState = 'left';
  }
  goRight(){
    var currentState = this.getCurrentState(this.router.url);
    this.router.navigate([currentState.right]);
    this.pageState = 'right';
  }
  goTop(){
    var currentState = this.getCurrentState(this.router.url);
    this.router.navigate([currentState.top]);
    this.pageState = 'top';
  }
  goBottom(){
    var currentState = this.getCurrentState(this.router.url);
    this.router.navigate([currentState.bottom]);
    this.pageState = 'bottom';
  }

  getCurrentState(path){
    return this.links[path];
  }
  resetNavigationShow(path){
    this.navigationShow = this.getCurrentState(path);
  }
  setPageStatusToDefault = function(){
    this.pageState = 'default';
  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    let currentURL:string = this.router.url;
    this.pageState = 'default';
    this.resetNavigationShow(this.location.path());
     
    //console.log(this.router);
    console.log(currentURL);
    //this._router.navigate(link);
    console.log('Routes: ', JSON.stringify(this.router.config, undefined, 2));
    console.log(this.location.path());
    console.log(this.activeRoute.component);
  }

}
