import React from 'react';
import './App.css';

const App = () => {
  const [test, setTest] = React.useState(null);

  React.useEffect(() => {
    fetch('/products')
      .then((r) => r.json())
      .then((json) => setTest(json));
  }, []);

  console.log(test);

  return (
    <div>
      {test && test.map((t) => <img src={t.image} alt={t.sku} key={t.sku} />)}
    </div>
  );
};

export default App;
