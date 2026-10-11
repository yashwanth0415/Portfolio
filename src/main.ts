import * as THREE from 'three';
import './style.css';
import {loadData, type SiteData} from './siteData';

const root = document.getElementById('app');
if (!root) throw new Error('App root not found');

root.innerHTML = "<canvas id=\"gl\" aria-hidden=\"true\"></canvas>\n<div class=\"grain\" aria-hidden=\"true\"></div>\n\n<header class=\"top\" id=\"topbar\">\n  <a class=\"mark\" href=\"#top\" aria-label=\"Yashwanth Thurpati, back to top\">Yashwanth Thurpati</a>\n  <nav aria-label=\"Primary\">\n    <a href=\"#about\">About</a><a href=\"#skills\">Toolkit</a><a href=\"#work\">Work</a><a href=\"#journey\">Experience</a><a class=\"keep\" href=\"#contact\">Contact</a>\n  </nav>\n</header>\n\n<nav class=\"rail\" id=\"rail\" aria-label=\"Page sections\">\n  <div class=\"fill\" id=\"railFill\"></div>\n  <a href=\"#top\" data-s=\"top\"><span>Top</span></a>\n  <a href=\"#about\" data-s=\"about\"><span>About</span></a>\n  <a href=\"#skills\" data-s=\"skills\"><span>Toolkit</span></a>\n  <a href=\"#work\" data-s=\"work\"><span>Work</span></a>\n  <a href=\"#journey\" data-s=\"journey\"><span>Experience</span></a>\n  <a href=\"#certs\" data-s=\"certs\"><span>Certificates</span></a>\n  <a href=\"#contact\" data-s=\"contact\"><span>Contact</span></a>\n</nav>\n\n<main>\n<!-- HERO -->\n<section class=\"hero\" id=\"top\">\n  <div class=\"hero-grid\">\n    <div class=\"hero-copy\" id=\"heroCopy\">\n      <p class=\"status\"><i></i>Open to software internships</p>\n      <h1 class=\"name\"><span class=\"ln\"><span>Yashwanth</span></span><span class=\"ln\"><span>Thurpati</span></span></h1>\n      <p class=\"role\">Frontend developer and computer science student</p>\n      <p class=\"sub\">I build full-stack web apps, from the interface to the PostgreSQL database behind it, and ship them as installable PWAs.</p>\n      <div class=\"cta\">\n        <a class=\"btn primary\" href=\"#work\">View projects</a>\n        <a class=\"btn\" href=\"#contact\">Get in touch</a>\n      </div>\n      <div class=\"social\">\n        <a href=\"https://www.linkedin.com/in/yashwanth0415/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://github.com/yashwanth0415\" target=\"_blank\" rel=\"noopener\">GitHub</a>\n        <a href=\"https://yashwanth0415.github.io/Portfolio/\" target=\"_blank\" rel=\"noopener\">Portfolio</a>\n      </div>\n    </div>\n    <div class=\"stage\">\n      <div class=\"hero-card\" id=\"heroCard\">\n        <div class=\"hc-glow\"></div>\n        <div class=\"hc-back\"></div>\n        <div class=\"hc-photo\"><img src=\"/profile.jpg\" alt=\"Portrait of Yashwanth Thurpati in a blue sweater\" width=\"780\" height=\"960\"></div>\n        <div class=\"float f1\"><small>Currently</small><strong>Frontend and SEO Intern</strong><span>Tekofy Technologies</span></div>\n        <div class=\"float f2\"><small>Works with</small><div class=\"tg\"><em>Python</em><em>React</em><em>PostgreSQL</em></div></div>\n      </div>\n    </div>\n  </div>\n  <dl class=\"facts\">\n    <div><dt>Education</dt><dd>B.Tech in Computer Science and Engineering, CGPA 8.4/10</dd></div>\n    <div><dt>Certified in</dt><dd>Azure AI, Python, Java and CSS</dd></div>\n    <div><dt>Leadership</dt><dd>Led a team of 20 NCC cadets</dd></div>\n  </dl>\n</section>\n\n<!-- ABOUT -->\n<section class=\"sec\" id=\"about\">\n  <div class=\"wrap\">\n    <div class=\"st\">\n      <div class=\"glass about\">\n        <div class=\"about-photo\"><div class=\"orb\"></div><img src=\"/about.jpg\" alt=\"Yashwanth Thurpati in a dark blazer\" width=\"720\" height=\"720\"></div>\n        <div>\n          <h2>About me</h2>\n          <p>I'm a B.Tech student in Computer Science and Engineering at Malla Reddy Deemed University. So far that has meant a rental platform that serves owners, tenants and admins, and an exam engine that turns a PDF into a timed test.</p>\n          <p>Right now I'm a Frontend Developer and SEO intern at Tekofy Technologies, building responsive React sites and helping people find them. I'm looking for a software internship where I can work in Python and on the web.</p>\n          <ul class=\"edu\">\n            <li><span class=\"yrs\">2023 to 2027</span><div><strong>B.Tech, Computer Science and Engineering</strong><small>Malla Reddy Deemed University</small></div><span class=\"score\">CGPA 8.4/10</span></li>\n            <li><span class=\"yrs\">2021 to 2023</span><div><strong>Intermediate (MPC), TSBIE</strong><small>Resonance College</small></div><span class=\"score\">948/1000</span></li>\n            <li><span class=\"yrs\">2011 to 2021</span><div><strong>Secondary education, CBSE</strong><small>SR Prime School</small></div><span class=\"score\">455/500</span></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- SKILLS (pinned 3D ring) -->\n<section class=\"pin\" id=\"skills\" data-pin=\"skills\" style=\"height:420vh\">\n  <div class=\"pin-inner\">\n    <div class=\"pin-head\">\n      <h2>Toolkit</h2>\n      <p class=\"muted\">Scroll to turn the ring. Languages first, then the web stack, then the tools I use to ship.</p>\n    </div>\n    <div class=\"ring-wrap\" id=\"ringWrap\"><div class=\"ring\" id=\"ring\" role=\"list\"></div></div>\n    <ul class=\"legend\" id=\"legend\"></ul>\n  </div>\n</section>\n\n<!-- WORK -->\n<section class=\"sec\" id=\"work\">\n  <div class=\"wrap\">\n    <div class=\"work-head st\">\n      <h2>Selected work</h2>\n      <p>Two full-stack products, each built as an installable, responsive web app.</p>\n    </div>\n\n    <article class=\"project\">\n      <div class=\"mock-col st\">\n        <div class=\"mock\" data-tilt>\n          <div class=\"bar\"><i></i><i></i><i></i><span>renflix.onrender.com</span></div>\n          <div class=\"body rx\">\n            <aside><b></b><b></b><b></b><b></b></aside>\n            <div>\n              <div class=\"stats\"><div><small>Listings</small><em></em></div><div><small>Tenants</small><em></em></div><div><small>Rent due</small><em></em></div></div>\n              <div class=\"props\"><div class=\"prop\"><div class=\"ph\"></div><i></i><i></i></div><div class=\"prop\"><div class=\"ph\"></div><i></i><i></i></div><div class=\"prop\"><div class=\"ph\"></div><i></i><i></i></div></div>\n              <div class=\"chart\" id=\"chart\"></div>\n            </div>\n          </div>\n          <span class=\"pop l\">Owners, tenants, admins</span>\n          <span class=\"pop r\">Installable PWA</span>\n          <span class=\"glare\"></span>\n        </div>\n      </div>\n      <div class=\"st\">\n        <h3>RENFLIX</h3>\n        <p class=\"kind\">Property rental management system</p>\n        <p class=\"d\">One platform for property owners, tenants and administrators to run rentals without the paperwork.</p>\n        <ul>\n          <li>Property listing management and user authentication</li>\n          <li>Rental workflows and role-based dashboards</li>\n          <li>PostgreSQL backend, deployed on cloud hosting</li>\n        </ul>\n        <div class=\"tags\"><span>Full-stack</span><span>PostgreSQL</span><span>PWA</span><span>Authentication</span></div>\n        <a class=\"btn primary\" href=\"https://renflix.onrender.com/\" target=\"_blank\" rel=\"noopener\">Open RENFLIX</a>\n      </div>\n    </article>\n\n    <article class=\"project flip\">\n      <div class=\"mock-col st\">\n        <div class=\"mock tf\" data-tilt>\n          <div class=\"bar\"><i></i><i></i><i></i><span>testforge415.onrender.com</span></div>\n          <div class=\"body\">\n            <div>\n              <div class=\"tabs\"><span class=\"a\">Section A</span><span>Section B</span><span>Section C</span><span class=\"t\">Sectional timer</span></div>\n              <div class=\"q\"><i></i><i></i><i style=\"width:40%\"></i></div>\n              <div class=\"opts\"><div>A</div><div class=\"sel\">B</div><div>C</div><div>D</div></div>\n            </div>\n            <div class=\"pal\" id=\"pal\"></div>\n          </div>\n          <span class=\"pop l\">Generated from a PDF</span>\n          <span class=\"pop r\">Negative marking</span>\n          <span class=\"glare\"></span>\n        </div>\n      </div>\n      <div class=\"st\">\n        <h3>TESTFORGE AI</h3>\n        <p class=\"kind\">AI-powered exam generation platform</p>\n        <p class=\"d\">Upload a PDF and get a multiple-choice test back, then run it like a real exam.</p>\n        <ul>\n          <li>AI question generation from uploaded documents</li>\n          <li>Sections, marks, negative marking and sectional timing</li>\n          <li>Automated exam processing with PostgreSQL-backed data</li>\n        </ul>\n        <div class=\"tags\"><span>AI</span><span>PostgreSQL</span><span>PWA</span><span>PDF upload</span></div>\n        <a class=\"btn primary\" href=\"https://testforge415.onrender.com/\" target=\"_blank\" rel=\"noopener\">Open TestForge AI</a>\n      </div>\n    </article>\n  </div>\n</section>\n\n<!-- EXPERIENCE (pinned fly-through) -->\n<section class=\"pin\" id=\"journey\" data-pin=\"journey\" style=\"height:380vh\">\n  <div class=\"pin-inner\">\n    <div class=\"pin-head\"><h2>Experience</h2><p class=\"muted\">Scroll to move through the timeline, newest first.</p></div>\n    <div class=\"stops\" id=\"stops\">\n      <article class=\"stop glass\">\n        <p class=\"when\">May 2026 to present</p>\n        <h3>Frontend Developer and SEO Intern</h3>\n        <p class=\"org\">Tekofy Technologies</p>\n        <ul>\n          <li>Build and maintain responsive websites with HTML, CSS, JavaScript and React.</li>\n          <li>Work with the development team on user experience, site performance and SEO.</li>\n          <li>Implement modern UI components and improve visibility through search engine optimization.</li>\n        </ul>\n      </article>\n      <article class=\"stop glass\">\n        <p class=\"when\">2023 to 2024</p>\n        <h3>Business Associate</h3>\n        <p class=\"org\">Winzera Pvt Ltd</p>\n        <ul>\n          <li>Supported day-to-day business operations and client communication.</li>\n          <li>Worked with cross-functional teams to make operations run more efficiently.</li>\n          <li>Built teamwork, problem-solving and professional communication skills.</li>\n        </ul>\n      </article>\n      <article class=\"stop glass\">\n        <p class=\"when\">2021 to 2024</p>\n        <h3>NCC Cadet</h3>\n        <p class=\"org\">ARMY 4T (BTN)</p>\n        <ul>\n          <li>Led a team of 20 cadets during training camps and coordinated team activities.</li>\n          <li>Took part actively in NCC activities, building discipline and teamwork.</li>\n          <li>Sharpened organizational, communication and decision-making skills through leadership roles.</li>\n        </ul>\n      </article>\n    </div>\n    <div class=\"dots\" id=\"dots\"><span>Tekofy</span><span>Winzera</span><span>NCC</span></div>\n  </div>\n</section>\n\n<!-- CERTS -->\n<section class=\"sec\" id=\"certs\">\n  <div class=\"wrap\">\n    <div class=\"certs-head st\"><h2>Certificates</h2></div>\n    <div class=\"fan\" id=\"fan\">\n      <div class=\"cert glass\" data-tilt><div class=\"seal\">AI</div><div><h3>Azure AI</h3><p>Microsoft</p></div><span class=\"glare\"></span></div>\n      <div class=\"cert glass\" data-tilt><div class=\"seal\">Py</div><div><h3>Python</h3><p>NPTEL</p></div><span class=\"glare\"></span></div>\n      <div class=\"cert glass\" data-tilt><div class=\"seal\">Jv</div><div><h3>Java</h3><p>HackerRank</p></div><span class=\"glare\"></span></div>\n      <div class=\"cert glass\" data-tilt><div class=\"seal\">CS</div><div><h3>CSS</h3><p>HackerRank</p></div><span class=\"glare\"></span></div>\n    </div>\n  </div>\n</section>\n\n<!-- CONTACT -->\n<section class=\"sec contact\" id=\"contact\">\n  <div class=\"wrap\"><div class=\"st\"><div class=\"glass panel\">\n    <div class=\"message-form-wrap\">\n      <h2 class=\"message-form-title\">Send me a message</h2>\n      <p class=\"message-form-intro\">Have a project, internship opportunity, or question? Send me a note.</p>\n      <form id=\"message-form\" class=\"message-form\">\n        <div class=\"message-form-grid\"><label>Your name<input name=\"name\" autocomplete=\"name\" maxlength=\"100\" required placeholder=\"Full name\"></label><label>Your email<input name=\"email\" type=\"email\" autocomplete=\"email\" maxlength=\"254\" required placeholder=\"you@example.com\"></label></div>\n        <label>Subject<input name=\"subject\" maxlength=\"180\" required placeholder=\"What would you like to discuss?\"></label>\n        <label>Message<textarea name=\"message\" rows=\"5\" maxlength=\"5000\" required placeholder=\"Write your message here...\"></textarea></label>\n        <input name=\"website\" class=\"message-honeypot\" tabindex=\"-1\" autocomplete=\"off\" aria-hidden=\"true\">\n        <button class=\"btn primary\" type=\"submit\">Send message</button><p id=\"message-form-status\" role=\"status\" aria-live=\"polite\"></p>\n      </form>\n    </div>\n  </div></div></div>\n</section>\n<footer class=\"site-footer\">Yashwanth Thurpati, 2026</footer>\n</main>";


