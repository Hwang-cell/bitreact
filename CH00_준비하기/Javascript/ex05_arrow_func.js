/**
 * 
 * 화살표 함수 
 * 
 */

// map()과 ()=>{}
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
let newArr = materials.map((e, idx)=>{
  return e.length * 2;
});
console.log(newArr);

// 회문

let palindromes = [
  '스위스',
  '필리핀',
  '인도인' 
]
const contents = palinoromes.filter((str)=>{
  if(str===str.split('').reverse('').join('')){
    return str;
  }
})