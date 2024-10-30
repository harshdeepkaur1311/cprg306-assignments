import Link from "next/link";
export default function Page (){
  return(
    <div className="">
    <h1 className="font-bold text-3xl px-28 py-5">CPRG 306: Web Development 2 - Assignments</h1>
    <ul className="px-28 ">
    <li className="hover:text-green-500 hover:underline"><Link href="/week-2">Week 2 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="/week-3">Week 3 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="/week-4">Week 4 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="/week-5">Week 5 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="/week-6">Week 6 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="/week-7">Week 7 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="">Week 8 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="">Week 8 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="">Week 9 Assignment</Link></li>
    <li className="hover:text-green-500 hover:underline"><Link href="">Week 10 Assignment</Link></li>

    </ul>

    </div>


  );
};