import { mkdir, writeFile } from 'node:fs/promises';
// A soft, original synthesized instrumental cue for the invitation video.
const sampleRate=22050, seconds=40, samples=sampleRate*seconds, bytes=Buffer.alloc(44+samples*4);
bytes.write('RIFF',0);bytes.writeUInt32LE(36+samples*4,4);bytes.write('WAVE',8);bytes.write('fmt ',12);bytes.writeUInt32LE(16,16);bytes.writeUInt16LE(1,20);bytes.writeUInt16LE(2,22);bytes.writeUInt32LE(sampleRate,24);bytes.writeUInt32LE(sampleRate*4,28);bytes.writeUInt16LE(4,32);bytes.writeUInt16LE(16,34);bytes.write('data',36);bytes.writeUInt32LE(samples*4,40);
const chordSets=[[220,261.63,329.63],[174.61,220,261.63],[196,246.94,293.66],[164.81,196,246.94]];
for(let n=0;n<samples;n++){const t=n/sampleRate,beat=t%4,bar=Math.floor(t/4)%4;let v=0;
  for(let k=0;k<3;k++){const f=chordSets[bar][k],age=t%4;const env=Math.min(1,age*5)*Math.exp(-age*.52);v+=Math.sin(2*Math.PI*f*t)*env*.105/(1+k*.35);v+=Math.sin(2*Math.PI*f*2*t)*env*.022;}
  const notePattern=[440,392,329.63,392,493.88,440,392,329.63];const note=notePattern[Math.floor(t*2)%8],noteAge=(t*2)%1;const ne=Math.min(1,noteAge*12)*Math.exp(-noteAge*3.2);v+=Math.sin(2*Math.PI*note*t)*ne*.045+Math.sin(2*Math.PI*note*2.01*t)*ne*.009;
  const fadeIn=Math.min(1,t/2),fadeOut=Math.min(1,(seconds-t)/3);v*=fadeIn*fadeOut;v=Math.max(-.95,Math.min(.95,v));const pcm=Math.round(v*32767);bytes.writeInt16LE(pcm,44+n*4);bytes.writeInt16LE(pcm,46+n*4);
}
await mkdir('public/music',{recursive:true});await writeFile('public/music/romantic-piano.wav',bytes);
