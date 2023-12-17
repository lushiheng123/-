import React from 'react'
import { useState, useEffect } from 'react'
export default function Toys({ count, onChange }) {
    const [selectedToy, setSelectedToy] = useState('');
    const select = (toy) => {
        setSelectedToy(toy);
    }
                             
    const increase = () => {
        onChange(prev => ({
            ...prev,
            toys: prev.toys + 1
        }));
    }
    const decrease = () => {
        onChange(prev => ({
            ...prev,
            toys: prev.toys - 1
        }));
    }
  return (
                <div className='relative items-center justify-center flex w-full text-center'>
                   {/* 先放置图片在中央 */}
          <div className=' flex  w-full  h-full items-center justify-center text-center'>
              {!selectedToy &&
                  <img src="./imgs/小熊.jpg" className='w-[300px] h-[300px]' alt="img" />}
              {selectedToy === "toy1" &&
                  <img src="./imgs/小熊.jpg" className='w-[300px] h-[300px]' alt="img" />}
              
              {selectedToy === "toy2" &&
                  <img src="./imgs/兔子.jpg" className=" w-[300px] h-[300px]  " alt="img" />}
              {selectedToy === "toy3" &&
                  <img src="./imgs/魔方.jpg" className=" w-[300px] h-[300px]  " alt="img" />}
            </div>
                     {/* 放置按钮 */}
            <div className=' absolute bottom-[150px] text-center left-0 w-full' >
              <div>
              <div className='flex justify-center  gap-10'>
                        <button  onClick={()=>select('toy1')}>
                        小熊
                        </button>
                        <button  onClick={()=>select('toy2')}>
                          兔子
                        </button>
                        <button  onClick={()=>select('toy3')}>
                         魔方
                        </button>
                  </div>
                  
                  <div className=' items-center text-center justify-center gap-10 flex '>
                        <button onClick={increase}>
                            ➕
                        </button>
                        <button onClick={decrease}>
                            ➖
                        </button>
               
                        <input
                            placeholder='数量'
                          value={count}
                          className='w-[50px] h-[50px]'
                         
                        />
                 
                    </div>
                      </div>
                  </div>
              </div>
  )
}
