import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  let name = "Rafsan";
  const people = ['Mr. X', 'Mr. Y', 'Mr. Z']
  const products = [
    { name: 'photoshop', price: '$99' },
    { name: 'photography', price: '$79' },
    { name: 'developer', price: '$199' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <h1>My Heading: {name} and {1 + 2}</h1>
        <p>My First React Paragraph</p>
        {/* <Person></Person> calling component */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Person name="Rafsan" food = "fuska"></Person>  calling component */}
        <p>list of Products</p>
        {
          products.map(pt => <Product name={pt.name} price={pt.price}></Product>)
        }
        <ul>
          {
            people.map(p => <li>{p}</li>)
          }
        </ul>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '50%',
    width: '20%',
    float: 'left'
  }

  return (
    <div style={productStyle}>
      <h4>Name: {props.name}</h4>
      <h5>Price: {props.price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

//* Creating a Component
// function Person(props) {
//   const customStyle = {
//     border: '2px solid white',
//     color: 'orange'
//   }
//   return <h1 style={customStyle}>{props.name} and {props.food}</h1>;
// }

//* One Should use div when Returning more than one, since 'return' can only return one.
// function Person1() {
//   return (
//     <div style={{ border: '2px solid red', padding: '10px' }}>
//       <p>Hello</p>
//       <p>User</p>
//     </div>
//   );
// }
export default App;