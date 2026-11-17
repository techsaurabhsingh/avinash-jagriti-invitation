import React from 'react';
import '@fontsource/playfair-display/600.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/lato/400.css';
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion';
import Botanical from '../src/components/Botanical.jsx';
import Ganesha from '../src/components/Ganesha.jsx';

const C = { pink:'#f8dde3', rose:'#d9a6b1', gold:'#d6b779', brown:'#694a50', ivory:'#fff8ee', antique:'#b99a62' };
const script = { display:'flex', flexDirection:'column', alignItems:'center', gap:25, width:'100%', position:'relative', zIndex:2 };
const displayFont = 'Playfair Display, Georgia, serif';
const bodyFont = 'Cormorant Garamond, Georgia, serif';
const fade = (frame, duration) => interpolate(frame,[0,20,duration-20,duration],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.ease});

function Scene({children,duration}) {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{opacity:fade(frame,duration),background:`radial-gradient(ellipse at 50% 42%,${C.ivory} 0%,#fbefef 48%,${C.pink} 100%)`,justifyContent:'center',alignItems:'center',textAlign:'center',color:C.brown,fontFamily:bodyFont,padding:92,boxSizing:'border-box'}}>
    <div style={{position:'absolute',inset:34,border:`2px solid ${C.gold}`,outline:`1px solid ${C.rose}`,outlineOffset:9,borderRadius:18,opacity:.85}}/>
    <div style={{position:'absolute',inset:51,border:`1px solid ${C.gold}8c`,borderRadius:12}}/>
    <Botanical style={{position:'absolute',top:27,left:12,width:290,opacity:.42}}/>
    <Botanical flip style={{position:'absolute',right:12,bottom:27,width:290,opacity:.42}}/>
    <div style={{position:'absolute',top:61,fontSize:31,color:C.antique}}>✦ &nbsp; ❀ &nbsp; ✦</div>
    {children}
  </AbsoluteFill>;
}
function Divider(){return <div style={{display:'flex',alignItems:'center',gap:18,color:C.antique,fontSize:25}}><span style={{width:95,height:1,background:C.gold}}/>❀<span style={{width:95,height:1,background:C.gold}}/></div>}

function EnvelopeCover(){return <div style={{position:'relative',width:650,height:390,marginTop:28,filter:'drop-shadow(0 24px 20px #694a5033)'}}>
  <div style={{position:'absolute',inset:'80px 0 0',border:`2px solid ${C.antique}`,borderRadius:6,background:'repeating-linear-gradient(2deg,#f7dce1 0px,#fbe8e9 3px,#f3d4da 6px)'}}/>
  <div style={{position:'absolute',top:80,left:0,width:'100%',height:250,background:'linear-gradient(145deg,#fff0ef,#edc1cb)',border:`2px solid ${C.antique}`,clipPath:'polygon(0 0,100% 0,50% 100%)'}}/>
  <div style={{position:'absolute',top:280,left:'50%',width:100,height:100,borderRadius:'50%',transform:'translateX(-50%)',display:'grid',placeItems:'center',border:`4px double #f4dda6`,background:'radial-gradient(circle at 32% 24%,#997048,#604736 78%)',boxShadow:'0 5px 13px #694a5040'}}><img src={staticFile('images/aj-monogram.png')} style={{width:88,height:86,objectFit:'contain',mixBlendMode:'screen'}}/></div>
  <div style={{position:'absolute',top:101,left:24,color:'#bc9282',fontSize:30}}>❀</div><div style={{position:'absolute',top:101,right:24,color:'#bc9282',fontSize:30}}>❀</div>
</div>}

