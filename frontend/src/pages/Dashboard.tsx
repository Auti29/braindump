import { Plusicon } from '../components/icons/Plusicon'
import { Shareicon } from '../components/icons/Shareicon'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
const BE_URL = import.meta.env.VITE_BE_URL;



export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const contents = useContent(modalOpen, refreshFlag);
  const [filterType, setFilterType] = useState<string>("All Contents");

  const handleDelete= async (id: string) => {
    const contentId = id;
    const response = await axios.delete(`${BE_URL}/api/v1/content/${contentId}`, {
      headers:{
            Authorization: localStorage.getItem("token")
        }
    });

    alert(response.data);
    setRefreshFlag(true);
    }

  return (
    <div className=''>
      <Sidebar onClick={(text) => {
        setFilterType(text);
      }} />
    <div className='p-5 min-h-screen bg-gray-200 ml-72'>
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
    <div className='flex justify-between w-full'>
        <div className='flex items-center font-bold text-2xl ml-2.5 text-gray-600 '>
          <h1>{filterType}</h1>
        </div>
      <div className='flex'>
      <div className='m-2'>
      <Button startIcon={<Plusicon size="md"/>} size ="md" variant= "primary" text="Add Content" onClick={() => setModalOpen(true)}/>
      </div>
      <div className='m-2 cursor-pointer'>
      <Button 
      onClick={async() => {
        const response = await axios.post(`${BE_URL}/api/v1/share`, {
          share: true
        }, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });

        const shareUrl = `http://localhost:5173/share/${response.data.hash}`;

        alert(`brain url: ${shareUrl}`);

      }}
      startIcon={<Shareicon size="md"/>} size="md" variant= "secondary" text="Share Brain"/>
      </div>
      </div>
    </div>

    {/* cards */}
    <div className='flex flex-wrap gap-5 mt-1.5 justify-start'>
      {
      (filterType === "All Contents") ?
        contents.map(({_id, type, link,  title}, i) => {
            return (
              <div key={i}>
              <Card id={_id} onDelete={handleDelete} type ={type} title={title} link={link}/>
              </div>
            )
        }) : 
        
        contents.map(({_id, type, link,  title}, i) => { 
          if(filterType === "Tweets" && type === "twitter"){
            return (
              <div key={i}>
              <Card id={_id} onDelete={handleDelete} type ={type} title={title} link={link}/>
              </div>
            )
          }
          if(filterType === "Videos" && type === "youtube"){
            return (
              <div key={i}>
              <Card id={_id} onDelete={handleDelete} type ={type} title={title} link={link}/>
              </div>
            )
          }
        })


      }
      </div>
    </div>
    </div>
  )
}

