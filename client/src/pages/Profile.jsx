import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useRef } from 'react'
import {app} from '../firebase.js'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'

export default function Profile() {

  const {currentUser} = useSelector(state=>state.user)
  const fileRef = useRef(null)
  const [file,setFile] =useState(undefined);
  const [filePerc,setFilePerc] = useState(0);
  const [fileUploadError,setFileUploadError] = useState(false);
  const[formData,setFormData] = useState({});
  console.log(formData);

  useEffect(()=>{
    if(file){
      handleUpload(file);
    }
  },[file])
  
  const handleUpload = (file) =>{
     const storage = getStorage(app);
     const fileName = new Date().getTime() + file.name;
     const storageRef = ref(storage,fileName);
     const uploadTask = uploadBytesResumable(storageRef,file);

     uploadTask.on('state_changed',
        (snapshot)=>{
          const progress = (snapshot.bytesTransferred /
          snapshot.totalBytes) * 100;
          setFilePerc(Math.round(progress));
        },
     (error)=>{
      setFileUploadError(true)
     },
     ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then
      // eslint-disable-next-line no-unexpected-multiline
      ((downloadUrl) => setFormData({...formData,avatar:downloadUrl}))
     }
     );  
    }
   


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Profile</h1>
      <form className='flex flex-col gap-4' >
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='images/*'/>
        <img onClick={()=>fileRef.current.click()} className='rounded-full w-24 h-24 object-cover self-center' src={formData.avatar || currentUser.avatar} alt="avatar" />
        <p className='text-sm self-center'>
          {
          fileUploadError ? (
          <span className='text-red-700'>Error Image upload</span> )
          : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>
              {`uploading ${filePerc}%`}
            </span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>
              Image updated successfully
            </span>
          ) : ""
        }
        </p>
        <input type="text" placeholder='username' id='username' 
        className='border p-3 rounded-lg' />
         <input type="email" placeholder='email' id='email' 
        className='border p-3 rounded-lg' />
         <input type="password" placeholder='password' id='password' 
        className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white 
          p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700'>Delete account?</span>
        <span className='text-red-700'>Sign out?</span>
      </div>
    </div>
  )
}
