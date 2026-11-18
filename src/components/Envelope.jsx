import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Botanical from './Botanical.jsx';
import PetalField from './PetalField.jsx';

const goldDust = Array.from({ length: 9 }, (_, i) => ({ id: i, x: `${(i - 4) * 17}px`, y: `${-34 - (i % 4) * 8}px`, delay: i * 0.035 }));

export default function Envelope({ onOpen, onSkip, onStartMusic }) {
  const [phase, setPhase] = useState('idle');
  const reduced = useReducedMotion();
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = () => {
    if (phase !== 'idle') return;
    onStartMusic?.();
    setPhase('breaking');
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const noise = ctx.createBuffer(1, ctx.sampleRate * .18, ctx.sampleRate);
      const channel = noise.getChannelData(0);
      for (let i = 0; i < channel.length; i++) channel[i] = (Math.random() * 2 - 1) * (1 - i / channel.length);
      const source = ctx.createBufferSource(); const gain = ctx.createGain();
      source.buffer = noise; gain.gain.setValueAtTime(.035, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .18);
      source.connect(gain); gain.connect(ctx.destination); source.start(); source.stop(ctx.currentTime + .19);
      const ping = ctx.createOscillator(); const pg = ctx.createGain(); ping.frequency.setValueAtTime(1450, ctx.currentTime); pg.gain.setValueAtTime(.025, ctx.currentTime); pg.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .3); ping.connect(pg); pg.connect(ctx.destination); ping.start(); ping.stop(ctx.currentTime + .3);
    } catch { /* Audio is optional; the visual sequence continues. */ }
    timers.current.push(setTimeout(() => setPhase('opening'), reduced ? 30 : 520));
    timers.current.push(setTimeout(() => setPhase('emerging'), reduced ? 60 : 1500));
    timers.current.push(setTimeout(onOpen, reduced ? 100 : 5300));
  };

  return <motion.div className="opening" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.025, filter: 'blur(5px)', pointerEvents: 'none' }} transition={{ duration: .7 }}>
    <div className="opening-grain" aria-hidden="true" />
    <PetalField />
    <motion.div className="opening-floral opening-floral-left" initial={{ opacity: 0, x: -30, rotate: -8 }} animate={{ opacity: .72, x: 0, rotate: 0 }} transition={{ duration: 1.5, delay: .15 }}><Botanical /></motion.div>
    <motion.div className="opening-floral opening-floral-right" initial={{ opacity: 0, x: 30, rotate: 8 }} animate={{ opacity: .72, x: 0, rotate: 0 }} transition={{ duration: 1.5, delay: .35 }}><Botanical flip /></motion.div>
    <motion.div className="opening-copy" initial={{ opacity: 0, y: 16 }} animate={phase === 'idle' ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }} transition={{ duration: phase === 'idle' ? .9 : .25, delay: phase === 'idle' ? .25 : 0 }}>
      <span className="eyebrow">A SPECIAL INVITATION</span>
      <h1><span>Dr. Avinash <b className="name-initial">.R.</b> Singh</span><i>&amp;</i><span>Dr. Jagriti <b className="name-initial">.D.</b> Singh</span></h1>
      <p>You're Invited</p>
    </motion.div>
    <div className={`envelope-scene phase-${phase}`}>
      <motion.button type="button" className="envelope" onClick={open} aria-label="Open invitation envelope" aria-pressed={phase !== 'idle'} initial={{ opacity: 0, y: 42, scale: .82 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 76, damping: 17, delay: .5 }}>
        <span className="env-back" />
        <motion.span className="insert-card" animate={phase === 'emerging' ? { y: -190, rotate: -1.2, scale: 1.04, zIndex: 7 } : phase === 'opening' ? { y: -28, rotate: -.4, scale: 1.005, zIndex: 1 } : { y: 0, rotate: 0, scale: 1, zIndex: 1 }} transition={{ duration: reduced ? .1 : 1.25, ease: [.22, .7, .18, 1] }}>
          <span className="insert-border"><span className="insert-wreath">✿ <img className="insert-logo" src="/images/aj-monogram.png" alt=""/> ✿</span><small>TOGETHER WITH OUR FAMILIES</small><b>Dr. AVINASH <span className="name-initial">.R.</span> SINGH<br/><em>&amp;</em><br/>Dr. JAGRITI <span className="name-initial">.D.</span> SINGH</b><span className="insert-flourish">✦ ── ✿ ── ✦</span><small>ENGAGEMENT CEREMONY</small><span className="insert-date">12 DECEMBER 2026<br/>7:00 PM</span><span className="insert-venue">MAHARAJA BANQUET</span></span>
        </motion.span>
        <motion.span className="env-rear-flap" animate={{ rotateX: phase === 'idle' || phase === 'breaking' ? 0 : 178 }} transition={{ duration: reduced ? .1 : .88, ease: [.46, 0, .18, 1] }} />
        <span className="env-pocket"><i className="env-fold env-fold-left"/><i className="env-fold env-fold-right"/><i className="env-fold env-fold-bottom"/></span>
        <motion.span className="env-front-flap env-front-left" animate={{ rotateY: phase === 'opening' || phase === 'emerging' ? -82 : 0 }} transition={{ duration: reduced ? .1 : .7, delay: .25, ease: [.4, 0, .2, 1] }}/>
        <motion.span className="env-front-flap env-front-right" animate={{ rotateY: phase === 'opening' || phase === 'emerging' ? 82 : 0 }} transition={{ duration: reduced ? .1 : .7, delay: .25, ease: [.4, 0, .2, 1] }}/>
        <motion.span className="wax" animate={phase === 'breaking' ? { x: '-50%', y: '-50%', scale: [1, 1.08, .94, .84], rotate: [0, -2, 2, 0] } : phase !== 'idle' ? { x: '-50%', y: '-50%', scale: .4, opacity: 0 } : { x: '-50%', y: '-50%', scale: 1, opacity: 1 }} transition={{ duration: .48, ease: 'easeOut' }}><img className="wax-logo" src="/images/aj-monogram.png" alt=""/><em/></motion.span>
        <span className="wax-shard shard-one"/><span className="wax-shard shard-two"/><span className="wax-shard shard-three"/>
        <span className="gold-dust" aria-hidden="true">{goldDust.map(p => <i key={p.id} style={{ '--dx': p.x, '--dy': p.y, animationDelay: `${p.delay}s` }}/>)}</span>
      </motion.button>
    </div>
    <motion.button className="tap-open" onClick={open} animate={phase === 'idle' ? { opacity: [1, .58, 1] } : { opacity: 1 }} transition={{ duration: 2, repeat: phase === 'idle' && !reduced ? Infinity : 0 }}>{phase === 'idle' ? 'TAP TO OPEN' : 'OPENING YOUR INVITATION'}</motion.button>
    {phase === 'idle' && <button className="skip" onClick={() => { onStartMusic?.(); onSkip(); }}>Skip Animation</button>}
    <div className="opening-footnote">WITH LOVE &amp; BLESSINGS · THE SINGH FAMILY</div>
  </motion.div>
}
