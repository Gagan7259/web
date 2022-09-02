const items = [
  { name: 'bike', price: 5000 },
  { name: 'mobile', price: 1623 },
  { name: 'headphone', price: 250 },
  { name: 'iphone 13', price: 1000 },
]

const finditems = items.find((item) => {
  return item.name === 'mobile'
})
console.log(finditems)
console.log(items)
const hasInexpensiveitems = items.some((items) => {
return items.price<=5000
})
console.log(hasInexpensiveitems);
