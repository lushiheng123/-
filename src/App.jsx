
import Diy from './pages/Diy';
import Diy_pants from './pages/Diy_pants';

import Welcome from './pages/Welcome';

function App() {
  return (
    <main className="app transition-all ease-in ">
      <Welcome />
      <Diy />
      <Diy_pants />
      
      {/* <Home />
      <Customizer /> */}
    </main>
  )
}

export default App
