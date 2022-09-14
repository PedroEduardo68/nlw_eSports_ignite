import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'
import { GameBanner } from './components/GameBanner'

function App() {
  return (
  <>
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='Logo do evento NLW' />
      <h1 className="text-6xl text-white font-black mt-20 ">Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui...</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        
        <GameBanner bannerUrl="/game-1.png" title="lol" adsCount={2} />


      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden ">
          <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
            <div>
              <strong className='text-2xl text-white font-black block'> Não encontrou seu duo?</strong>
              <span className="text-zinc-400 block"> Publique um anuncio para encontrar seu novos players! </span>
            </div>

            <button className='py-3 px-4 bg-violet-500 houver:bg-violet-600 text-white rounded flex items-center gap-3'> 
              <MagnifyingGlassPlus size={24} />
              Publique anúncio 
            </button>

          </div>
      </div>














    </div>
  </>
  )
}

export default App
