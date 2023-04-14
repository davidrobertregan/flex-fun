import './App.scss'
import { useState } from 'react';
import FlexContainer from './components/FlexContainer'
import FlexOptions from './components/FlexOptions';
import Header from './components/Header'

function App() {
  const [parentClassesObj, setParentClassesObj] = useState({
    flexDirection: "flex-direction--row",
    justifyContent: "justify-content--flex-end",
    flexWrap: "flex-wrap--wrap",
    alignItems: "align-items--stretch",
    alignContent: "align-content--normal"
})

  return (
    <>
      <Header />
      <FlexOptions />
      <FlexContainer parentClassesObj={parentClassesObj}/>
    </>
  );
}

export default App;
