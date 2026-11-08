// mobile menu
const btn=document.querySelector('.menu-btn'),list=document.querySelector('.nav ul');
if(btn){btn.addEventListener('click',()=>{const o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}

// terminal typing (home page only)
const out=document.getElementById('typed');
if(out){
  const lines=[
    '<span class="c"># whoami</span>',
    '{',
    '  <span class="k">"name"</span>: <span class="s">"Somkiat Nontamat"</span>,',
    '  <span class="k">"age"</span>: <span class="s">20</span>,',
    '  <span class="k">"university"</span>: <span class="s">"Bangkok University"</span>,',
    '  <span class="k">"major"</span>: <span class="s">"Information Technology"</span>,',
    '  <span class="k">"focus"</span>: [<span class="s">"UI design"</span>, <span class="s">"web"</span>],',
    '  <span class="k">"status"</span>: <span class="s">"learning"</span>',
    '}'
  ];
  const full=lines.join('\n');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){out.innerHTML=full+' <span class="cursor"></span>'}
  else{
    let i=0;
    (function next(){
      out.innerHTML=lines.slice(0,i).join('\n')+(i?'\n':'')+'<span class="cursor"></span>';
      if(i<lines.length){i++;setTimeout(next,i===1?500:380)}
    })();
  }
}

// contact form -> opens user's mail app
const form=document.getElementById('mailform');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const body=encodeURIComponent(d.get('message')+'\n\n— '+d.get('name')+' ('+d.get('email')+')');
  location.href='mailto:somkiat.nont@bumail.net?subject='+encodeURIComponent(d.get('subject'))+'&body='+body;
})}
