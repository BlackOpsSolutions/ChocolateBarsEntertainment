import { useState } from 'react';
import releasesData from '../data/releases';
import Carousel from './Carousel';
import Icon from './Icon';

function getYouTubeId(url) {
  const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function getSpotifyEmbed(url) {
  const match = url.match(/open\.spotify\.com\/(track|album|playlist|episode)\/([a-zA-Z0-9]+)/);
  if (!match) return null;
  return `https://open.spotify.com/embed/${match[1]}/${match[2]}`;
}

function streamIconFor(label) {
  const key = label.toLowerCase();
  if (key.includes('spotify')) return 'spotify';
  if (key.includes('apple')) return 'apple';
  if (key.includes('youtube')) return 'youtubeFilled';
  return 'music';
}

function YouTubeEmbed({ release }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(release.youtubeUrl);

  return (
    <div className="release-art release-video-wrap">
      {playing ? (
        <iframe
          className="yt-embed"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={release.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="yt-thumb-link"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${release.title}`}
        >
          <img src={release.thumbnail} alt={`${release.title} thumbnail`} className="yt-thumb" />
          <div className="yt-play-btn">
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C56 0 34 0 34 0S12 0 7.5 1.7a8.5 8.5 0 0 0-6 6C0 12.3 0 24 0 24s0 11.7 1.5 16.3a8.5 8.5 0 0 0 6 6C12 48 34 48 34 48s22 0 26.5-1.7a8.5 8.5 0 0 0 6-6C68 35.7 68 24 68 24s0-11.7-1.5-16.3z" fill="#FF0000" />
              <path d="M27 34l18-10-18-10v20z" fill="#fff" />
            </svg>
          </div>
        </button>
      )}
      {release.featured && <span className="release-badge">Featured</span>}
    </div>
  );
}

function SpotifyEmbed({ release, embedUrl }) {
  return (
    <div className="release-art release-spotify-wrap">
      <iframe
        className="spotify-embed"
        src={embedUrl}
        title={release.title}
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      {release.featured && <span className="release-badge">Featured</span>}
    </div>
  );
}

function ReleaseArt({ release }) {
  return (
    <div className="release-art" style={{ background: release.gradient }}>
      <div className="release-play">
        <Icon name="music" size={28} />
      </div>
    </div>
  );
}

function resolveMedia(release) {
  if (release.featured && release.thumbnail && release.youtubeUrl) {
    return { type: 'youtube', node: <YouTubeEmbed release={release} /> };
  }
  const spotifyLink = release.links.find((l) => l.label.toLowerCase().includes('spotify'));
  if (spotifyLink) {
    const embedUrl = getSpotifyEmbed(spotifyLink.url);
    if (embedUrl) {
      return { type: 'spotify', node: <SpotifyEmbed release={release} embedUrl={embedUrl} /> };
    }
  }
  return { type: 'art', node: <ReleaseArt release={release} /> };
}

export default function Releases() {
  return (
    <section className="releases" id="releases">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Fresh Off The Press</p>
          <h2 className="section-title">Latest Releases</h2>
          <p className="section-sub">Stream the latest from the CBE roster.</p>
        </div>

        <Carousel className="releases-grid" loop>
          {releasesData.map((r) => {
            const media = resolveMedia(r);
            const cardClass = [
              'release-card',
              r.featured && 'featured',
              media.type === 'spotify' && 'has-spotify',
            ].filter(Boolean).join(' ');
            return (
            <div className={cardClass} key={r.title}>
              {media.node}
              <div className="release-info">
                <h3>{r.title}</h3>
                <p className="release-artist">{r.artist}</p>
                <p className="release-meta">{r.meta}</p>
                <div className="stream-links">
                  {r.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`stream-btn stream-btn-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      aria-label={`Listen on ${link.label}`}
                      title={link.label}
                    >
                      <Icon name={streamIconFor(link.label)} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
