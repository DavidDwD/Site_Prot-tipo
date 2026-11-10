const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],pg=document.body.dataset.page;
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)};
const P=d=>`<svg viewBox="0 0 24 24">${d}</svg>`,ic={book:P('<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>'),heart:P('<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 22l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>'),arr:P('<path d="M5 12h14M13 6l6 6-6 6"/>'),srch:P('<circle cx="11" cy="11" r="7"/><path d="m21 21-4-4"/>'),alert:P('<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>'),eye:P('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>')};
document.addEventListener("click",e=>{if(e.target.closest("[data-soon]")){e.preventDefault();toast("Tela ainda não prototipada")}});
const tg=(n,s)=>`<span class="tg ${s?"":COR[n]||""}">${n}</span>`;
const card=q=>`<article class="card"><div class="top2"><span>${tg(q.d)}${tg(q.s,1)}</span><small>${q.id}</small></div><h3><a href="questao.html">${q.t}</a></h3><p>${q.x}</p>
<div class="meta"><span>${q.r} · ${q.n}</span><a href="questao.html">Ver questão completa ↗</a></div><div class="foot2"><span>Autor(a) <b>${q.a}</b> · ${q.dt}</span><span><button class="like" aria-label="Curtir">${ic.heart} ${q.l}</button><a class="btn sm" href="questao.html">Responder</a></span></div></article>`;
const favCard=q=>`<article class="card"><div class="top2"><span>${tg(q.d)}${tg(q.s,1)}</span><small>${q.id}</small></div><h3><a href="questao.html">${q.t}</a></h3><p>${q.x}</p>
<div class="meta"><span>Publicado em ${q.p} · ${q.g}</span><a href="questao.html">Ver questão completa ↗</a></div></article>`;
const logado=()=>sessionStorage.u;
if($("#nav")){
 const it=[["home.html","Início","home"],["home.html#bq","Banco de questões",""],["nova-questao.html","Nova questão","nova"],["#","Como funciona","soon"]];
 $("#nav").innerHTML=`<div class="in"><a class="brand" href="home.html">${ic.book}Questio</a><nav>${it.map(i=>`<a href="${i[0]}" class="${i[2]==pg?"on":""}" ${i[2]=="soon"?"data-soon":""}>${i[1]}</a>`).join("")}</nav>
 ${logado()?'<a class="user" href="perfil.html"><i class="av">IS</i><span><b>Inês Sousa</b>Estudante</span></a>':'<span class="auth2"><a href="login.html">Entrar</a><a class="btn sm" href="login.html">Criar conta</a></span>'}</div>`;
 $("#foot").innerHTML=`<div class="in"><span class="brand">${ic.book}Questio</span><span><a href="#" data-soon>Sobre</a><a href="#" data-soon>Diretrizes</a><a href="#" data-soon>Privacidade</a><a href="#" data-soon>Ajuda</a></span></div><div class="in" style="padding-top:0;opacity:.7"><span>Conhecimento claro, aprendizagem contínua. © 2026 Questio Educação.</span></div>`;
}
const eye=$(".pw button");if(eye)eye.onclick=()=>{const i=$("#p");i.type=i.type=="password"?"text":"password"};
if(pg=="login"){let m="l";
 const set=x=>{m=x;$$(".tabs button").forEach(b=>b.classList.toggle("on",b.dataset.m==x));$$(".fld").forEach(f=>f.classList.remove("bad"));
  $("#h").textContent=x=="l"?"Que bom ter você de volta":"Comece a estudar melhor";
  $("#s").textContent=x=="l"?"Entre para continuar de onde parou e manter seu plano em dia.":"Crie sua conta gratuitamente e organize sua rotina em poucos minutos.";
  $("#b").textContent=x=="l"?"Entrar":"Criar conta";$("#xl").hidden=x!="l";$("#xc").hidden=x=="l";$("#hint").hidden=x=="l";
  $("#cl").innerHTML=x=="l"?'Ainda não tem uma conta? <a href="#" data-m="c">Criar conta</a>':'Já tem uma conta? <a href="#" data-m="l">Fazer login</a>'};
 document.addEventListener("click",e=>{const a=e.target.closest("[data-m]");if(a){e.preventDefault();set(a.dataset.m)}});
 $("#f").onsubmit=e=>{e.preventDefault();const em=$("#e").value.trim(),pw=$("#p").value,be=!em,bp=m=="l"?!pw:pw.length<8;
  $("#fe").classList.toggle("bad",be);$("#fp").classList.toggle("bad",bp);
  $("#fp .err b").textContent=m=="l"?"Digite sua senha para continuar":"Use pelo menos 8 caracteres";
  if(be||bp){if(m=="l"){$("#h").textContent="Vamos tentar novamente";$("#s").textContent="Só falta preencher os campos abaixo para acessar sua conta."}return}
  if(m=="c"&&!$("#t").checked)return toast("Aceite os termos para criar a conta");
  sessionStorage.u=1;location.href="home.html"};
 $("#g").onclick=()=>{sessionStorage.u=1;location.href="home.html"};
}
if(pg=="recuperar")$("#f").onsubmit=e=>{e.preventDefault();const v=$("#e").value.trim();$("#fe").classList.toggle("bad",!v);if(!v)return;
 $("#nt").className="note ok";$("#nt").textContent="Enviamos o link para "+v+". Se não encontrar a mensagem, verifique também a pasta de correio não solicitado."};
