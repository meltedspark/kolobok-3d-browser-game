import {Kolobok} from './kolobok';
import {Action} from '@ngrx/store';

const initialKolobokState: Kolobok = {
  position: {x: 0, y: 1, z: 0},
  velocity: {x: 0, y: 0, z: 1},
  diameter: 2
};

export function kolobok(state: Kolobok = initialKolobokState , action: Action) {
 switch (action.type) {
   default:
     return state;
 }
}
