import { trigger, state, style, transition, animate } from '@angular/animations';

export const cardAnimation = [
    trigger('cardFlip', [
        state('default', style({
            transform: 'none',
        })),
        state('flipped', style({
            transform: 'perspective(600px) rotateY(180deg)'
        })),
        state('matched', style({
            visibility: 'false',
            transform: 'scale(0.05)',
            opacity: 0
        })),
        transition('default => flipped', [
            animate('400ms')
        ]),
        transition('flipped => default', [
            animate('400ms')
        ]),
        transition('* => matched', [
            animate('400ms')
        ])
    ])
]