// CMS layer: preserves the original portfolio markup/CSS and only swaps its content.
const escCms=(v:string)=>String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;",'\'':"&#39;"}[m]!));
const cms=loadData();
const setCms=(sel:string,v:string)=>{const e=document.querySelector(sel);if(e)e.textContent=v};
function renderCms(d:SiteData){
  setCms('.status',d.hero.status);
  const name=document.querySelector('.name'); if(name) name.innerHTML=`<span class="ln"><span>${escCms(d.hero.firstName)}</span></span><span class="ln"><span>${escCms(d.hero.lastName)}</span></span>`;
  setCms('.role',d.hero.role); setCms('.sub',d.hero.subtitle);
  const f1=document.querySelector('.float.f1'); if(f1) f1.innerHTML=`<small>Currently</small><strong>${escCms(d.hero.currentTitle)}</strong><span>${escCms(d.hero.currentOrg)}</span>`;
  const tg=document.querySelector('.float.f2 .tg'); if(tg) tg.innerHTML=d.hero.workTags.map(x=>`<em>${escCms(x)}</em>`).join('');
  const facts=document.querySelector('.facts'); if(facts) facts.innerHTML=d.hero.facts.map(x=>`<div><dt>${escCms(x.label)}</dt><dd>${escCms(x.value)}</dd></div>`).join('');
  const cta=document.querySelector('.cta'); if(cta) cta.innerHTML=`<a class="btn primary" href="${escCms(d.hero.primaryHref)}">${escCms(d.hero.primaryLabel)}</a><a class="btn" href="${escCms(d.hero.secondaryHref)}">${escCms(d.hero.secondaryLabel)}</a>`;
  const social=document.querySelector('.social'); if(social) social.innerHTML=d.hero.socials.map(x=>`<a href="${escCms(x.url)}" target="_blank" rel="noopener">${escCms(x.label)}</a>`).join('');
  const heroImg=document.querySelector('.hero .hc-photo img') as HTMLImageElement|null;if(heroImg)heroImg.src=d.hero.photo||'/profile.jpg';const aboutImg=document.querySelector('.about-photo img') as HTMLImageElement|null;if(aboutImg)aboutImg.src=d.about.photo||'/about.jpg';
  const about=document.querySelector('#about .about'); if(about){const right=about.querySelector(':scope > div:last-child') as HTMLElement|null;if(right) right.innerHTML=`<h2>${escCms(d.about.heading)}</h2>${d.about.paragraphs.map(p=>`<p>${escCms(p)}</p>`).join('')}<ul class="edu">${d.about.education.map(e=>`<li><span class="yrs">${escCms(e.years)}</span><div><strong>${escCms(e.title)}</strong><small>${escCms(e.school)}</small></div><span class="score">${escCms(e.score)}</span></li>`).join('')}</ul>`}
  setCms('#skills .pin-head h2',d.skills.heading); setCms('#skills .pin-head .muted',d.skills.intro);
  const work=document.querySelector('#work .wrap'); if(work){
    const head=work.querySelector('.work-head'); if(head){setCms('.work-head h2',d.work.heading);setCms('.work-head p',d.work.intro)}
    const oldProjects=Array.from(work.querySelectorAll('.project'));
    const renderProject=(p:any,i:number)=>{
      const a=document.createElement('article'); a.className='project'+(i%2?' flip':'');
      if(p.image){a.innerHTML=`<div class="mock-col st"><a class="project-preview-link" href="${escCms(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escCms(p.name)} project"><div class="project-image-frame"><img src="${escCms(p.image)}" alt="${escCms(p.name)} project preview" loading="lazy"></div></a></div><div class="st"><h3>${escCms(p.name)}</h3><p class="kind">${escCms(p.kind)}</p><p class="d">${escCms(p.description)}</p><ul>${p.bullets.map((b:string)=>`<li>${escCms(b)}</li>`).join('')}</ul><div class="tags">${p.tags.map((t:string)=>`<span>${escCms(t)}</span>`).join('')}</div><a class="btn primary" href="${escCms(p.url)}" target="_blank" rel="noopener">Open ${escCms(p.name)}</a></div>`}
      else if(i%2===0){a.innerHTML=`<div class="mock-col st"><a class="project-preview-link" href="${escCms(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escCms(p.name)} project"><div class="mock" data-tilt><div class="bar"><i></i><i></i><i></i><span>${escCms(p.mockUrl||p.url)}</span></div><div class="body rx"><aside><b></b><b></b><b></b><b></b></aside><div><div class="stats"><div><small>Listings</small><em></em></div><div><small>Tenants</small><em></em></div><div><small>Rent due</small><em></em></div></div><div class="props"><div class="prop"><div class="ph"></div><i></i><i></i></div><div class="prop"><div class="ph"></div><i></i><i></i></div><div class="prop"><div class="ph"></div><i></i><i></i></div></div><div class="chart"></div></div></div><span class="pop l">Owners, tenants, admins</span><span class="pop r">Installable PWA</span><span class="glare"></span></div></a></div><div class="st"><h3>${escCms(p.name)}</h3><p class="kind">${escCms(p.kind)}</p><p class="d">${escCms(p.description)}</p><ul>${p.bullets.map((b:string)=>`<li>${escCms(b)}</li>`).join('')}</ul><div class="tags">${p.tags.map((t:string)=>`<span>${escCms(t)}</span>`).join('')}</div><a class="btn primary" href="${escCms(p.url)}" target="_blank" rel="noopener">Open ${escCms(p.name)}</a></div>`}
      else {a.innerHTML=`<div class="mock-col st"><a class="project-preview-link" href="${escCms(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escCms(p.name)} project"><div class="mock tf" data-tilt><div class="bar"><i></i><i></i><i></i><span>${escCms(p.mockUrl||p.url)}</span></div><div class="body"><div><div class="tabs"><span class="a">Section A</span><span>Section B</span><span>Section C</span><span class="t">Sectional timer</span></div><div class="q"><i></i><i></i><i style="width:40%"></i></div><div class="opts"><div>A</div><div class="sel">B</div><div>C</div><div>D</div></div></div><div class="pal"></div></div><span class="pop l">Generated from a PDF</span><span class="pop r">Negative marking</span><span class="glare"></span></div></a></div><div class="st"><h3>${escCms(p.name)}</h3><p class="kind">${escCms(p.kind)}</p><p class="d">${escCms(p.description)}</p><ul>${p.bullets.map((b:string)=>`<li>${escCms(b)}</li>`).join('')}</ul><div class="tags">${p.tags.map((t:string)=>`<span>${escCms(t)}</span>`).join('')}</div><a class="btn primary" href="${escCms(p.url)}" target="_blank" rel="noopener">Open ${escCms(p.name)}</a></div>`}
      return a;
    };
    oldProjects.forEach((el,i)=>{if(i>=d.work.projects.length)el.remove()});
    d.work.projects.forEach((p,i)=>{const current=work.querySelectorAll('.project')[i] as HTMLElement|null;if(current){const fresh=renderProject(p,i);current.replaceWith(fresh)}else{work.appendChild(renderProject(p,i))}});
  }
  setCms('#journey .pin-head h2',d.experience.heading); setCms('#journey .pin-head .muted',d.experience.intro);
  const stops=document.querySelector('#stops'); if(stops) stops.innerHTML=d.experience.items.map(e=>`<article class="stop glass"><p class="when">${escCms(e.when)}</p><h3>${escCms(e.title)}</h3><p class="org">${escCms(e.org)}</p><ul>${e.bullets.map(b=>`<li>${escCms(b)}</li>`).join('')}</ul></article>`).join('');
  const dots=document.querySelector('#dots'); if(dots) dots.innerHTML=d.experience.items.map(e=>`<span>${escCms(e.org)}</span>`).join('');
  setCms('#certs .certs-head h2',d.certificates.heading); const fan=document.querySelector('#fan'); if(fan) fan.innerHTML=d.certificates.items.map(c=>{const href=c.url||c.image||'';const logo=c.logo?`style="--issuer-logo:url('${escCms(c.logo)}')"`:'';return `<a class="cert glass" data-tilt ${logo} href="${escCms(href||'#certs')}" ${href?'target="_blank" rel="noopener noreferrer"':'aria-label="${escCms(c.title)} certificate; add a certificate URL in admin to open it"'}>${c.image?`<img class="cert-thumb" src="${escCms(c.image)}" alt="${escCms(c.title)} certificate preview" loading="lazy">`:''}<div class="cert-watermark">${escCms(c.issuer)}</div><div class="seal">${escCms(c.mark)}</div><div class="cert-copy"><h3>${escCms(c.title)}</h3><p>${escCms(c.issuer)}</p><small>${href?'View certificate':'Certificate link not added yet'}</small></div><span class="glare"></span></a>`}).join('');fan.querySelectorAll('.cert[href="#certs"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));

}
renderCms(cms);

// Backend-free contact form: FormSubmit handles delivery without SMTP or our own server.
// First submission triggers an activation email from FormSubmit; confirm it to enable delivery.
const messageForm=document.querySelector<HTMLFormElement>('#message-form');
messageForm?.addEventListener('submit',async(event)=>{
  event.preventDefault();
  const status=document.querySelector<HTMLElement>('#message-form-status');
  const button=messageForm.querySelector<HTMLButtonElement>('button[type="submit"]');
  if(!status||!button)return;
  const original=button.textContent||'Send message';button.disabled=true;button.textContent='Sending…';status.textContent='';status.className='';
  try{
    const formData=new FormData(messageForm);
    if(String(formData.get('website')||'').trim()) return;
    const payload={
      name:String(formData.get('name')||''),
      email:String(formData.get('email')||''),
      subject:String(formData.get('subject')||'Portfolio contact form'),
      message:String(formData.get('message')||''),
      _subject:`Portfolio message: ${String(formData.get('subject')||'New enquiry')}`,
      _template:'table',
      _captcha:'true'
    };
    const response=await fetch('https://formsubmit.co/ajax/thurpatiyashwanth@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)});
    const result=await response.json().catch(()=>({}));
    if(!response.ok||String(result.success).toLowerCase()!=='true')throw new Error(result.message||'Could not send your message. Please email directly instead.');
    messageForm.reset();
    status.textContent=''; status.className='';
    showMessageReceivedPopup(cms.contact);
  }catch(error){status.textContent=error instanceof Error?error.message:'Could not send your message. Please try again.';status.className='error'}
  finally{button.disabled=false;button.textContent=original}
});

function showMessageReceivedPopup(contact:SiteData["contact"]){
  const links=contact.links;
  document.querySelector('#message-received-modal')?.remove();
  const safeLinks=links.filter(x=>x.label.trim()&&/^https?:\/\//i.test(x.url.trim()));
  const icons:Record<string,string>={linkedin:'https://cdn.simpleicons.org/linkedin/0A66C2',github:'https://cdn.simpleicons.org/github/F3EFE7',portfolio:'https://cdn.simpleicons.org/googlechrome/F3EFE7',instagram:'https://cdn.simpleicons.org/instagram/E4405F',youtube:'https://cdn.simpleicons.org/youtube/FF0033',website:'https://cdn.simpleicons.org/googlechrome/F3EFE7'};
  const socialHtml=safeLinks.map(x=>{
    const key=x.label.toLowerCase(); const iconUrl=x.logo||icons[key]||'https://cdn.simpleicons.org/link/FFB35C';
    return `<a class="received-social" href="${escapePopupHtml(x.url)}" target="_blank" rel="noopener noreferrer"><span class="received-social-icon"><img src="${iconUrl}" alt="" loading="lazy"></span><span>${escapePopupHtml(x.label)}</span><span class="received-social-arrow">↗</span></a>`;
  }).join('');
  const modal=document.createElement('div');modal.id='message-received-modal';modal.className='received-overlay';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-labelledby','received-title');
  modal.innerHTML=`<div class="received-card"><button class="received-close" type="button" aria-label="Close dialog">×</button><div class="received-check"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 25l8 8 17-18" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><p class="received-eyebrow">${escapePopupHtml(contact.popupEyebrow)}</p><h2 id="received-title">${escapePopupHtml(contact.popupTitle).replace(/Yashwanth\.?/g,'<span>Yashwanth.</span>')}</h2><p class="received-copy">${escapePopupHtml(contact.popupMessage)}</p><div class="received-divider"><span>While you're here</span></div><p class="received-social-heading">${escapePopupHtml(contact.popupSocialHeading)}</p><div class="received-socials">${socialHtml||'<p class="received-copy">Thanks for visiting my portfolio.</p>'}</div><button type="button" class="received-done">${escapePopupHtml(contact.popupButton)} <span>↗</span></button><p class="received-foot">${escapePopupHtml(contact.popupFooter)}</p></div>`;
  document.body.appendChild(modal);document.body.classList.add('modal-open');
  const close=()=>{modal.remove();document.body.classList.remove('modal-open')};
  modal.querySelector('.received-close')?.addEventListener('click',close);modal.querySelector('.received-done')?.addEventListener('click',close);
  modal.addEventListener('click',e=>{if(e.target===modal)close()});
  document.addEventListener('keydown',function escClose(e){if(e.key==='Escape'&&document.body.contains(modal)){close();document.removeEventListener('keydown',escClose)}});
  (modal.querySelector('.received-close') as HTMLButtonElement|null)?.focus();
}
function escapePopupHtml(value:string){return value.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]!))}

