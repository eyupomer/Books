import LoaderImg from "../images/loader.svg";

const Loader = () => {
  return (
    <div className="py-10 flex mx-auto items-center justify-center">
      <img className="w-28" src={LoaderImg} alt="loader" />
    </div>
  )
}

export default Loader