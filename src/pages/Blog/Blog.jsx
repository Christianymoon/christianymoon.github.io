import { BlogCard } from "../../components/Blog/BlogCard";
// import styles from "./Blog.module.css"

export function Blog() {
  return (
    <div className="blog bg-black w-full text-white
    md:flex md:flex-row">
      <div className="pt-5 pb-5
      md:h-full md:w-3/12">
        <nav className="w-full
        md:h-screen">
          <ul className="flex flex-col w-full
          md:h-screen md:items-center md:justify-center">
            <li className="blog-link text-center"><a href="#cybersecurity"><i className="bi bi-fingerprint"></i>Cybersecurity</a></li>
            <li className="blog-link text-center"><a href="#programming"><i className="bi bi-code-slash"></i>Programming</a></li>
            <li className="blog-link text-center"><a href="#hackthebox"><i className="bi bi-box"></i>HackTheBox</a></li>
            <li className="blog-link text-center"><a href="#exploits"><i className="bi bi-bug"></i>Exploits</a></li>
            <li className="blog-link text-center"><a href="#artificial-intelligence"><i className="bi bi-robot"></i>IA</a></li>
            <li className="blog-link text-center"><a href="#videos"><i className="bi bi-youtube"></i>Videos</a></li>
          </ul>
        </nav>
      </div>

      <div className="
      md:w-8/12">
        <div className="category w-full text-center pb-5 text-2xl">
          <div className="category-col">
            <h4 id="cybersecurity">Cybersecurity</h4>
          </div>
        </div>
        <div className="w-full">
          <BlogCard
          title="Rainbow Table Attack"
          description="Explicaremos que es y en que consiste la tecnica de tabla arcoiris (Rainbow Cracking Hash) para crackear o descifrar hashes MD5, SHA1, SHA2 etc, explicaremos que es un hash y algunas vulnerabilidades de estos."
          image="/blog/rainbow_table.jpg"
          badge={[{ name: "Cybersecurity" }, { name: "Hashes" }]}
          link={"/blog/rainbow-cracking-hash.html"}
        />

        <BlogCard
          title="Subnetting"
          description="Explicaremos que es es la subnet mask el network id y como se estructura una red."
          image="/blog/subnetting.png"
          badge={[{ name: "Cybersecurity" }, { name: "Network" }]}
          link={"/blog/subnetting.html"}
        />
        </div> 
      </div>
    </div>
  );
}