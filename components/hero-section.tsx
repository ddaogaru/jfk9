"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HEADLINE_TEXT =
  "Dog Training and Boarding for Pets and Working Dogs of All Levels";
const SUBTEXT = "NORTHWEST ARKANSAS' LEADING DOG BOARDING & TRAINING SERVICES";

const Hero = () => {
  // Responsive, no-inline-styles approach using CSS clamp for fluid typography

  return (
    <section
      className="hero-section"
      id="top"
    >
      <div className="hero-content">
        <div className="hero-inner">
          <h1
            className="hero-heading"
          >
            {HEADLINE_TEXT}
          </h1>

          <div className="hero-video-container">
            <div className="hero-video-wrapper">
              <video
                src="/logo_video_site.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="hero-video"
              />
            </div>
          </div>

          <p
            className="hero-subtext"
          >
            {SUBTEXT}
          </p>

          <div className="hero-actions">
            <Button size="lg" asChild className="hero-button-primary">
              <Link
                href="https://us.revelationpets.com/bookerv2/0do9oki66s"
                target="_blank"
                rel="noopener noreferrer"
                className="book-boarding-btn"
              >
                Book Boarding
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hero-button-secondary"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
