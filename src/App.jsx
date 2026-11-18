import { useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CalendarDays, Check, Clock3, Copy, Heart, MapPin, Share2 } from 'lucide-react';
import Envelope from './components/Envelope.jsx';
import Botanical from './components/Botanical.jsx';
import Countdown from './components/Countdown.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Ganesha from './components/Ganesha.jsx';
import PetalField from './components/PetalField.jsx';

const address = 'Ground Floor, Kasturi Padam Complex, Opposite Dmart Road, Sector 10, Airoli, Navi Mumbai, Maharashtra 400701.';
const maps = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Maharaja Banquet, ' + address)}`;
const inviteMessage = 'Together with our families, we invite you to celebrate the beginning of our forever.';
const decorativeMessage = 'With immense joy and happiness, we invite you to join us as we celebrate a beautiful new beginning.';
const shareMessage = 'You\'re invited to celebrate the engagement of Dr. Avinash .R. Singh & Dr. Jagriti .D. Singh on 12 December 2026 at 7:00 PM. We would love to celebrate this special occasion with you. Open your invitation here: ';

function Ornament({ floral = false }) { return <div className={`ornament ${floral ? 'ornament-floral' : ''}`} aria-hidden="true"><span/><i>{floral ? '❀' : '✦'}</i><span/></div>; }
function Monogram({ wreath = false }) { return <div className={`monogram ${wreath ? 'monogram-wreath' : ''}`} role="img" aria-label="Avinash and Jagriti monogram">{wreath && <span className="wreath-left">❧</span>}<img className="aj-monogram-image" src="/images/aj-monogram.png" alt=""/>{wreath && <span className="wreath-right">❧</span>}</div>; }
function SectionHeading({ eyebrow, children, floral = false }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{children}</h2><Ornament floral={floral}/></div>; }
function Frame({ children, variant = 'double', className = '' }) { return <div className={`ornate-frame frame-${variant} ${className}`}><PetalField className="page-petals"/>{children}<span className="frame-corner corner-tl">❧</span><span className="frame-corner corner-tr">❧</span><span className="frame-corner corner-bl">❧</span><span className="frame-corner corner-br">❧</span></div>; }
function Reveal({ children, className = '', delay = 0, y = 22, as: Tag = motion.div, ...props }) { const reduce = useReducedMotion(); return <Tag className={className} initial={reduce ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: reduce ? .01 : .75, delay: reduce ? 0 : delay, ease: [.22, .65, .2, 1] }} {...props}>{children}</Tag>; }

