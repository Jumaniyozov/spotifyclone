import {FaPlay} from "react-icons/fa";

interface PlayButtonProps {

}

export default function PlayButton(props: PlayButtonProps) {
    return (
        <button
            className="transition opacity-0 rounded-full flex itemse-center p-4 bg-green-500 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
        ><FaPlay className="text-black"/></button>
    );
}