(() => {
const $ = <T extends HTMLElement = HTMLElement>(s: string, c: ParentNode = document): T | null =>
  c.querySelector(s) as T | null;
const $$ = <T extends HTMLElement = HTMLElement>(s: string, c: ParentNode = document): T[] =>
  Array.from(c.querySelectorAll(s)) as T[];
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v)), lerp=(a,b,t)=>a+(b-a)*t;
const sstep=(a,b,x)=>{x=clamp((x-a)/(b-a),0,1);return x*x*(3-2*x)};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce) document.documentElement.classList.add('reduce');
const absTop=el=>{let y=0;while(el){y+=el.offsetTop;el=el.offsetParent}return y};

let vw=innerWidth, vh=innerHeight, docH=1, cur=scrollY, vel=0, mx=0, my=0, mxT=0, myT=0, usedPointer=false;

/* ---------- generated mock bits ---------- */
(() => { const ch=$<HTMLElement>('#chart'); if(ch)[40,62,48,80,58,92,70,100].forEach(h=>{const b=document.createElement('b');b.style.height=h+'%';ch.appendChild(b)});
  const pal=$<HTMLElement>('#pal'); if(pal){const st: Record<number, string>={1:'ok',2:'ok',3:'fl',4:'ok',5:'cur',9:'ok',10:'fl'};
  for(let i=1;i<=16;i++){const b=document.createElement('b');b.textContent=String(i);if(st[i])b.className=st[i];pal.appendChild(b)}}})();

