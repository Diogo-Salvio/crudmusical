import '../src/index.css'


const Header = () => {
    return (
<header className="header relative w-full h-[40vh] flex justify-center items-center flex-col gap-[10px] bg-center bg-cover">

  <div className="absolute inset-0 bg-black opacity-40"></div>

  <div className="relative flex flex-col justify-center items-center gap-[10px]">
    <img
      className="w-[150px] h-[150px] rounded-full border-2 border-white object-cover"
      src="/assets/piloto.png"
      alt="profile"
    />
    <h1 className="text-white">Músicas para ouvir no seu Porsche</h1>
    <h3 className="text-white">As melhores</h3>
  </div>
</header>
    )
}


export default Header