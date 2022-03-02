import React, {useState} from 'react'
import {db} from '../config.js'

function FileSubmit () {
  // const [fileUrl, setFileUrl] = useState(null)

  // const onFileChange = async (e) => {
  //   const file = e.target.files[0]
  //   const storageRef= db.storage().ref()
  //   const fileRef = storageRef.child(file.name)
  //   await fileRef.put(file)
  //  setFileUrl(await fileRef.getDownloadURL())
  // }
    return (
      <>
      <div>
        <form>
          <input type='file' />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default FileSubmit