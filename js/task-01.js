const categoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории.`);

const categoryRef = document.querySelectorAll("li.item");
categoryRef.forEach(category => console.log('Категория:', category.firstElementChild.textContent, 'Количество элементов:', category.lastElementChild.children.length));