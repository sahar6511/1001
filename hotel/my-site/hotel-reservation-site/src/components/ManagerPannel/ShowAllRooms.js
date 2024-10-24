import React, { useState } from 'react';
import { useGetLimitRoomsQuery,useDeleteRoomMutation } from '../redux/services/roomsApi';
import Space from '../Space/Space';

const ShowAllRooms = () => {
  const[page,setPage] = useState(1)
  const { data: rooms, error, isLoding } = useGetLimitRoomsQuery(page);
  const[selectedRoom,setSelectedRoom] = useState(null)
  const[deleteRoom] = useDeleteRoomMutation()
  return (
    <div className='showallromms'>
    
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ?(
        <div>
            <table className='showallrooms-table'>
              <tbody>

                       {rooms.map((room)=>
<>

                      <tr key={rooms.id}>
                        <td>{room.title}
                         
                         
                        </td>
                        <td>ظرفیت:{room.capacity}</td>
                        <td>تعداد تخت :{room.bed}</td>
                        <td> تعداد حمام :{room.bath}</td>
                        <td>{room.wifi}</td>
                        <td> قیمت هر شب :{room.price}ریال</td>
                        <td>{room.img}</td>

                        <td rowSpan={2}><button className='btn' style={{background:"#FEA116"}}  onClick={()=>setSelectedRoom(room)}>ویرایش</button></td>
                        <td rowSpan={2}><button className='btn' style={{background:"red"}} onClick={()=>deleteRoom(room.id)}>حذف</button></td>
                        </tr>
                        <tr>

                          <td colSpan={3}>امکانات : {room.facilities}</td>
                          <td colSpan={4}>توضیحات : {room.info}</td>
                        </tr>
                        </>
                       )
                      }
    
              </tbody>
            </table>
            <Space/>
            <Space/>
            <Space/>
          
            <div className='showallrooms-btns'>
              <button className='btn' disabled={rooms.length < 1} onClick={()=>setPage((prev)=>prev + 1)}>بعدی</button>
              <button className='btn' disabled={page <= 1} onClick={()=>setPage((prev)=>prev - 1)}>قبلی</button>
            </div>
        </div>
      )
      :null}

    </div>
  )
}

export default ShowAllRooms
