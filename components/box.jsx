import Image from "next/image"
import { Menu } from 'react-feather';


export default function Box(props) {
  return (
    <div className={`${props['outerCss']} w-full flex`}>
        <div className="mt-2 w-full md:w-full bg-gray-800 shadow-md rounded-md resize-none text-left">
            <div className="rounded-t-md text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <div className="py-3 px-6 pl-5 font-bold">
                {props['title']}
                </div>
            </div>
            <div className="pr-10 pl-5 pb-5 pt-5">
            {props['children']}
            </div>
        </div>
    </div>
  )
}

