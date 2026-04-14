import { useState } from 'react';
import releasesData from '../data/releases';
import Carousel from './Carousel';
import Icon from './Icon';

function getYouTubeId(url) {
  const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
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

function ReleaseArt({ release }) {
  return (
    <div className="release-art" style={{ background: release.gradient }}>
      <div className="release-play">
        <Icon name="music" size={28} />
      </div>
    </div>
  );
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

        <Carousel className="releases-grid">
          {releasesData.map((r) => (
            <div className={`release-card${r.featured ? ' featured' : ''}`} key={r.title}>
              {r.thumbnail && r.youtubeUrl ? (
                <YouTubeEmbed release={r} />
              ) : (
                <ReleaseArt release={r} />
              )}
              <div className="release-info">
                <h3>{r.title}</h3>
                <p className="release-artist">{r.artist}</p>
                <p className="release-meta">{r.meta}</p>
                <div className="stream-links">
                  {r.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="stream-btn">{link.label}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
