'use client'
import { StartPage } from './frontend/Pages/start'
import {GoalPage} from './frontend/Pages/goal'
import { ConnectToTerraButton } from '@tryterra/terra-ui'

import axios from 'axios'

 function Home() {
  return (
    <div>
      <StartPage />
      <GoalPage />
    </div>
    
  );
}

export default Home;

/*
    <div className="flex flex-col items-center h-screen justify-center bg-white">
      <ConnectToTerraButton onClick={async () => {
        const url = (await axios.get("http://localhost:3000/api/generateWidgetSession")).data.url 
        window.location = url
      }} />
    </div>
*/