/* ---------- skills ring ---------- */
const CATS: Record<string,{c:string,l:string}>={Languages:{c:'#2f6bff',l:'Languages'},Web:{c:'#a9cff6',l:'Web development'},Familiar:{c:'#ffb35c',l:'Familiar with'},Tools:{c:'#f3efe7',l:'Tools and cloud'}};
const catColors=['#2f6bff','#a9cff6','#ffb35c','#f3efe7','#79e2c0','#d29cff'];
loadData().skills.items.forEach(s=>{if(!CATS[s.category])CATS[s.category]={c:catColors[Object.keys(CATS).length%catColors.length],l:s.category}});
const SK=loadData().skills.items.map(s=>[s.name,s.category,s.mark] as [string,string,string]);
const ring=$<HTMLDivElement>('#ring')!, N=SK.length, step=N?360/N:0; let R=380;
const tiles=SK.map(([n,c,w],i)=>{const el=document.createElement('div');el.className='tile';el.setAttribute('role','listitem');
  el.style.setProperty('--c',CATS[c].c);el.innerHTML=`<span class="wm" aria-hidden="true"></span><span class="cat"></span><strong></strong>`;
  $('.wm',el).textContent=w;$('.cat',el).textContent=CATS[c].l;$('strong',el).textContent=n;ring.appendChild(el);return {el,cat:c}});
