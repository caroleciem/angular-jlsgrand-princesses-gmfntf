import { Injectable } from '@angular/core';

@Injectable()
export class PrincessService {
  princesses = [
    {
      name: 'Cendrillon',
      year: 1950
    },
    {
      name: 'Blanche neige',
      year: 1937
    },
    {
      name: 'La belle au bois dormant',
      year: 1959
    }
  ];

  constructor() { }

}