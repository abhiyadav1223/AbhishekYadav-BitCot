import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "./store/userData"
export default function EditContact(){
  const [usdata ,setData ] = useState()
  var namebox = useRef()
  var emailbox = useRef()
  var phonebox = useRef()
  var addbox = useRef()
  const newdata = useSelector(state => state.data.value)
  const idInsert = useSelector(state => state.data.userId)
  const dispatch = useDispatch()
  var update = (event) => {
    var ob = {
      id: idInsert,
      name: namebox.current.value,
      mobile: phonebox.current.value,
      email: emailbox.current.value,
      address: addbox.current.value,
    }
    console.log(ob);
    dispatch(updateUser(ob))
    event.preventDefault()  
  }
  var reset = (e) => {
    e.preventDefault()
  }
    return <>
    <div className=" border-2 border-black inline-block text-center w-80 mx-20">
      <div className="font-bold text-2xl">
        <h1>Edit Contact</h1>
      </div>
      <hr />
      <form>
        <div className="space-y-2 my-5">
            <div>
            <label >User Email :</label>
            {newdata.filter(uid => uid.id == idInsert).map(val=><input placeholder={val.email} disabled className="mx-5"/>)}
          </div>
          <div>
            <label >Name :</label>
            <input type="text" ref={namebox} onChange={()=>setData()} placeholder="Enter Your Name" className="border-2 rounded border-black mx-5" />
          </div>
          <div>
            <label className="mx-1">Email:</label>
            <input type="text" ref={emailbox} placeholder="Enter Your Email" className="border-2 rounded border-black mx-3" />
          </div>
          <div >
            <label>Phone :</label>
            <input type="text" ref={phonebox} placeholder="Enter Your Phone" className="border-2 rounded border-black mx-5" />
          </div>
          <div >
            <label>Address :</label>
            <input type="text" ref={addbox} placeholder="Enter Your Address" className="border-2 rounded border-black mx-5" />
          </div>
        </div>
        <div className="my-2">
          <button onClick={update} className="bg-blue-700 text-white font-bold rounded px-2 py-1 mx-2">Update</button>
          <button onClick={reset} className="bg-black text-white font-bold rounded px-2 py-1 mx-2">Reset</button>
        </div>
      </form>
    </div>
  </>
  } 