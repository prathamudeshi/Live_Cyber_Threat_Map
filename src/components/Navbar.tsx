export default function Navbar() {
  return (
    <div className=" flex flex-col w-full h-[100px] text-black top-0 bg-[#00012a]">
      <div className="flex flex-row justify-center">
        <div className="left-20 absolute">
          <img src="/deepcytes-logo.png" alt="" />
        </div>
        <div className="font-bold text-[64px] text-white absolute">
          Live Cyber Threat map
        </div>
      </div>
      <div className="absolute top-25 h-[2px] bg-[#3D9BE9] w-full"></div>
    </div>
  );
}