const legend=$<HTMLUListElement>('#legend')!;
Object.entries(CATS).forEach(([k,v])=>{const li=document.createElement('li');li.dataset.k=k;li.style.setProperty('--c',v.c);li.innerHTML='<i></i><span></span>';$('span',li).textContent=v.l;legend.appendChild(li)});
const legendEls=$$('li',legend);
function ringMetrics(){
  const tw=vw<700?122:156, th=vw<700?160:200;
  ring.style.setProperty('--tw',tw+'px');ring.style.setProperty('--th',th+'px');
  R=N>0?Math.round(tw/2/Math.tan(Math.PI/N)*1.1):0;
  tiles.forEach((t,i)=>{t.el.style.transform=`rotateY(${i*step}deg) translateZ(${R}px)`});
}

/* ---------- tilt on hover ---------- */
$$('[data-tilt]').forEach(el=>{
  el.addEventListener('pointermove',e=>{const pe=e as PointerEvent;if(pe.pointerType==='touch')return;const r=el.getBoundingClientRect();
    const x=(pe.clientX-r.left)/r.width-.5,y=(pe.clientY-r.top)/r.height-.5;
    el.style.setProperty('--ry',(x*16).toFixed(2)+'deg');el.style.setProperty('--rx',(-y*16).toFixed(2)+'deg');
    el.style.setProperty('--gx',((x+.5)*100).toFixed(1)+'%');el.style.setProperty('--gy',((y+.5)*100).toFixed(1)+'%');el.classList.add('hot')});
  el.addEventListener('pointerleave',()=>{el.style.setProperty('--ry','0deg');el.style.setProperty('--rx','0deg');el.classList.remove('hot')});
});
addEventListener('pointermove',e=>{mxT=e.clientX/vw*2-1;myT=e.clientY/vh*2-1;usedPointer=true},{passive:true});