if(pg=="home"){
 $("#dl").innerHTML=DISC.map(d=>`<label class="ck"><input type="checkbox" value="${d[0]}"> ${d[0]}<i>${d[1]}</i></label>`).join("");
 const r=()=>{const q=$("#q").value.trim().toLowerCase(),f=$$("#dl input:checked").map(x=>x.value);
  let l=QS.filter(x=>(!f.length||f.includes(x.d))&&(x.t+" "+x.x).toLowerCase().includes(q));
  l.sort($("#ord").value=="l"?(a,b)=>b.l-a.l:(a,b)=>b.id.localeCompare(a.id));
  $("#n").textContent=(l.length==QS.length?"1.284":l.length)+" questões encontradas";
  $("#lista").innerHTML=l.length?l.map(card).join(""):'<div class="card">Nenhuma questão encontrada. Tente outro termo ou limpe os filtros.</div>'};
 r();$("#sf").onsubmit=e=>{e.preventDefault();r()};$("#dl").onchange=r;$("#ord").onchange=r;
 $("#lim").onclick=e=>{e.preventDefault();$$("#dl input").forEach(x=>x.checked=false);$("#q").value="";r()};
 $("#lista").onclick=e=>{const l=e.target.closest(".like");if(l)l.classList.toggle("on")};
}
if(pg=="questao"){
 $$(".opt").forEach(o=>o.onclick=()=>{if($(".opt.ok"))return;const c=$(".opt[data-ok]");
  if(o!==c)o.classList.add("no");c.classList.add("ok");$("#rev").hidden=false;
  toast(o===c?"Resposta correta!":"Resposta incorreta. A correta é a alternativa C.")});
}
if(pg=="perfil"){
 const v=t=>{$$(".ptabs button").forEach(b=>b.classList.toggle("on",b.dataset.t==t));
  $("#pt").textContent=t=="h"?"Histórico de Publicações":"Questões Favoritadas";
  $("#ps").textContent=t=="h"?"6 questões publicadas por si":"4 questões guardadas para consultar mais tarde";
  $("#pl").innerHTML=t=="h"?card(QS[3]):FAV.map(favCard).join("")};
 $$(".ptabs button").forEach(b=>b.onclick=()=>v(b.dataset.t));v("h");
 $("#sair").onclick=()=>{sessionStorage.clear();location.href="login.html"};
}
if(pg=="nova"){
 $$("textarea[maxlength]").forEach(t=>t.oninput=()=>t.parentNode.querySelector(".cnt").textContent=t.value.length+" / "+t.maxLength);
 $("#drop").onclick=()=>toast("Upload simulado no protótipo");
 $("#f").onsubmit=e=>{e.preventDefault();let ok=true;
  $$("[data-req]").forEach(f=>{const bad=!f.querySelector("input,select,textarea").value.trim();f.classList.toggle("bad",bad);if(bad)ok=false});
  if(!ok)return toast("Revise os campos obrigatórios");toast("Questão publicada");setTimeout(()=>location.href="perfil.html",1200)};
}
