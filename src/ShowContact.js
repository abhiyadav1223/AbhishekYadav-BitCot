import { useSelector } from "react-redux"

export default function ShowContact() {
  const data = useSelector(state => state.data.value)
  const userVal = useSelector(state => state.data.userId)
  console.log(userVal[0]);
  console.log(data);
  return <>
    <div className=" border-2 border-black  text-center w-auto mx-20">
      <div className="font-bold text-2xl">
        <h1>User Details</h1>
      </div>
      <hr />
      {data.filter((val)=> val.id==userVal[0]).map((value) =><div className="space-y-2 my-5  ">
          <div className="flex space-x-14 justify-center">
            <div className=" w-36 text-right py-1">Name :</div>
            <div className="w-52 text-left py-1">{value.name}</div>
          </div>
          <div className="flex justify-center space-x-14" >
            <div className=" w-36 text-right py-1">Email :</div>
            <div className="w-52 text-left py-1">{value.email}</div>
          </div>
          <div  className="flex justify-center space-x-14">
            <div className=" w-36 text-right py-1">Phone :</div>
            <div className="w-52 text-left py-1">{value.mobile}</div>
          </div>
          <div  className="flex justify-center space-x-14">
            <div className=" w-36 text-right py-1">Address :</div>
            <div className="w-52 text-left py-1">{value.address}</div>
          </div>
        </div>
)}

    </div>
  </>
}