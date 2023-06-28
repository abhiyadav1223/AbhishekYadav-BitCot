import { useSelector } from "react-redux"

export default function ShowContact() {
  const data = useSelector(state => state.data.value)
  const userVal = useSelector(state => state.data.userId)
  console.log(userVal[0]);
  console.log(data);
  return <>
    <div className=" border-2 border-black inline-block text-center w-80 mx-20">
      <div className="font-bold text-2xl">
        <h1>User Details</h1>
      </div>
      <hr />
      {data.filter((val)=> val.id==userVal[0]).map((value) =><div className="space-y-2 my-5">
      <div>
        <label >Name : {value.name}</label>
      </div>
      <div>
        <label className="mx-1">Email: {value.email}</label>
      </div>
      <div >
        <label>Phone : {value.mobile}</label>
      </div>
      <div >
        <label>Address : {value.address}</label>
      </div>
    </div>
)}

    </div>
  </>
}