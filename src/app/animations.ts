import {trigger, state, style, transition, animate} from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
  state('default', style({
    'background-color': 'orange',
    width: '100px',
    height: '100px'
  })),
  state('clicked', style({
    'background-color': 'cornflowerblue',
    width: '300px',
    height: '50px'
  })),
  state('mousedown', style({
    'background-color': 'tomato',
    border: '1px solid #333',
    width: '100px',
    height: '100px'
  })),
  transition('default => clicked', animate('1s 500ms ease-in')),
  // transition('clicked => default', animate('300ms ease-out'))
  transition('clicked => default', animate(300)),
  transition('mousedown <=> clicked', animate(300)),
  // transition('clicked => mousedown', animate(300)),
]);

export const numberEnteredStateTrigger = trigger('numberEnteredState', [
    state('unselected', style({
      border: '1px solid #333',
      padding: '5px',
      'background-color': '#fff'
    })),
    state('selected', style({
      border: '2px solid cornflowerblue',
      padding: '4px',
      'background-color': '#cad9e2',
      // 'box-shadow': 'cornflowerblue 0 0 0 2px inset'
    })),
    // transition('unselected => selected', animate(300))
    transition('unselected => selected', [
      style({
        border: '2px solid #333',
        padding: '4px'
      }),
      animate('600ms 100ms ease-out', style({
        'background-color': 'tomato',
        transform: 'scale(1.2)'
      })),
      animate(300)
    ])
  ]);
