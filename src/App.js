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

  const [parentValues, setParentValues] = useState(() => { /* duplicate parentProperties object with value being first item in array */
    let initialValues = {}
    for(let prop in parentProperties) {
      initialValues[prop] = parentProperties[prop][0]
    }
    return initialValues
  })

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
