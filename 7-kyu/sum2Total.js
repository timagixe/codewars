/*

- TITLE:
sum2total

- DESCRIPTION:
Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\     
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /

if total([1,2,3]) => 8 then

first+second => 3 \
                   then 3+5 => 8
second+third => 5 /

Examples
total([-1,-1,-1]) => -4
total([1,2,3,4])  => 20

- LABELS:
#LOGIC #MATHEMATICS #ARRAYS #LISTS #FUNDAMENTALS

*/

function total(nums) {
  if (nums.length === 1) return nums[0];
  const nextNums = nums.reduce((next, curr, index) => {
    const value = nums[index + 1];
    if (value !== undefined) next.push(curr + value);
    return next;
  }, []);
  return total(nextNums);
}
