type Props = {};
import qrImage from "./assets/image-qr-code.png";

const App = (props: Props) => {
  return (
    <div className="bg-[#D5E1EF] w-screen h-screen flex justify-center items-center">
      <div className="w-[320px] h-[497px] shadow-lg bg-white rounded-[20px] flex flex-col items-center ">
        <img
          className="rounded-[10px] h-[288px] mt-[16px]"
          src={qrImage}
          width={288}
        />
        <div className="px-[16px] mt-[16px]  text-center font-bold text-2xl text-[#1F314F] font-outfit">
          Improve your front-end skills by building projects
        </div>
        <div className="mt-[16px] px-[24px]  text-center text-[#7D889E] font-outfit">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
};

export default App;
