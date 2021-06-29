import {MAX_STARS} from './const';

export const getStars = (rating) => (rating / MAX_STARS) * 100;
