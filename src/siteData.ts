export type Education = { years:string; title:string; school:string; score:string };
export type Skill = { name:string; category:string; mark:string };
export type Project = { name:string; kind:string; description:string; bullets:string[]; tags:string[]; url:string; mockUrl:string; image?:string };
export type Experience = { when:string; title:string; org:string; bullets:string[] };
export type Certificate = { mark:string; title:string; issuer:string; url?:string; image?:string; logo?:string };
export type SiteData = {
  hero:{ currentTitle:string; currentOrg:string; workTags:string[]; facts:{label:string;value:string}[]; status:string; firstName:string; lastName:string; role:string; subtitle:string; primaryLabel:string; primaryHref:string; secondaryLabel:string; secondaryHref:string; socials:{label:string;url:string}[]; photo:string };
  about:{ heading:string; paragraphs:string[]; education:Education[]; photo?:string };
  skills:{ heading:string; intro:string; items:Skill[] };
  work:{ heading:string; intro:string; projects:Project[] };
  experience:{ heading:string; intro:string; items:Experience[] };
  certificates:{ heading:string; items:Certificate[] };
  contact:{ heading:string; lead:string; email:string; phone:string; links:{label:string;url:string;logo?:string}[]; footer:string; popupEyebrow:string; popupTitle:string; popupMessage:string; popupSocialHeading:string; popupButton:string; popupFooter:string };
};

export const defaultData:SiteData = {
 hero:{currentTitle:"Frontend and SEO Intern",currentOrg:"Tekofy Technologies",workTags:["Python","React","PostgreSQL"],facts:[{label:"Education",value:"B.Tech in Computer Science and Engineering, CGPA 8.4/10"},{label:"Certified in",value:"Azure AI, Python, Java and CSS"},{label:"Leadership",value:"Led a team of 20 NCC cadets"}],status:"Open to software internships",firstName:"Yashwanth",lastName:"Thurpati",role:"Frontend developer and computer science student",subtitle:"I build full-stack web apps, from the interface to the PostgreSQL database behind it, and ship them as installable PWAs.",primaryLabel:"View projects",primaryHref:"#work",secondaryLabel:"Get in touch",secondaryHref:"#contact",socials:[
  {label:"LinkedIn",url:"https://www.linkedin.com/in/yashwanth0415/"},{label:"GitHub",url:"https://github.com/yashwanth0415"},{label:"Portfolio",url:"https://yashwanth0415.github.io/Portfolio/"}
 ],photo:"/profile.jpg"},
 about:{heading:"About me",photo:"/about.jpg",paragraphs:[
  "I'm a B.Tech student in Computer Science and Engineering at Malla Reddy Deemed University. So far that has meant a rental platform that serves owners, tenants and admins, and an exam engine that turns a PDF into a timed test.",
  "Right now I'm a Frontend Developer and SEO intern at Tekofy Technologies, building responsive React sites and helping people find them. I'm looking for a software internship where I can work in Python and on the web."
 ],education:[
  {years:"2023 to 2027",title:"B.Tech, Computer Science and Engineering",school:"Malla Reddy Deemed University",score:"CGPA 8.4/10"},
  {years:"2021 to 2023",title:"Intermediate (MPC), TSBIE",school:"Resonance College",score:"948/1000"},
  {years:"2011 to 2021",title:"Secondary education, CBSE",school:"SR Prime School",score:"455/500"}
 ]},
 skills:{heading:"Toolkit",intro:"Scroll to turn the ring. Languages first, then the web stack, then the tools I use to ship.",items:[
  {name:"Python",category:"Languages",mark:"Py"},{name:"Java",category:"Languages",mark:"Jv"},{name:"C",category:"Languages",mark:"C"},
  {name:"HTML",category:"Web",mark:"</>"},{name:"CSS",category:"Web",mark:"{ }"},{name:"JavaScript",category:"Web",mark:"JS"},
  {name:"React.js",category:"Familiar",mark:"Rx"},{name:"Node.js",category:"Familiar",mark:"No"},{name:"SQL",category:"Familiar",mark:"Sq"},{name:"MongoDB",category:"Familiar",mark:"Mg"},
  {name:"Git",category:"Tools",mark:"Gt"},{name:"GitHub",category:"Tools",mark:"Gh"},{name:"VS Code",category:"Tools",mark:"VS"},{name:"Render",category:"Tools",mark:"Rn"},{name:"Vercel",category:"Tools",mark:"Vc"},{name:"AWS",category:"Tools",mark:"Aw"}
 ]},
 work:{heading:"Selected work",intro:"Two full-stack products, each built as an installable, responsive web app.",projects:[
  {name:"RENFLIX",kind:"Property rental management system",description:"One platform for property owners, tenants and administrators to run rentals without the paperwork.",bullets:["Property listing management and user authentication","Rental workflows and role-based dashboards","PostgreSQL backend, deployed on cloud hosting"],tags:["Full-stack","PostgreSQL","PWA","Authentication"],url:"https://renflix.onrender.com/",mockUrl:"renflix.onrender.com",image:""},
  {name:"TESTFORGE AI",kind:"AI-powered exam generation platform",description:"Upload a PDF and get a multiple-choice test back, then run it like a real exam.",bullets:["AI question generation from uploaded documents","Sections, marks, negative marking and sectional timing","Automated exam processing with PostgreSQL-backed data"],tags:["AI","PostgreSQL","PWA","PDF upload"],url:"https://testforge415.onrender.com/",mockUrl:"testforge415.onrender.com",image:""}
 ]},
 experience:{heading:"Experience",intro:"Scroll to move through the timeline, newest first.",items:[
  {when:"May 2026 to present",title:"Frontend Developer and SEO Intern",org:"Tekofy Technologies",bullets:["Build and maintain responsive websites with HTML, CSS, JavaScript and React.","Work with the development team on user experience, site performance and SEO.","Implement modern UI components and improve visibility through search engine optimization."]},
  {when:"2023 to 2024",title:"Business Associate",org:"Winzera Pvt Ltd",bullets:["Supported day-to-day business operations and client communication.","Worked with cross-functional teams to make operations run more efficiently.","Built teamwork, problem-solving and professional communication skills."]},
  {when:"2021 to 2024",title:"NCC Cadet",org:"ARMY 4T (BTN)",bullets:["Led a team of 20 cadets during training camps and coordinated team activities.","Took part actively in NCC activities, building discipline and teamwork.","Sharpened organizational, communication and decision-making skills through leadership roles."]}
 ]},
 certificates:{heading:"Certificates",items:[
  {mark:"AI",title:"Azure AI",issuer:"Microsoft",url:"",image:"",logo:"https://cdn.simpleicons.org/microsoft/5E5E5E"},{mark:"Py",title:"Python",issuer:"NPTEL",url:"",image:"",logo:"https://www.nptel.ac.in/assets/images/nptel-logo.png"},{mark:"Jv",title:"Java",issuer:"HackerRank",url:"",image:"",logo:"https://cdn.simpleicons.org/hackerrank/00EA64"},{mark:"CS",title:"CSS",issuer:"HackerRank",url:"",image:"",logo:"https://cdn.simpleicons.org/hackerrank/00EA64"}
 ]},
 contact:{heading:"Let's build something together.",lead:"I'm open to software internships. If you're working in Python or on the web, I'd like to hear about it.",email:"thurpatiyashwanth@gmail.com",phone:"+91 98499 54617",links:[
  {label:"LinkedIn",url:"https://www.linkedin.com/in/yashwanth0415/",logo:"https://cdn.simpleicons.org/linkedin/0A66C2"},{label:"GitHub",url:"https://github.com/yashwanth0415",logo:"https://cdn.simpleicons.org/github/F3EFE7"},{label:"Portfolio",url:"https://yashwanth0415.github.io/Portfolio/",logo:"https://cdn.simpleicons.org/googlechrome/F3EFE7"}
 ],footer:"Yashwanth Thurpati, 2026",popupEyebrow:"MESSAGE SENT SUCCESSFULLY",popupTitle:"Message received by Yashwanth.",popupMessage:"Thank you for reaching out. I appreciate your time and look forward to connecting with you.",popupSocialHeading:"Connect with me",popupButton:"Back to portfolio",popupFooter:"Yashwanth Thurpati · Developer & Creator"}
};

