import pdf from '../assets/Catalogue.pdf'

const Catalogue = () => {
  return (
    <div className=' h-auto w-full  flex justify-center'>
       <a href={pdf} download={pdf}>
       <button className='px-5 py-2 border rounded-4xl text-2xl uppercase cursor-pointer font-extrabold'>
            download Catalogue
        </button>
       </a>
    </div>
  )
}

export default Catalogue