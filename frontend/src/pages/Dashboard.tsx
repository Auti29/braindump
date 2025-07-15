import { Plusicon } from '../components/icons/Plusicon'
import { Shareicon } from '../components/icons/Shareicon'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className=''>
      <Sidebar />
    <div className='p-5 min-h-screen bg-gray-200 ml-72'>
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
    <div className='flex justify-end w-full'>
      <div className='m-2'>
      <Button startIcon={<Plusicon size="md"/>} size ="md" variant= "primary" text="Add Content" onClick={() => setModalOpen(true)}/>
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
    </div>
  )
}