/* ---------- measuring ---------- */
let stItems: Array<{el: HTMLElement; top: number; h: number}> = [], pins: Record<string,{top:number;h:number}> = {}, secTops: Array<{id:string;top:number}> = [], fanEl=$<HTMLElement>('#fan')!, fanTop=0, fanH=1;
const heroCard=$<HTMLElement>('#heroCard')!, heroCopy=$<HTMLElement>('#heroCopy')!, topbar=$<HTMLElement>('#topbar')!, railFill=$<HTMLElement>('#railFill')!, railLinks=$$<HTMLAnchorElement>('#rail a');
const stops=$$<HTMLElement>('.stop'), dotEls=$$<HTMLSpanElement>('#dots span');
function measure(){
  vw=innerWidth;vh=innerHeight;docH=document.documentElement.scrollHeight;
  stItems=$$<HTMLElement>('.st').map(el=>({el,top:absTop(el),h:el.offsetHeight}));
  $$<HTMLElement>('[data-pin]').forEach(s=>{pins[s.dataset.pin]={top:absTop(s),h:s.offsetHeight}});
  secTops=$$<HTMLElement>('main section[id]').map(s=>({id:s.id,top:absTop(s)}));
  fanTop=absTop(fanEl);fanH=fanEl.offsetHeight;
  ringMetrics();
  if(gl) gl.resize();
}

