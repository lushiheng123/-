import React from 'react'
import { useState, useEffect } from 'react'

import { Pants, Shoes ,Toys} from '../components';
export default function Diy_pants() {
  const [color, setColor] = useState('red');
  const click = color => { setColor(color) };
  const [counts, setCounts] = useState({
    pants: 0,
    toys: 0,
    shoes: 0,
  
  });
  const pants_add = () => { setCounts(prev=>({...prev,pants:prev.pants+1}) )};
  const pants_dele = () => { setCounts(prev => ({ ...prev, pants: prev.pants - 1 })) };
  
  //  const pants_add = () => { setCounts(prev=>({...prev,pants:prev.pants+1}) )};
  // const pants_dele = () => { setCounts(prev => ({ ...prev, pants: prev.pants - 1 })) };

  //  const pants_add = () => { setCounts(prev=>({...prev,pants:prev.pants+1}) )};
  // const pants_dele = () => { setCounts(prev => ({ ...prev, pants: prev.pants - 1 })) };

  //  const pants_add = () => { setCounts(prev=>({...prev,pants:prev.pants+1}) )};
  // const pants_dele = () => { setCounts(prev => ({ ...prev, pants: prev.pants - 1 })) };

  const totals = counts.pants+counts.shoes+counts.toys;
  return (
    <div className="welcome_page" >
      <div className='welcome_container'>

        {/* 放置购物物品 */}
        <div className='flex justify-center relative w-full'>

          

              {/* 这里放置裤子 */}
          <Pants count={counts.pants} onChange={setCounts} />
          

       


              {/* 这里挑选鞋子 */}
          <Shoes count={counts.shoes} onChange={setCounts} />
          
          <Toys count={counts.toys} onChange={setCounts} />
        
                  
              {/* 这里挑选眼镜 */}

          
          
          {/* 这里算出总价格 */}
          

          
          
          <div className='flex items-center justify-center absolute bottom-[100px] left-0 w-full text-center '>
              <h1 className='font-3xl font-bold'>总数：{totals}</h1>
        </div>
        </div>

        
            
        </div>
    </div>
  )
};