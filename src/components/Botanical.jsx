const blooms = [{ x: 40, y: 185, r: 28 }, { x: 126, y: 128, r: 24 }, { x: 190, y: 68, r: 19 }];
function Peony({ x, y, r, index }) {
  const outer = Array.from({ length: 9 }, (_, i) => i * 40);
  const inner = Array.from({ length: 6 }, (_, i) => i * 60 + 10);
  const palette = index === 0 ? ['#e9b5c0', '#f4d1d6'] : ['#edbec7', '#fae0e1'];
  return <g transform={`translate(${x} ${y})`}>
    <ellipse rx={r * .95} ry={r * .66} fill={palette[1]} opacity=".4"/>
    {outer.map((a, i) => <ellipse key={`o${i}`} cx="0" cy={-r * .37} rx={r * .28} ry={r * .56} fill={i % 2 ? palette[0] : '#f5d5da'} fillOpacity=".66" stroke="#d9a6b1" strokeOpacity=".62" strokeWidth=".7" transform={`rotate(${a})`}/>)}
    {inner.map((a, i) => <ellipse key={`i${i}`} cx="0" cy={-r * .21} rx={r * .22} ry={r * .38} fill={i % 2 ? '#e8b3bd' : '#f9e5e5'} fillOpacity=".86" stroke="#c99599" strokeOpacity=".56" strokeWidth=".65" transform={`rotate(${a})`}/>)}
    <circle r={r * .18} fill="#b98e67" opacity=".72"/><circle r={r * .09} fill="#fff3d5"/><circle cx={r * .36} cy={-r * .28} r="2" fill="#fffefa" opacity=".9"/>
  </g>;
}
export default function Botanical({ className = '', flip = false, style = {} }) {
  return <svg className={`botanical ${className}`} viewBox="0 0 240 280" aria-hidden="true" focusable="false" style={{ ...style, ...(flip ? { transform: 'scaleX(-1)' } : {}) }}>
    <g fill="none" stroke="#a98269" strokeWidth="1.25" opacity=".72">
      <path d="M12 273C62 226 54 174 104 139c41-29 62-66 73-91 8-19 18-31 39-43"/>
      <path d="M48 235c-27-7-43-24-47-46 23 1 41 13 51 37M67 204c-1-24 8-43 30-57 8 23 1 43-21 60M85 169c24-23 51-28 74-17-17 21-39 29-67 23M110 137c-20-14-29-32-24-55 20 9 31 26 31 52M137 104c20-18 43-23 64-13-15 20-35 28-62 19M162 71c-7-20-2-39 13-56 13 19 13 38-6 59"/>
      <path d="M35 247c-5-18 0-34 14-48M74 190c-3-16 2-30 14-42M119 129c5-14 16-24 32-30M151 83c10-14 24-22 41-23"/>
    </g>
    <g fill="#c6a467" opacity=".87">
      <path d="M48 226c-11-9-19-13-31-15 4 12 12 19 26 22 4 0 6-2 5-7ZM84 176c-6-14-7-24-4-36 10 8 14 18 12 32-1 4-4 5-8 4ZM145 99c-14-4-23-4-35 0 10 8 20 10 34 6 4-2 5-4 1-6ZM168 61c1-14 5-24 14-33 4 13 2 24-7 35-3 3-6 2-7-2Z"/>
      <path d="M24 210l24 22M82 140l5 37M110 176l38-37M181 61l-17 21" stroke="#8e744e" strokeWidth=".8" fill="none"/>
      <circle cx="217" cy="43" r="2.5"/><circle cx="193" cy="115" r="2"/><circle cx="20" cy="164" r="2"/>
    </g>
    {blooms.map((b, i) => <Peony key={i} {...b} index={i}/>)}
    <g fill="#fffefa" opacity=".9"><circle cx="34" cy="180" r="2.3"/><circle cx="122" cy="125" r="2"/><circle cx="189" cy="65" r="1.7"/><circle cx="204" cy="88" r="1.4"/></g>
  </svg>;
}
