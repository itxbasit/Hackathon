import React, { useEffect, useState } from "react";
import Table from "./Table";
import Drawer from "./drawer/Drawer";
import axios from "axios";

const AllStudentLayout = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    axios.get('http://localhost:9000/allStudentData')
    .then((res)=>{
      setData(res.data.message)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
    <div className="top w-9/12 h-screen  bg-white p-10">
    <div className="main    flex justify-between">
      <div className="students w-10/12 flex" >
        <div
          className="circle bg-blue h-16 w-16 flex justify-center items-center mr-8"
          style={{ borderRadius: "70%", background: "#5C93FA" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
          >
            <path
              d="M16.9643 7.5C16.9643 6.2568 16.4939 5.06451 15.6567 4.18544C14.8195 3.30636 13.684 2.8125 12.5 2.8125C11.316 2.8125 10.1805 3.30636 9.34327 4.18544C8.50606 5.06451 8.03571 6.2568 8.03571 7.5C8.03571 8.7432 8.50606 9.93549 9.34327 10.8146C10.1805 11.6936 11.316 12.1875 12.5 12.1875C13.684 12.1875 14.8195 11.6936 15.6567 10.8146C16.4939 9.93549 16.9643 8.7432 16.9643 7.5ZM5.35714 7.5C5.35714 5.51088 6.10969 3.60322 7.44924 2.1967C8.78878 0.790176 10.6056 0 12.5 0C14.3944 0 16.2112 0.790176 17.5508 2.1967C18.8903 3.60322 19.6429 5.51088 19.6429 7.5C19.6429 9.48912 18.8903 11.3968 17.5508 12.8033C16.2112 14.2098 14.3944 15 12.5 15C10.6056 15 8.78878 14.2098 7.44924 12.8033C6.10969 11.3968 5.35714 9.48912 5.35714 7.5ZM2.75112 27.1875H22.2489C21.7522 23.4785 18.7165 20.625 15.0502 20.625H9.94978C6.28348 20.625 3.24777 23.4785 2.75112 27.1875ZM0 28.2598C0 22.4883 4.45312 17.8125 9.94978 17.8125H15.0502C20.5469 17.8125 25 22.4883 25 28.2598C25 29.2207 24.2578 30 23.3426 30H1.65737C0.742188 30 0 29.2207 0 28.2598Z"
              fill="white"
            />
          </svg>

        </div>
        <div className="head mt-4 text-4xl font-medium text-gray-900 dark:text-dark">Students</div>

      </div>
    

     <div className="">
        <Drawer/>
            </div>
            
    </div>
 
 <Table data={data}/>
    </div>
   
    </>

    
  );
};

export default AllStudentLayout;