/* ---------- three.js scene ---------- */
type GLController = {
  resize: () => void;
  frame: (t: number, p: number) => void;
};
let gl: GLController | null = null;
function init3D(){
  const canvas=$<HTMLCanvasElement>('#gl')!;
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
  renderer.setSize(vw,vh,false);
  const scene=new THREE.Scene();
  scene.fog=new THREE.FogExp2(0x060e26,.021);
  const camera=new THREE.PerspectiveCamera(58,vw/vh,.1,220);
  scene.add(camera);
  // stars
  const PN=vw<700?1300:2400, pos=new Float32Array(PN*3), col=new Float32Array(PN*3);
  const pal=[new THREE.Color(0xa9cff6),new THREE.Color(0xffffff),new THREE.Color(0xffb35c),new THREE.Color(0x2f6bff)];
  for(let i=0;i<PN;i++){const a=Math.random()*Math.PI*2, r=3+Math.pow(Math.random(),.6)*28;
    pos[i*3]=Math.cos(a)*r;pos[i*3+1]=Math.sin(a)*r*.7;pos[i*3+2]=10-Math.random()*108;
    const c=pal[Math.random()<.5?0:Math.floor(Math.random()*4)];col[i*3]=c.r;col[i*3+1]=c.g;col[i*3+2]=c.b}
  const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));pg.setAttribute('color',new THREE.BufferAttribute(col,3));
  const points=new THREE.Points(pg,new THREE.PointsMaterial({size:.075,sizeAttenuation:true,vertexColors:true,transparent:true,opacity:.9,depthWrite:false,blending:THREE.AdditiveBlending}));
  scene.add(points);

  let rollS=0;
  gl={
    resize(){renderer.setSize(vw,vh,false);camera.aspect=vw/vh;camera.updateProjectionMatrix()},
    frame(t,p){
      camera.position.z=8-p*92;
      camera.position.x=lerp(camera.position.x,mx*.7,.05);
      camera.position.y=lerp(camera.position.y,-my*.45,.05);
      rollS=lerp(rollS,clamp(vel*.0005,-.14,.14),.1);
      camera.rotation.z=rollS;camera.rotation.y=-mx*.05;camera.rotation.x=my*.03;
      points.rotation.z=t*.00002+p*.6;
      renderer.render(scene,camera);
    }
  };
}
if(!reduce){
  try { init3D(); }
  catch(e){ gl=null; document.documentElement.classList.add('no-gl'); }
}else{ document.documentElement.classList.add('no-gl'); }

