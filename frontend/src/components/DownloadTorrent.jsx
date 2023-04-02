import React from 'react'
function DownloadTorrent() {
  function handleClick() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var jsonData = String(document.getElementById('input-field').value);
    console.log(typeof jsonData);

    fetch('http://localhost:3030/torrents', {
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors',
      body: jsonData,
      redirect: 'follow'
    }).then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
    var myHeaders = new Headers();
  }

  return (
    <div className="w-full py-16 px-4 text-white" id="downloadTorrent">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want to download the torrent file directly here?</h1>
        </div>
        <div className='my-4'>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className=" p-3 flex w-full rounded-md text-black" placeholder="Enter URL" id="input-field" />
            <button onClick={() => handleClick()} className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">DOWNLOAD</button>
          </div>
          <p>Enter URL or .torrent files or magnet links to <span className="text-[#00df9a]">Download</span></p>
        </div>

      </div>


    </div>

  )
}

export default DownloadTorrent
