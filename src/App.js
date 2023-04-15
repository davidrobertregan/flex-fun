import './App.scss'
import { useState } from 'react';
import FlexContainer from './components/FlexContainer'
import FlexOptions from './components/FlexOptions';
import Header from './components/Header'

function App() {
  const [parentClassesObj, setParentClassesObj] = useState({
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    alignItems: "stretch",
    alignContent: "normal"
})

  const onUpdateProperty = (e) => {
    setParentClassesObj({...parentClassesObj, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Header />
      <FlexOptions onUpdateProperty={onUpdateProperty} />
      <FlexContainer parentClassesObj={parentClassesObj}/>
    </>
  );
}

export default App;
