'use strict';

// write code here
function main() {
  const doc = document.documentElement;
  const list = doc.querySelector('ul');

  const children = Array.from(list.children);

  children.sort(sortFunc);

  for (const obj of children) {
    list.appendChild(obj);
  }
}

function sortFunc(a, b) {
  const aSal = formatSalary(a.dataset.salary);
  const bSal = formatSalary(b.dataset.salary);

  return bSal - aSal;
}

function formatSalary(salary) {
  const copy = salary.slice(1);

  return +copy.split(',').join('');
}

main();
