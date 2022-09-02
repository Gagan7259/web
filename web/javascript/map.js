const items = [
  { name: 'bike', price: 5000 },
  { name: 'mobile', price: 1623 },
  { name: 'headphone', price: 250 },
  { name: 'iphone 13', price: 1000 },
]

const itemnames = items.map((item) => {
  return item.price
})

console.log(items)

console.log(itemnames)
