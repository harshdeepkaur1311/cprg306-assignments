import Link from "next/link";
export default function Page (){
  return(
    <div>
    <h1 className="font-bold text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
    <ul >
    <li><Link href="/week-2">Week 2 Assignment</Link></li>
    <li><Link href="/week-3">Week 3 Assignment</Link></li>
    <li><Link href="">Week 4 Assignment</Link></li>
    <li><Link href="">Week 5 Assignment</Link></li>
    <li><Link href="">Week 6 Assignment</Link></li>
    <li><Link href="">Week 7 Assignment</Link></li>
    <li><Link href="">Week 8 Assignment</Link></li>
    </ul>

    </div>


  );
};