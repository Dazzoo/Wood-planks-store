import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import ProductsList from '@/components/widgets/ProductsList'

export default function Main() {
  
  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr,auto] font-serif ' >
      <Header/>
      <ProductsList/>
      <Footer/>
    </div>
  );
}
