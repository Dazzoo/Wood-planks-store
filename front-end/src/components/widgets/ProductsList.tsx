

function ProductsList() {
    return (
      <section className="flex flex-col justify-center items-center w-full">
            <h2 className="uppercase text-sm" >
            The innovation leader in luxury vinyl plank
          </h2>
            <h3 className="text-5xl" >
            Let's Get Started
          </h3>
      </section>
    );
  }
  
  export default function ProductsListWrapper() {
    return (
            <ProductsList />
      );
  }