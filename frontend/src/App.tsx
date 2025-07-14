import './App.css'
import { Plusicon } from './components/icons/Plusicon'
import { Shareicon } from './components/icons/Shareicon'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'

function App() {
  return (
    <div className='p-3'>
    <div className='flex justify-end'>
      <div className='m-2'>
      <Button startIcon={<Plusicon size="md"/>} size ="md" variant= "primary" text="Add Content"/>
      </div>
      <div className='m-2'>
      <Button startIcon={<Shareicon size="md"/>} size="md" variant= "secondary" text="Share Brain"/>
      </div>
    </div>

    {/* cards */}
    <div className='flex flex-wrap gap-4 mt-3'>
      <Card type ="twitter" title='twitter' link='https://twitter.com/username/status/807811447862468608'/>

      <Card type ="youtube" title='youtube' link='https://www.youtube.com/watch?v=bJs2xB_Inxw'/>
      </div>
    </div>
    // cards
  )
}

export default App
