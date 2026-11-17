import { useEffect, useState } from 'react';
const target = Date.parse('2026-12-12T19:00:00+05:30');
export default function Countdown() {
  const [left, setLeft] = useState(Math.max(0,target-Date.now()));
  useEffect(()=>{const id=setInterval(()=>setLeft(Math.max(0,target-Date.now())),1000);return()=>clearInterval(id)},[]);
  if (!left) return <p className="arrived">The celebration has begun. We can't wait to see you.</p>;
  const s=Math.floor(left/1000); const values=[['Days',Math.floor(s/86400)],['Hours',Math.floor(s%86400/3600)],['Minutes',Math.floor(s%3600/60)],['Seconds',s%60]];
  return <div className="countdown">{values.map(([label,n])=><div key={label} className="count-cell"><strong key={n}>{String(n).padStart(2,'0')}</strong><span>{label}</span></div>)}</div>
}
