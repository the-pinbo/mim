import React from 'react'
import { useState } from 'react';
function DownloadTorrent() {
  
  const [jsonData, setJsonData] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setJsonData(event.target.value);
  }
  const handleButtonClick = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('http://localhost:3030/torrents', {
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors',
      body: jsonData,
      redirect: 'follow'
    })
      .then(response => {
        if (response.ok) {
          setMessage('Downloaded');
        } else {
          setMessage('Downloading...');
        }
      })
      .catch(error => {
        console.log('error', error);
        setMessage('Unable to Download. Server out of service');
      });
  }

  return (
    <div className="w-full py-16 px-4 text-white" id="downloadTorrent">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want to download the torrent file directly here?</h1>
        </div>
        <div className='my-4'>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className=" p-3 flex w-full rounded-md text-black" placeholder="Enter URL" value={jsonData} onChange={handleInputChange} />
            <button onClick={handleButtonClick} className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">DOWNLOAD</button>
          </div>
          <span className="text-xl text-[#00df9a]">{message && <p>{message}</p>}</span>
          

        </div>

      </div>


    </div>

  )
}

export default DownloadTorrent
