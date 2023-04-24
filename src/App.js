import './App.scss'
import { useState } from 'react';
import FlexContainer from './components/FlexContainer'
import FlexOptions from './components/FlexOptions';
import Header from './components/Header'

function App() {
  const parentProperties = {
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    alignContent: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']
  }

  const defaultParentValues = () => {
    let defaultClasses = {}
    for(let prop in parentProperties) {
      defaultClasses[prop] = parentProperties[prop][0]
    }
    console.log('defautl func firing')
    return defaultClasses
  }

  const [parentValues, setParentValues] = useState(defaultParentValues())


  const onUpdateProperty = (e) => {
    setParentValues({...parentValues, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Header />
      <FlexOptions onUpdateProperty={onUpdateProperty} parentProperties={parentProperties} />
      <FlexContainer parentValues={parentValues}/>
    </>
  );
}

export default App;
