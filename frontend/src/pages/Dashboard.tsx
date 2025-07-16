import { Plusicon } from '../components/icons/Plusicon'
import { Shareicon } from '../components/icons/Shareicon'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
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
    <div className='flex flex-wrap gap-5 mt-3 justify-start'>
      {contents.map(({type, link,  title}) => {
          return (
            <Card type ={type} title={title} link={link}/>
          )
      })}
      </div>
    </div>
    </div>
  )
}
