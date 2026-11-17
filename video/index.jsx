import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { EngagementVideo } from './EngagementVideo.jsx';
const Root=()=> <Composition id="EngagementInvitation" component={EngagementVideo} durationInFrames={1200} fps={30} width={1080} height={1920}/>;
registerRoot(Root);
