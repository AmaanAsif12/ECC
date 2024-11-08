import { useDispatch } from "react-redux";
import { setTheme } from "../Store/themeSlice";

function Header() {
    const dispatch = useDispatch()
    return (
        <div className="flex space-x-2 bg-green-950 p-2">
            <div onClick={() => dispatch(setTheme('white'))} className="w-16 h-16 bg-white text-black"></div>
            <div onClick={() => dispatch(setTheme('black'))} className="w-16 h-16 bg-black text-white"></div>
        </div>
    );
}

export default Header;