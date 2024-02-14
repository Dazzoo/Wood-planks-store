import Image from 'next/image'
import BasicButton from '@/components/shared/buttons/BasicButton'

export default function Header() {
    return (
      <header className="flex justify-between py-6 px-12 text-2xl bg-stone-200	">
          <div className='bold' >
            Bits Orchestra
          </div>
          <div>
            <BasicButton
              name={'Login'}
              onClickMessage='REDIRECT_LOGIN'
            />
          </div>
      </header>
    );
  }
  