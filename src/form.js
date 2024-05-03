import './form.css'
import { db } from './indexdb';
import './repontsite.css'
import { useState,useEffect } from 'react';

function From (){
    const [id,setId]=useState(0)
    const [name, setName] = useState("");
    const[author,setAuthor]=useState("")
    const [date,setDate]=useState("")
    const[book,setBook]=useState([])

    
    useEffect(()=>{db.books.toArray().then(items=>setBook(items))},[])
    const clearForm =()=>{
        setName('')
        setAuthor("")
        setId(0)
        setDate('')
    }
    const save = (id, name,author,date) =>{
            if(id==0){
                db.books.add({name:name,author:author,date:date})
            }
            else{
                db.books.update(id,{name:name,author:author,date:date})
            }
            db.books.toArray().then(items=>setBook(items))
            clearForm();
            alert("Data Saved")
        }
    


    return(
        <>
        <form className='grid wide'>
            <div className='conten' >
                <div>SEACH</div>
                <div className='seach_div'>
                <div className='seach'><img className='search_img' src='https://th.bing.com/th/id/OIP.M5SZabOqMk1iyJ2OVSdlzAAAAA?rs=1&pid=ImgDetMain'/></div>
                <div className='search_input'><input className='input_seach' type='text'/></div>
                </div>
            </div>
            <div className='title'> A new books</div>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td><label>Title :</label></td>
                    <td> <input className='input_text' value={name} onChange={(e)=>setName(e.target.value)} type='text' /></td>
                </tr>
                <tr>
                    <td>   <label>Author :</label> </td>
                    <td><input className='input_text' value={author} onChange={(e)=>setAuthor(e.target.value)} type='text' /></td>
                </tr>
                <tr>
                    <td><label>Publication date :</label> </td>
                    <td>  <input className='input_text' value={date} onChange={(e)=>setDate(e.target.value)} type='date' /></td>
                </tr>
                <tr>
                   
                    <td className='add' colSpan={2}><button onClick={()=>save(id, name,author,date)}>Add</button></td>
                </tr>
           
             </tbody>
           
           </table>
           <div className='title'>A list of books</div>
            <table className='getdb' border={1} cellSpacing={0}>
                <thead>
                   
                    <tr>
                        <th className='id'>ID</th>
                        <th className='name'>Title</th>
                        <th className='author'>Author</th>
                        <th className='date'>Publication date </th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((item) =><tr><td>{item.id}</td><td>{item.name}</td><td>{item.author}</td><td>{item.date}</td></tr>)}
                </tbody>
            </table>

        </form>
        </>
    )
}
export default From;