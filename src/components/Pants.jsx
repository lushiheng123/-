// Shirt.jsx
import React from 'react'
import { useState, useEffect } from 'react'
const Pants = ({ count, onChange }) => {
    const [color, setColor] = useState('red');
    const click = color => { setColor(color) };
    const increase = () => {
        onChange(prev => ({
            ...prev,
            pants: prev.pants + 1
        }));
    }
    const decrease = () => {
        onChange(prev => ({
            ...prev,
            pants: prev.pants - 1
        }));
    }
    const  getRandomHexColor=()=> {
    return '#' + Math.floor(Math.random() * 16777215).toString(16); 
}
    return (
    
        <div className='relative items-center justify-center flex w-full text-center'>
            {/* 先放置图片在中央 */}
            <div className=' flex  w-full  h-full  items-center justify-center text-center'>
                <img src="./imgs/裤子.png" className='z-0 w-[300px] h-[300px]  ' alt="img"  />
                <img src="./imgs/3333.png" className=" absolute z-10 w-[300px] h-[300px]   " alt="img" style={{ backgroundColor: color }} />
            </div>
            {/* 放置按钮 */}
            <div className=' absolute bottom-[150px] text-center left-0 w-full' >
                <div>
                    <div className='flex justify-center  gap-10'>
                        <button onClick={(color) => click('yellow')}>
                            yellow
                        </button>
                        <button onClick={(color) => click('blue')}>
                            blue
                        </button>
                        <button onClick={(color) => click('black')}>
                            black
                        </button>
                        <button onClick={(color) => click(getRandomHexColor())}>
                           
                            随机
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
};
export default Pants