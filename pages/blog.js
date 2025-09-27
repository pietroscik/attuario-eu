import Nav from "../components/Nav"; import Footer from "../components/Footer";
export default function Blog(){
  const posts = [
    ["IFRS 17: 10 controlli prima del bilancio","Checklist operativa."],
    ["GLM nel pricing: 5 errori da evitare","Link function, leakage, overfit."],
    ["Riserve semplici vs triangoli","Quando basta il quick estimate."]
  ];
  return (<>
    <Nav/>
    <main style={{maxWidth:960, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Blog</h1>
      <div style={{display:"grid", gap:12}}>
        {posts.map(([t,s],i)=>(
          <article key={i} style={{border:"1px solid #eee", borderRadius:16, padding:16}}>
            <h3 style={{margin:"0 0 6px"}}>{t}</h3><p style={{margin:0, opacity:.8}}>{s}</p>
          </article>
        ))}
      </div>
    </main>
    <Footer/>
  </>);
}
