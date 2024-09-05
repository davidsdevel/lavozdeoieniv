'use client';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
  return <div className='fixed bottom-0 right-0 w-full md:w-80'>
    <AudioPlayer
      autoPlay
      src={process.env.NEXT_PUBLIC_AUDIO_SRC}
      showJumpControls={false}
      showDownloadProgress={false}
      showFilledProgress={false}
      layout='stacked-reverse'
      onPlayError={() => {
        alert('Error al recibir audio');
      }}
    />
  </div>;
}
