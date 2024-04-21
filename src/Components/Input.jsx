import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import myContext from '../Contexts/MyContext'
import { useContext } from 'react'
import * as Yup from 'yup';
import { CiSearch } from "react-icons/ci";
import Card from './Card'
const Input = () => {
    const {data, content,setContent} = useContext(myContext);
    // const [content, setContent] = useState(data);
    console.log(content)
  return (
    <>
    <div>
        <Formik initialValues={{searchTxt:''}} validationSchema={Yup.object().shape({searchTxt:Yup.string().required('Required')})} onSubmit={(values)=>{
            const filteredData = values.searchTxt==''?data:data.filter(item=>item.title.toLowerCase().includes(values.searchTxt.toLowerCase()));
            setContent(filteredData);
        }}>
            {({errors})=>(

            <Form >
                <div className='flex justify-center'>

                <div className=' mt-5'>

                <div className='flex items-center gap-2'>

                <div className='w-96'>
                <CiSearch className='absolute left-[850px] w-8 h-8 top-7'/>
               <Field type='text' name='searchTxt' placeholder='Search' className='rounded-3xl border-gray-500 border-2 pl-3 text-lg w-full h-12'/>
                </div>
                
                <button type='submit' className='text-lg w-28 h-10 bg-purple-800 rounded-2xl text-center text-white'>Search</button>
                </div>
                {errors.searchTxt&&<p className='text-red-500 text-lg pl-3'>{errors.searchTxt}</p>}
                </div>
                </div>
            </Form>
            )
            }
        </Formik>
    </div>
        <div className='flex justify-evenly gap-5 mt-10 flex-wrap'>
            {content&&content.length>0?content.map((item)=>(<Card key={item.id} title={item.title} userId={item.userId} status={item.completed}/>)):(<p className='text-5xl text-red-500 text-center'>😔No data found</p>)}
        </div>
    </>
  )
}

export default Input