const KEY="yashwanth_portfolio_cms_v1";
export function loadData():SiteData{
 try{
  const raw=localStorage.getItem(KEY);
  if(raw){
   const saved=JSON.parse(raw) as Partial<SiteData>;
   // Merge defaults so older saved CMS data gains newly added image/certificate fields.
   return {
    ...structuredClone(defaultData), ...saved,
    hero:{...structuredClone(defaultData.hero),...(saved.hero||{})},
    about:{...structuredClone(defaultData.about),...(saved.about||{})},
    skills:{...structuredClone(defaultData.skills),...(saved.skills||{})},
    work:{...structuredClone(defaultData.work),...(saved.work||{}),projects:(saved.work?.projects||defaultData.work.projects).map((p:any)=>({...p,image:p.image||''}))},
    experience:{...structuredClone(defaultData.experience),...(saved.experience||{})},
    certificates:{...structuredClone(defaultData.certificates),...(saved.certificates||{}),items:(saved.certificates?.items||defaultData.certificates.items).map((c:any)=>({...c,url:c.url||'',image:c.image||'',logo:c.logo||defaultData.certificates.items.find((d)=>d.title===c.title&&d.issuer===c.issuer)?.logo||''}))},
    contact:{...structuredClone(defaultData.contact),...(saved.contact||{}),links:(saved.contact?.links||defaultData.contact.links).map((x:any)=>({...x,logo:x.logo||defaultData.contact.links.find(d=>d.label===x.label)?.logo||""}))}
   } as SiteData;
  }
 }catch{}
 return structuredClone(defaultData);
}
export function saveData(data:SiteData){localStorage.setItem(KEY,JSON.stringify(data));}
export function resetData(){localStorage.removeItem(KEY);}
