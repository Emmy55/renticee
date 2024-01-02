import Financehero from './Media/financehero.png';


function FInanceService() {
  return (
    <>
    <div>
        <div className="h-full w-full place-items-center justify-center flex">
        <div className="absolute text-white justify-center text-center ">
        <p>Rentice Nigeria House Loan</p>
        <h1 className="ml-80 text-4xl w-1/2 text-center place-items-center flex">Simple and affordable home loan solutions designed to provide peace of mind for you and your family.</h1>
        </div>
            <img src={Financehero} className="w-full h-96 "/>
        </div>
    </div>
    </>
  )
}

export default FInanceService
