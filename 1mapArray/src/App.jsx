const products = [
  {
    title: "Cabbage",
    isFruit: false,
    id: 1
  },
  {
    title: "Garlic",
    isFruit: false,
    id: 2
  },
  {
    title: "Banana",
    isFruit: true,
    id: 3
  },
  {
    title: "Apple",
    isFruit: true,
    id: 4
  },
];

function App() {

  // i want to create an array of list 
  const list = products.map(function (product) {
    return (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? "red" : "green"
        }}
      >
        {product.title}
      </li>
    )
  })

  return (
    <ul>{list}</ul>
  )
}

export default App
