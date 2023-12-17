import React from 'react'
import { useState, useEffect } from 'react'
export default function Shoes({count,onChange}) {
    const [selectedShoe, setSelectedShoe] = useState('');
    const select = (shoe) => {
        setSelectedShoe(shoe);
    }
    const increase = () => {
        onChange(prev => ({
            ...prev,
            shoes: prev.shoes + 1
        }));
    }
    const decrease = () => {
        onChange(prev => ({
            ...prev,
            shoes: prev.shoes - 1
        }));
    }
  return (
                <div className='relative items-center justify-center flex w-full text-center'>
                   {/* 先放置图片在中央 */}
          <div className=' flex  w-full  h-full items-center justify-center text-center'>
              {!selectedShoe &&
                  <img src="./imgs/阿迪.jpg" className='w-[300px] h-[300px]' alt="img" />}
              {selectedShoe === "adidas" &&
                  <img src="./imgs/阿迪.jpg" className='w-[300px] h-[300px]' alt="img" />}
              {selectedShoe === "nike" &&
                  <img src="./imgs/nike.jpg" className=" w-[300px] h-[300px]  " alt="img" />}
              {selectedShoe === "nb" &&
                  <img src="./imgs/nb.jpg" className=" w-[300px] h-[300px]  " alt="img" />}
            </div>
                     {/* 放置按钮 */}
            <div className=' absolute bottom-[150px] text-center left-0 w-full' >
              <div>
              <div className='flex justify-center  gap-10'>
                        <button  onClick={()=>select('adidas')}>
                        阿迪
                        </button>
                        <button  onClick={()=>select('nike')}>
                          耐克
                        </button>
                        <button  onClick={()=>select('nb')}>
                         新百伦
                        </button>
                  </div>
                  <div className='justify-center gap-10 flex '>
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
