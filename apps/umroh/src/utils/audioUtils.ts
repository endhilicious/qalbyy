/**
 * Audio utilities for better cross-platform compatibility, especially iOS
 */

export interface AudioCapabilities {
  canPlayMP3: boolean;
  canPlayAAC: boolean;
  canPlayOGG: boolean;
  canPlayWAV: boolean;
  isIOS: boolean;
  isSafari: boolean;
}

/**
 * Detect audio capabilities of the current browser/device
 */
export function detectAudioCapabilities(): AudioCapabilities {
  const audio = document.createElement('audio');
  const userAgent = navigator.userAgent.toLowerCase();
  
  return {
    canPlayMP3: audio.canPlayType('audio/mpeg') !== '',
    canPlayAAC: audio.canPlayType('audio/aac') !== '' || audio.canPlayType('audio/mp4') !== '',
    canPlayOGG: audio.canPlayType('audio/ogg') !== '',
    canPlayWAV: audio.canPlayType('audio/wav') !== '',
    isIOS: /iphone|ipad|ipod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
    isSafari: /safari/.test(userAgent) && !/chrome/.test(userAgent)
  };
}

/**
 * Get the best audio format URL for the current device
 */
export function getBestAudioUrl(audioSources: Record<string, string>, qariId: string): string | null {
  const baseUrl = audioSources[qariId];
  
  if (!baseUrl) {
    console.warn('⚠️ [getBestAudioUrl] No URL found for qari:', qariId);
    return null;
  }

  // Simply return the original URL - don't modify it
  // The API already provides the correct format
  return baseUrl;
}

/**
 * Preload audio for better iOS performance
 */
export function preloadAudio(url: string): Promise<HTMLAudioElement> {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    
    const handleCanPlay = () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      resolve(audio);
    };
    
    const handleError = () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      reject(new Error('Failed to preload audio'));
    };
    
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    
    // iOS specific attributes
    audio.setAttribute('playsinline', 'true');
    audio.setAttribute('webkit-playsinline', 'true');
    audio.preload = 'metadata';
    
    audio.src = url;
  });
}

/**
 * Initialize audio context for iOS (requires user gesture)
 */
export function initializeAudioContext(): Promise<boolean> {
  return new Promise((resolve) => {
    // Create a dummy audio element to test
    const audio = new Audio();
    audio.volume = 0;
    audio.muted = true;
    
    // Try to play a silent audio to unlock iOS audio
    audio.play()
      .then(() => {
        audio.pause();
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
}

/**
 * Check if audio is blocked by browser policies
 */
export function isAudioBlocked(): boolean {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return false;
    
    const audioContext = new AudioContext();
    return audioContext.state === 'suspended';
  } catch {
    return false;
  }
}

/**
 * Resume audio context if suspended (for iOS)
 */
export async function resumeAudioContext(): Promise<boolean> {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return true;
    
    const audioContext = new AudioContext();
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }
    
    return audioContext.state === 'running';
  } catch {
    return false;
  }
}

/**
 * Get optimized audio loading strategy for iOS
 */
export function getAudioLoadingStrategy(isIOS: boolean) {
  return {
    preload: isIOS ? 'none' : 'metadata',
    playsInline: true,
    // iOS specific attributes
    ...(isIOS && {
      'webkit-playsinline': 'true',
      'playsinline': 'true'
    })
  };
}