/* ---------- frame loop ---------- */
function pinProg(k){const o=pins[k];return o?clamp((cur-o.top)/Math.max(1,o.h-vh),0,1):0}
function frame(t){
  const tgt=scrollY;
  cur=reduce?tgt:cur+(tgt-cur)*.1;
  vel=reduce?0:(tgt-cur);
  mx=lerp(mx,usedPointer?mxT:Math.sin(t*.0006)*.5,.06);
  my=lerp(my,usedPointer?myT:Math.cos(t*.0005)*.25,.06);
  const p=docH>vh?clamp(cur/(docH-vh),0,1):0;

  topbar.classList.toggle('solid',tgt>40);
  railFill.style.transform=`scaleY(${p.toFixed(4)})`;
  let act='top';for(const s of secTops){if(s.top<=tgt+vh*.45)act=s.id}
  railLinks.forEach(a=>a.classList.toggle('on',a.dataset.s===act));

  if(!reduce){
    // hero
    const h=clamp(cur/vh,0,1.3);
    heroCopy.style.transform=`translate3d(0,${(-h*70).toFixed(1)}px,${(-h*280).toFixed(1)}px) rotateX(${(h*8).toFixed(2)}deg)`;
    heroCopy.style.opacity=clamp(1-h*1.15,0,1).toFixed(3);
    const sway=usedPointer?0:Math.sin(t*.0009)*5;
    heroCard.style.transform=`translate3d(0,${(-h*90).toFixed(1)}px,${(-h*200).toFixed(1)}px) rotateY(${(mx*12+sway-6).toFixed(2)}deg) rotateX(${(-my*9).toFixed(2)}deg) rotateZ(${(h*-6).toFixed(2)}deg)`;

    // scroll tilt
    for(const o of stItems){
      const c=o.top+o.h/2-cur-vh/2, p2=clamp(c/((vh+o.h)/2),-1,1), a=Math.abs(p2);
      o.el.style.transform=`perspective(1400px) translate3d(0,${(p2*30).toFixed(1)}px,${(-a*140).toFixed(1)}px) rotateX(${(p2*12).toFixed(2)}deg)`;
      o.el.style.opacity=(1-sstep(.62,1,a)*.75).toFixed(3)}

    // certs fan
    const cp=clamp((fanTop+fanH/2-cur-vh/2)/((vh+fanH)/2),-1,1), ca=Math.abs(cp);
    $$<HTMLElement>('.cert').forEach((c,i)=>{c.style.transform=`translate3d(0,${(ca*50).toFixed(1)}px,${(-ca*140).toFixed(1)}px) rotateY(${((i-1.5)*-26*ca).toFixed(2)}deg) rotateX(${(cp*14).toFixed(2)}deg)`});

    // skills ring
    const sp=pinProg('skills'), r=sp*(N-1)*step;
    ring.style.transform=`translateZ(${-R}px) rotateX(${(-9+my*4).toFixed(2)}deg) rotateY(${(-r+mx*5).toFixed(2)}deg)`;
    let actCat='';
    tiles.forEach((tl,i)=>{const d=((i*step-r+540)%360)-180,a=Math.abs(d);
      tl.el.style.setProperty('--o',(.26+.74*(1-clamp(a/150,0,1))).toFixed(2));
      const on=a<step/2;tl.el.classList.toggle('on',on);if(on)actCat=tl.cat});
    legendEls.forEach(li=>li.classList.toggle('on',li.dataset.k===actCat));

    // experience fly-through
    const jp=pinProg('journey'), tt=jp*(stops.length-1);
    stops.forEach((s,i)=>{const d=i-tt;let z,y,o,b,rx=0;
      if(d>=0){z=-d*520;y=d*46;o=1-clamp(d/1.4,0,1)*.88;b=d*2.2}
      else{z=-d*820;y=d*70;o=1-clamp(-d*2.4,0,1);b=-d*9;rx=d*10}
      s.style.transform=`translate(-50%,-50%) translate3d(0,${y.toFixed(1)}px,${z.toFixed(1)}px) rotateX(${rx.toFixed(2)}deg)`;
      s.style.opacity=o.toFixed(3);s.style.filter=b>.15?`blur(${b.toFixed(1)}px)`:'none';
      s.style.zIndex=String(100-Math.round(d*10));s.style.pointerEvents=Math.abs(d)<.5?'auto':'none'});
    const ai=Math.round(tt);dotEls.forEach((e,i)=>e.classList.toggle('on',i===ai));
  }

  if(gl) gl.frame(t,p);
  requestAnimationFrame(frame);
}

addEventListener('resize',measure,{passive:true});
addEventListener('load',measure);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);
if('ResizeObserver' in window)new ResizeObserver(()=>{const h=document.documentElement.scrollHeight;if(Math.abs(h-docH)>4)measure()}).observe(document.body);
measure();
requestAnimationFrame(frame);
})();
