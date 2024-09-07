import Grocery from './groceryApp/Grocery';

function App() {
  return (
    <Grocery
      products={[
        { name: "Oranges", votes: 0 },
        { name: "Bananas", votes: 0 },
      ]}
    />
  );
}

export default App;
