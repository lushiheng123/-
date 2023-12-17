export default function Navbar() {
  return (
      <div className='navbar'>
          <div className='navbar_container '>
             
                  <img src="./imgs/logo-no-background.png" width="125" />
                  <ul className="navbar_items">
                      <li className="navbar_item">
                          Home
                      </li>
                      <li className="navbar_item">
                          Studio
                      </li>
                      <li className="navbar_item">
                          Music
                      </li>
                      <li className="navbar_item">
                          Code
                      </li>
                  </ul>
                 
            
               <button className="navbar_button">Hire Me Now</button>
          </div>
    </div>
  )
};
