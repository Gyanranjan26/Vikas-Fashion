import './App.css';
import {CiSearch} from 'react-icons/ci';
import {GrAdd} from 'react-icons/gr';
import {MdRefresh,MdDelete} from 'react-icons/md';
import{FaSortAmountDown,FaSortAmountUp} from 'react-icons/fa';
import {BiEdit} from 'react-icons/bi'

function App() {
  return (
 
    <>
      <div style={{'border':'2px solid gray', 'width':'80%'}} className=" mx-auto mt-5">
       <div className="flex justify-between">
            <div>
            <h1 className="text-gray-500 ml-2">Company</h1>
              <div className="flex">
              <h6 className="text-gray-400 ml-2">No of Records </h6>
              <h6 className="text-gray-400 mx-1">4</h6>
              </div>
            </div>
            <div className="flex justify-end " style={{'width':'80%'}}>
              <div style={{'border':'2px solid gray', 'width':'30%'}} className="p-1 mx-5 my-2 flex justify-evenly">
                <CiSearch size={20} className="my-1" color='gray'/>
                <input  type="text" style={{'border':"none"}} placeholder="Search"/>
              </div>
                    <div className="mx-2 my-2 text-white">
                      <button className="bg-sky-600 flex justify-between w-58 p-2 text-white">
                       <GrAdd className="mx-2 my-1" color='white'/>
                        New Company
                      </button>
                  </div>
            </div>
       </div>
       <div className="flex">
          <MdRefresh className="mx-4 my-2 text-gray-600" size={20}/>
          <FaSortAmountUp className="mx-4 my-2 text-gray-600" size={16}/>
          <FaSortAmountDown className="mx-4 my-2 text-gray-600" size={16}/>
       </div>
       <div>
        <table className=" mx-5 border my-4 text-center">
          <thead className="bg-sky-500 ">
            <tr className="mx-5">
              <td className="mx-6 p-6">Sr.No</td>
              <td className="mx-6 p-6">Company Code</td>
              <td className="mx-6 p-6">Company Name</td>
              <td className="mx-6 p-6">City</td>
              <td className="mx-6 p-6">Action</td>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center">
              <td></td>
              <td><input  className="text-center" type="text" placeholder="search"></input></td>
              <td><input  className="text-center" type="text" placeholder="search"></input></td>
              <td><input  className="text-center" type="text" placeholder="search"></input></td>
              <td></td>
            </tr>

            <tr className="text-center">
              <td>01</td>
              <td>CL</td>
              <td>Calcue</td>
              <td>Surat</td>
              <td className="flex my-1 justify-evenly">
                <button><BiEdit/></button>
                <button><MdDelete/></button>
              </td>
            </tr>

            <tr className="text-center">
              <td>01</td>
              <td>CL</td>
              <td>Calcue</td>
              <td>Surat</td>
              <td className="flex my-1 justify-evenly">
                <button><BiEdit/></button>
                <button><MdDelete/></button>
              </td>
            </tr>

            <tr className="text-center">
              <td>01</td>
              <td>CL</td>
              <td>Calcue</td>
              <td>Surat</td>
              <td className="flex my-1 justify-evenly">
                <button><BiEdit/></button>
                <button><MdDelete/></button>
              </td>
            </tr>
          </tbody>
        </table>
       </div>

      </div>
    
    </>
  );
}

export default App;
