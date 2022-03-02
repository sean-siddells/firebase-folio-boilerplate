import React from 'react'
import {storage, auth} from '../config.js'
import { ref, uploadBytes } from 'firebase/storage'

function FileSubmit () {

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = ref(storage, file.name)
    uploadBytes(storageRef, file)
      .then ((snapshot) => {
      console.log('Uploaded a file!', snapshot)
    }).catch((error) => {
      console.log('Failed to upload', error)
    })
  }
    return (
      <>
      <div className='upload-container'>
        <form>
          <input type='file' onChange={onFileChange} />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default FileSubmit