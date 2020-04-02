import Link from "next/link";

function About() {
    return (
        <ul>
            <li><Link href="/"><a>Home으로</a></Link></li>
            <li><p>about 입니다.</p></li>
        </ul>

    )
}

export default About;