function OpeningEnvelope(){
  const f=useCurrentFrame();
  const cardY=interpolate(f,[82,124,150],[0,-340,-340],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.out(Easing.cubic)});
  const flap=interpolate(f,[15,64],[0,178],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.ease)});
  const sides=interpolate(f,[38,82],[0,76],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.ease)});
  const sealScale=interpolate(f,[0,14,22,31],[1,1.08,.9,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const sealOpacity=interpolate(f,[20,31],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const dustOpacity=interpolate(f,[13,20,38],[0,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <div style={{...script,marginTop:105}}>
    <div style={{position:'relative',width:650,height:435,filter:'drop-shadow(0 25px 22px #694a5030)',perspective:1200,transformStyle:'preserve-3d'}}>
      <div style={{position:'absolute',inset:'82px 0 0',border:`2px solid ${C.antique}`,background:'repeating-linear-gradient(2deg,#f7dce1 0px,#fbe8e9 3px,#f3d4da 6px)',borderRadius:5}}/>
      <div style={{position:'absolute',left:'13%',top:90,width:'74%',height:300,background:C.ivory,border:`2px solid ${C.gold}`,boxShadow:'0 16px 33px #694a5025',display:'flex',alignItems:'center',justifyContent:'center',transform:`translateY(${cardY}px) rotate(-1deg)`,zIndex:f>=82?7:1}}>
        <div style={{position:'absolute',inset:13,border:`1px solid ${C.gold}`}}/><div style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',gap:12}}><span style={{display:'flex',alignItems:'center',gap:10,color:C.antique,fontFamily:bodyFont,fontSize:26}}>❧<img src={staticFile('images/aj-monogram.png')} style={{width:48,height:46,objectFit:'contain',mixBlendMode:'multiply'}}/>❧</span><small style={{letterSpacing:5,fontSize:18}}>TOGETHER WITH OUR FAMILIES</small><b style={{fontFamily:displayFont,fontSize:42,lineHeight:1.4,letterSpacing:3}}>Dr. AVINASH SINGH<br/><span style={{color:C.antique,font: 'italic 36px '+bodyFont}}>&amp;</span><br/>Dr. JAGRITI SINGH</b><Divider/><span style={{fontSize:22,letterSpacing:3}}>ENGAGEMENT CEREMONY</span><strong style={{fontFamily:displayFont,fontSize:25}}>12 DECEMBER 2026 · 7:00 PM</strong></div>
      </div>
      <div style={{position:'absolute',top:82,left:0,width:'100%',height:225,background:'linear-gradient(145deg,#fff0ef,#edc1cb)',border:`2px solid ${C.antique}`,clipPath:'polygon(0 0,100% 0,50% 100%)',transformOrigin:'50% 0',transform:`rotateX(${flap}deg)`,zIndex:4,backfaceVisibility:'visible',transformStyle:'preserve-3d'}}/>
      <div style={{position:'absolute',top:'27%',left:0,width:'51%',height:'73%',background:'linear-gradient(35deg,#f6d9df,#fae6e7)',clipPath:'polygon(0 0,100% 50%,0 100%)',transformOrigin:'0 50%',transform:`rotateY(${-sides}deg)`,zIndex:5,backfaceVisibility:'hidden'}}/>
      <div style={{position:'absolute',top:'27%',right:0,width:'51%',height:'73%',background:'linear-gradient(325deg,#f6d9df,#fae6e7)',clipPath:'polygon(100% 0,0 50%,100% 100%)',transformOrigin:'100% 50%',transform:`rotateY(${sides}deg)`,zIndex:5,backfaceVisibility:'hidden'}}/>
      <div style={{position:'absolute',top:'27%',left:0,width:'100%',height:'73%',background:'linear-gradient(0deg,#f0cdd4,#f6dce0)',clipPath:'polygon(0 100%,50% 0,100% 100%)',zIndex:6,pointerEvents:'none'}}/>
      <div style={{position:'absolute',zIndex:8,left:'50%',top:260,width:93,height:93,borderRadius:'50%',display:'grid',placeItems:'center',border:`4px double #f4dda6`,background:'radial-gradient(circle at 32% 24%,#997048,#604736 78%)',boxShadow:'0 5px 13px #694a5040',transform:`translateX(-50%) scale(${sealScale})`,opacity:sealOpacity}}><img src={staticFile('images/aj-monogram.png')} style={{width:82,height:80,objectFit:'contain',mixBlendMode:'screen'}}/></div>
      {Array.from({length:8},(_,i)=><i key={i} style={{position:'absolute',left:'50%',top:306,zIndex:9,width:7,height:7,borderRadius:'50%',background:'#e4c578',boxShadow:'0 0 10px #e4c578',opacity:dustOpacity,transform:`translate(${Math.cos(i*Math.PI/4)*95*f/25}px,${Math.sin(i*Math.PI/4)*64*f/25}px) scale(${Math.max(.2,1-f/50)})`}}/>)}
    </div>
    <p style={{margin:'12px 0 0',fontSize:23,letterSpacing:5,color:'#876963'}}>WITH LOVE AND BLESSINGS · THE SINGH FAMILY</p>
  </div>;
}

function Plaque({children}) { return <div style={{display:'flex',flexDirection:'column',gap:19,alignItems:'center',padding:'26px 36px',border:`1px solid ${C.gold}`,outline:`1px solid ${C.gold}80`,outlineOffset:7,background:'#fffefa99',fontFamily:bodyFont}}>{children}</div>; }
const namesStyle={fontFamily:displayFont,fontWeight:600,fontSize:78,lineHeight:1.36,letterSpacing:3,color:C.brown};

export const EngagementVideo=()=>{
  const {fps}=useVideoConfig();
  return <AbsoluteFill style={{background:C.pink}}>
    <Audio src={staticFile('music/romantic-piano.wav')} volume={.28}/>
    <Sequence from={0} durationInFrames={4*fps}><Scene duration={4*fps}><div style={script}><span style={{font:'600 25px '+displayFont,letterSpacing:9}}>A SPECIAL INVITATION</span><h1 style={{margin:0,font:`600 63px ${displayFont}`,letterSpacing:1,color:C.brown}}>Dr. AVINASH &amp; Dr. JAGRITI</h1><span style={{fontSize:25,letterSpacing:5}}>ENGAGEMENT INVITATION</span><EnvelopeCover/></div></Scene></Sequence>
    <Sequence from={4*fps} durationInFrames={6*fps}><Scene duration={6*fps}><OpeningEnvelope/></Scene></Sequence>
    <Sequence from={10*fps} durationInFrames={6*fps}><Scene duration={6*fps}><div style={script}><Ganesha size={64} src={staticFile('images/ganesha-icon.png')} style={{color:C.antique,marginBottom:-10,mixBlendMode:'multiply'}}/><small style={{letterSpacing:6,fontSize:23}}>TOGETHER WITH OUR FAMILIES</small><div style={namesStyle}>Dr. AVINASH SINGH<br/><span style={{color:C.antique,font:`italic 48px ${bodyFont}`}}>&amp;</span><br/>Dr. JAGRITI SINGH</div><Divider/><p style={{maxWidth:820,margin:'0 auto',fontSize:31,lineHeight:1.5}}>“With immense joy and happiness, we invite you to join us as we celebrate a beautiful new beginning.”</p><p style={{maxWidth:820,margin:'0 auto',fontSize:30,lineHeight:1.48}}>“Together with our families, we invite you to celebrate the beginning of our forever.”</p><span style={{fontFamily:displayFont,fontSize:24,letterSpacing:5}}>ENGAGEMENT CEREMONY</span></div></Scene></Sequence>
    <Sequence from={16*fps} durationInFrames={6*fps}><Scene duration={6*fps}><div style={script}><small style={{letterSpacing:6,fontSize:24}}>PLEASE JOIN US</small><div style={{fontFamily:displayFont,fontSize:33,letterSpacing:6}}>ENGAGEMENT CEREMONY</div><Divider/><Plaque><span style={{fontFamily:displayFont,fontSize:66,fontWeight:600,letterSpacing:2}}>12 DECEMBER 2026</span><span style={{fontSize:43}}>7:00 PM</span></Plaque><span style={{fontSize:24,letterSpacing:4,color:C.antique}}>A DAY MADE FOR CELEBRATION</span></div></Scene></Sequence>
    <Sequence from={22*fps} durationInFrames={5*fps}><Scene duration={5*fps}><div style={script}><small style={{letterSpacing:6,fontSize:24}}>A MOMENT WE'RE COUNTING ON</small><h2 style={{margin:0,font:`500 58px ${bodyFont}`}}>Counting down to our special day</h2><Divider/><div style={{display:'flex',gap:12}}>{['DAYS','HOURS','MINUTES','SECONDS'].map((label)=><div key={label} style={{width:155,padding:'24px 10px',border:`1px solid ${C.gold}`,background:'#fffefa',boxShadow:'inset 0 0 0 4px #fbf1ed'}}><strong style={{display:'block',font:`600 38px ${displayFont}`,color:C.brown}}>✦</strong><small style={{letterSpacing:3,color:C.antique}}>{label}</small></div>)}</div><span style={{fontSize:31}}>12 December 2026 · 7:00 PM IST</span></div></Scene></Sequence>
    <Sequence from={27*fps} durationInFrames={5*fps}><Scene duration={5*fps}><div style={script}><small style={{letterSpacing:6,fontSize:24}}>THE CELEBRATION</small><div style={{fontFamily:displayFont,fontWeight:600,fontSize:65,color:C.brown}}>MAHARAJA BANQUET</div><Divider/><Plaque><span style={{fontSize:31,lineHeight:1.55}}>Ground Floor, Kasturi Padam Complex,<br/>Opposite Dmart Road,<br/>Sector 10, Airoli,<br/>Navi Mumbai, Maharashtra 400701.</span></Plaque><span style={{fontSize:22,letterSpacing:4}}>HOSTED BY THE SINGH FAMILY</span></div></Scene></Sequence>
    <Sequence from={32*fps} durationInFrames={4*fps}><Scene duration={4*fps}><div style={script}><small style={{letterSpacing:6,fontSize:24}}>A NOTE ON ATTIRE</small><h2 style={{margin:0,font:`500 62px ${bodyFont}`}}>Dress in pastels</h2><Divider/><div style={{display:'flex',justifyContent:'center',gap:16,flexWrap:'wrap',maxWidth:830}}>{[['BLUSH','#E8BFC5'],['POWDER BLUE','#C8DCE8'],['SAGE','#C9D7C3'],['LAVENDER','#D8CBE3'],['BUTTERCREAM','#F1E3B9'],['PEACH','#F0C9B5']].map(([name,color])=><div key={name} style={{width:145,padding:'12px 8px',border:`1px solid ${C.gold}`,background:'#fffefa'}}><span style={{display:'block',height:54,marginBottom:8,background:color,borderRadius:3}}/><small style={{letterSpacing:2}}>{name}</small></div>)}</div><p style={{margin:0,fontSize:25}}>Soft pastel shades are warmly encouraged</p></div></Scene></Sequence>
    <Sequence from={36*fps} durationInFrames={4*fps}><Scene duration={4*fps}><div style={script}><small style={{letterSpacing:6,fontSize:24}}>WITH LOVE</small><div style={{...namesStyle,fontSize:68}}>Dr. AVINASH SINGH <span style={{color:C.antique,font:`italic 48px ${bodyFont}`}}>&amp;</span><br/>Dr. JAGRITI SINGH</div><Divider/><div style={{fontSize:34,lineHeight:1.5}}>We look forward to celebrating<br/>this beautiful occasion with you.</div><span style={{fontSize:23,letterSpacing:3}}>HOSTED BY THE SINGH FAMILY</span><span style={{color:C.antique,fontSize:42}}>✦ &nbsp; ❀ &nbsp; ✦</span></div></Scene></Sequence>
  </AbsoluteFill>;
};
