import './App.css'
import { Plusicon } from './components/icons/Plusicon'
import { Shareicon } from './components/icons/Shareicon'
import { Button } from './components/ui/Button'

function App() {
  return (
    <>
      <Button startIcon={<Shareicon size="md"/>} size="md" variant= "secondary" text="Share Brain"/>
      <Button startIcon={<Plusicon size="md"/>} size ="md" variant= "primary" text="Add Content"/>
    </>
  )
}

export default App