function App() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const startMusic = useRef(() => {});
  const url = window.location.href;
  const share = async () => {
    const text = shareMessage + url;
    if (navigator.share) {
      try { await navigator.share({ title: 'Dr. Avinash .R. Singh & Dr. Jagriti .D. Singh — Engagement Invitation', text, url }); return; }
      catch (error) { if (error?.name === 'AbortError') return; }
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2200); }
    catch { window.prompt('Copy invitation URL', url); }
  };

  return <MotionConfig reducedMotion="user"><>
    <MusicPlayer onReady={play => { startMusic.current = play; }}/>
    <AnimatePresence>{!opened && <Envelope onOpen={() => setOpened(true)} onSkip={() => setOpened(true)} onStartMusic={() => startMusic.current()}/>}</AnimatePresence>
    <motion.main className={opened ? 'is-visible' : ''} aria-hidden={!opened} initial={{ opacity: 0 }} animate={{ opacity: opened ? 1 : 0 }} transition={{ duration: .8 }}>
      <header className="topbar"><a className="brand" href="#top" aria-label="Dr. Avinash and Dr. Jagriti home"><img src="/images/aj-monogram.png" alt="Avinash and Jagriti gold monogram"/></a><nav aria-label="Invitation sections"><a href="#couple">The Couple</a><a href="#invitation">Invitation</a><a href="#countdown">Countdown</a><a href="#venue">Venue</a><a href="#dress-code">Dress Code</a><a href="#moments">Moments</a></nav></header>

      <section className="hero section-shell page-couple" id="top">
        <Botanical className="hero-flower flower-left"/><Botanical className="hero-flower flower-right" flip/>
        <Frame variant="airy" className="hero-frame page-sheet"><div className="hero-inner" id="couple">
          <Reveal className="ganesha-reveal" y={10}><Ganesha className="ganesha-mark" size={120}/></Reveal>
          <Reveal className="eyebrow" y={12}>TOGETHER WITH OUR FAMILIES</Reveal><Reveal delay={.12}><Monogram wreath/></Reveal>
          <Reveal delay={.2}><h1 className="couple-title"><span>Dr. AVINASH <b className="name-initial">.R.</b> SINGH</span><i>&amp;</i><span>Dr. JAGRITI <b className="name-initial">.D.</b> SINGH</span></h1></Reveal>
          <Reveal delay={.34}><Ornament floral/></Reveal>
          <Reveal delay={.42}><p className="hero-invite">Invite you to celebrate their<br/><strong>Engagement Ceremony</strong></p></Reveal>
          <Reveal delay={.5}><p className="hero-extra">{decorativeMessage}</p></Reveal>
          <a className="scroll-cue" href="#invitation"><span>Discover the invitation</span><ArrowDown size={16}/></a>
        </div></Frame><div className="hero-note">THE SINGH FAMILY · 2026</div>
      </section>

      <section className="invitation section-shell page-invitation" id="invitation">
        <Botanical className="side-botanical"/>
        <Reveal className="premium-card-wrap"><article className="premium-card page-sheet"><PetalField className="page-petals"/>
          <div className="premium-card-inner">
            <Monogram wreath/><span className="eyebrow card-family">TOGETHER WITH OUR FAMILIES</span>
            <p className="card-decorative-message">{decorativeMessage}</p>
            <Ornament floral/><span className="card-kicker">YOU ARE CORDIALLY INVITED TO THE</span>
            <h3 className="card-event">Engagement Ceremony</h3>
            <div className="card-names"><span>Dr. AVINASH <b className="name-initial">.R.</b> SINGH</span><i>&amp;</i><span>Dr. JAGRITI <b className="name-initial">.D.</b> SINGH</span></div>
            <p className="card-message">“{inviteMessage}”</p>
            <div className="event-plaque"><div><CalendarDays size={18}/><span>THE DATE</span><strong>12 December 2026</strong></div><i/><div><Clock3 size={18}/><span>THE TIME</span><strong>7:00 PM</strong></div></div>
            <div className="card-venue"><MapPin size={17}/><div><span>THE CELEBRATION</span><strong>MAHARAJA BANQUET</strong><p>Ground Floor, Kasturi Padam Complex,<br/>Opposite Dmart Road,<br/>Sector 10, Airoli,<br/>Navi Mumbai, Maharashtra 400701.</p></div></div>
            <Ornament floral/><span className="hosted-label">WITH LOVE AND BLESSINGS</span><p className="hosted">Hosted by The Singh Family</p>
          </div>
        </article></Reveal>
      </section>

      <section className="countdown-section section-shell page-countdown" id="countdown"><Botanical className="countdown-flower countdown-left"/><Botanical className="countdown-flower countdown-right" flip/>
        <Frame variant="rounded" className="count-frame page-sheet"><Reveal><div className="section-heading"><span className="eyebrow">A MOMENT WE'RE COUNTING ON</span><h2>Until we celebrate <i>together</i></h2><Ornament floral/></div>
          <div className="event-plaque countdown-plaque"><div><CalendarDays size={18}/><span>THE DATE</span><strong>12 December 2026</strong></div><i/><div><Clock3 size={18}/><span>THE TIME</span><strong>7:00 PM</strong></div></div>
          <Countdown/><p className="timezone-note">Indian Standard Time · Asia/Kolkata</p>
        </Reveal></Frame>
      </section>

      <section className="venue-section section-shell page-venue" id="venue"><Botanical className="venue-botanical"/>
        <Frame variant="airy" className="venue-sheet page-sheet"><SectionHeading eyebrow="A PLACE TO GATHER" floral>Join us <i>there</i></SectionHeading>
          <Reveal className="venue-card"><div className="venue-icon"><MapPin size={22}/></div><div className="venue-copy"><span className="eyebrow">THE CELEBRATION</span><h3>Maharaja Banquet</h3><Ornament/><p>Ground Floor, Kasturi Padam Complex,<br/>Opposite Dmart Road,<br/>Sector 10, Airoli,<br/>Navi Mumbai, Maharashtra 400701.</p><a className="text-link" href={maps} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={16}/></a></div><div className="venue-watermark">✿</div></Reveal>
        </Frame>
      </section>

      <section className="dress-code-section section-shell page-dress-code" id="dress-code"><Botanical className="dress-botanical dress-botanical-left"/><Botanical className="dress-botanical dress-botanical-right" flip/>
        <Frame variant="dress" className="dress-code-frame page-sheet"><Reveal className="dress-code-content"><SectionHeading eyebrow="A NOTE ON ATTIRE" floral>Dress in <i>pastels</i></SectionHeading>
          <p className="dress-code-lead">We would love for you to join us in soft, pastel shades for our celebration.</p>
          <div className="pastel-palette" role="list" aria-label="Pastel colour suggestions">
            {[['Blush Pink','#E8BFC5'],['Powder Blue','#C8DCE8'],['Sage Green','#C9D7C3'],['Soft Lavender','#D8CBE3'],['Buttercream','#F1E3B9'],['Peach','#F0C9B5']].map(([name,color])=><div className="palette-swatch" role="listitem" key={name}><span className="swatch-color" style={{'--swatch':color}}/><span>{name}</span></div>)}
          </div>
          <Ornament floral/><p className="dress-code-note">A gentle palette to complement the day. Please wear whichever pastel shade feels most like you.</p>
        </Reveal></Frame>
      </section>

      <section className="moments-section section-shell page-gallery" id="moments"><Botanical className="gallery-botanical"/>
        <Frame variant="airy" className="gallery-sheet page-sheet"><SectionHeading eyebrow="A LITTLE LOOK AT US" floral>Our Beautiful <i>Moments</i></SectionHeading>
          <p className="gallery-intro">Some memories are best shared, one photograph at a time.</p><PhotoGallery/>
        </Frame>
      </section>

      <section className="closing section-shell page-thanks"><Botanical className="closing-flower closing-flower-left"/><Botanical className="closing-flower closing-flower-right" flip/>
        <Frame variant="closing" className="closing-frame page-sheet"><Reveal className="closing-inner"><Heart className="closing-heart" size={20}/><p>We look forward to celebrating<br/>this beautiful occasion with you.</p><span className="eyebrow">WITH LOVE</span><h2 className="closing-names"><span>Dr. AVINASH <b className="name-initial">.R.</b> SINGH</span><i>&amp;</i><span>Dr. JAGRITI <b className="name-initial">.D.</b> SINGH</span></h2><Ornament floral/><span className="hosted">Hosted by The Singh Family</span></Reveal>
          <div className="share-actions"><button className="share-button" onClick={share}><Share2 size={17}/> Share Invitation</button><button className="copy-button" onClick={copy}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Copied' : 'Copy invitation link'}</button></div>
          <footer>MADE WITH LOVE · 12 DECEMBER 2026</footer>
        </Frame>
      </section>
    </motion.main>
  </></MotionConfig>;
}
export default App;
