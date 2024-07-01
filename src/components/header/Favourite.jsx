import HeartIcon from "../../assets/heart.svg";

function Favourite({onShow}) {
  
  return (
    <div className="px-6 py-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartIcon} alt="Heart" />
      <span onClick={onShow}>Favourites</span>
    </div>
  );
}

export default Favourite;
