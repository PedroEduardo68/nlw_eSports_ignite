import { Check, GameController } from 'phosphor-react'
import { Input } from './Input'
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';

export const CreateAdModal = () =>{
    return (
        <>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
              <Dialog.Title className='text-3xl font-black'>
                Publique um anúncio
              </Dialog.Title>

                <form className='mt-8 flex flex-col gap-4'>
                  <div className='flex-col gap-2 flex'>
                    <label htmlFor="game" className='font-semibold'>Qual o Game? </label>
                    <select id="game" placeholder='Selecione o game que deseja jogar'> 
                    </select>
                  </div>


                  <div className='flex-col gap-2 flex'>
                    <label htmlFor='name'>Seu nome (ou nickname)</label>
                    <Input id="name" placeholder="Como te chamam dentro do game?" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className='flex-col gap-2 flex'>
                      <label htmlFor='yearsPlaying'>Joga há quantos anos? </label>
                      <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                    </div>
                    <div className='flex-col gap-2 flex'>
                      <label htmlFor='discord'>Qual seu Discord? </label>
                      <Input id="discord" type="text" placeholder="Usuario#0000" />
                    </div>
                  </div>


                  <div className='flex gap-6'>
                    <div className='flex-col gap-2 flex'>
                      <label htmlFor='weekDays'>Quando costuma Jogar? </label>
                      <div className='grid grid-cols-4'>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Domingo'>D</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Segunda'>S</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Terca'>T</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Quarta'>Q</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Quinta'>Q</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Sexta'>S</button>
                        <button className="w-8 h-8 rounded bg-zinc-900" title='Sabado'>S</button>
                      </div>

                    </div>
                    <div className='flex-col gap-2 flex flex-1'>
                      <label htmlFor='hourStart'>Quando horário do dia? </label>
                      <div className='grid grid-cols-2 gap-2'>
                        <Input type="time" id="hourStart" placeholder='De'/> 
                        <Input type="time" id="hourEnd" placeholder='Até'/> 
                      </div>
                    </div>
                  </div>


                  <div className='mt-2 flex items-center gap-2 text-sm'> 
                    <Checkbox.Root  className='w-6 h-6 p-1 rounded bg-zinc-900' >
                        <Checkbox.Indicator >
                            <Check className='w-4 h-4 text-emerald-400' />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    Constumo me Conectar no Chat de Voz?
                  </div>


                  <footer className='mt-4 flex justify-end gap-4'>
                    <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close >
                    <button className='bg-violet-500 px-5 h-12 rounded-md flex font-semibold  items-center gap-3 hover:bg-violet-600' type="submit">
                      <GameController size={24}/>
                      Entrar duo
                    </button>
                  </footer>




                </form>
              
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
        </>
    )
}