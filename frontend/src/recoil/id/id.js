import { atom } from 'recoil';

export const idState = atom({
    key: 'id',
    default: {
        id: null,
        password: null,
    },
});
