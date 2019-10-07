import {
    trigger, animateChild, group,
    transition, animate, style, query, state
} from '@angular/animations';
import { Injectable } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


// Routable animations
export const slideInAnimation =
    trigger('routeAnimation', [
        transition('resource <=> generator', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                animate('400ms ease-out', style({ left: '100%'}))
                ]),
                query(':enter', [
                animate('400ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);

// FactManager animations
export const openPanelAnimation =
  trigger('openPanelAnimation', [
    state('open', style({
      height: '100%',
      opacity: 1,
    })),
    state('closed', style({
      height: '0',
      opacity: 0,
    })),
    transition('open => closed', [
      animate('0s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ])

//---------------------------------------------------------- /Ontology Class Animations
  @Injectable({
    providedIn: 'root'
  })
  export class OntologyClassAnimation {
    // slide animaiton
    public isSlide: string = 'close';
    public static slideTrigger = trigger('openSlideAnimationLR',
    [
      state('open', style({
        width: '300px',
        opacity: 1,
      })),
      state('close', style({
        width: '0',
        opacity: 0,
      })),
      transition('* => open', [
        animate('0.3s ease-in', style({
          width: '300px',
          opacity: 1,
        }))
      ]),
      transition('* => close', [
        animate('0s ease-in', style({
          width: '0',
          opacity: 0,
        }))
      ]),
    ]);

    // visible animation
    public isPVisible: string = 'false';
    public static visibleTrigger = trigger('openVisibleAnimation',
    [
      state('true', style({
        opacity: 1
      })),
      state('false', style({
        opacity: 0,
      })),
      transition('* => true', [
        animate('0.3s ease-in', style({
          opacity: 1,
        }))
      ]),
      transition('* => false', [
        animate('0s ease-in', style({
          opacity: 0,
        }))
      ]),
    ]);
  }
  //---------------------------------------------------------- /Ontology Class Animations