import numeral from 'numeral';
import './index.css';
/*eslint-disable no-console*/
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} form this course`); 
