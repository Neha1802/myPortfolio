import {
    trigger,
    transition,
    style,
    animate,
    query,
} from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
    transition('* => *', [
        query(':enter', [
            style({opacity: 0, scale: 0.9 }),
        ], { optional: true }),
        query(':leave', [
            animate(
                '0.3s',
                style({opacity: 0,  scale: 0.9  })
            ),
        ],
            { optional: true }),
        query(':enter', [
            animate(
                '0.3s',
                style({ opacity: 1,  scale: 1 })
            ),
        ], { optional: true })
    ])
])