import { Link, Route, Routes } from "react-router-dom";
import ShowContact from "./ShowContact";
import EditContact from "./EditContact";
import AddContact from "./addContact";
import { useDispatch, useSelector } from "react-redux";
import { addVal, findName, removeUser } from "./store/userData";
export default function App() {
  var data = useSelector(state => state.data.value)
  var dispatch = useDispatch()
  var rmvUser = useDispatch()
  var findData = useDispatch()

  var find = (e)=>{
    findData(findName(e.target.value))
  }
  return <>
    <div className="bg-black text-white  mx-20 my-20">
      <div className="flex mx-14 space-x-10 py-3 text-3xl">
        <h2 className="px-2 py-1">All Contact</h2>
        <Link to="/add"><button className="text-blue-400 bg-blue-900 px-2 py-1 rounded font-bold ">Add</button></Link>
      </div>

      <div className="text-center">
        <input type="text" placeholder="Search" onChange={find} className="rounded text-black text-center px-3 py-1 my-3" />
      </div>
      <div className="relative overflow-x-auto font-bold">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-white uppercase bg-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
              
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
         {data.map((val) =>   <tr className="bg-black border-b ">
              <th scope="row" className="px-6 py-4 font-bold text-white whitespace-nowrap">
              {val.id}
              </th>
              <td className="px-6 py-4">
                <img src="../acc_logo.png" height={20} width={20} className="rounded"/>
              </td>
              <td className="px-6 py-4">
              {val.name}
              </td>
              <td className="px-6 py-4">
              {val.mobile}
              </td>
              <td className="px-6 py-4">
              <Link to="show"> <td><button onClick={() => dispatch(addVal(val.id))} className="text-black underline px-2 py-1 rounded "><img src="../eye_logo.png" height={30} width={30} className="rounded"/></button></td></Link>
              </td>
              <td className="px-6 py-4">
              <td><button onClick={() => rmvUser(removeUser(val.id))} className="text-black underline px-2 py-1 rounded "><img src="../del.png" height={30} width={30} className="rounded"/></button></td>
              </td>
              <td className="px-6 py-4">
              <Link to="/edit"><td><button onClick={() => rmvUser(addVal(val.id))} className="text-black underline px-2 py-1 rounded "><img src="../edit.png" height={30} width={30}className="rounded" /></button></td></Link>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    <Routes>
      <Route path="/add" element={<AddContact />} />
      <Route path="/show" element={<ShowContact />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  </>
}