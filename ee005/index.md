# **EE Bobcats' Robotics Hall of Fame**

<link rel="stylesheet" href="style.css">

<div class="hero-video">
  <video id="ee005-teaser-video" controls muted autoplay playsinline preload="metadata" poster="web-photos/spring-2026-speed-1.png">
    <source src="web-photos/ee005-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="caption">Final robotics competition teaser.</p>
</div>

<script>
  (function () {
    var video = document.getElementById("ee005-teaser-video");
    if (!video) return;

    var teaserStart = 0;

    video.addEventListener("loadedmetadata", function () {
      teaserStart = Math.max(video.duration - 10, 0);
      video.currentTime = teaserStart;
      video.play();
    });

    video.addEventListener("timeupdate", function () {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = teaserStart;
        video.play();
      }
    });
  }());
</script>

## EE 005: Designing and Building EE Systems

<div class="hall-intro">
The teams listed here are recognized for excellence in the final robotics competition for EE 005 at UC Merced.

This Hall of Fame highlights robots that excelled on the advanced track and designs selected by the class for their creativity, engineering, and presentation.

This list is not in order of ranking within each award category.
</div>

## EE 005: Spring 2026

### Final Robotics Competition

#### Bobcat Speed Challenge

Recognizing the fastest robots on the advanced track.

<div class="winner-grid">
  <section class="winner-card">
    <h4>Speed Team 1</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-speed-1.png" alt="Spring 2026 Speed Team 1 robot on the advanced track">
      <figcaption>Upload: web-photos/spring-2026-speed-1.png</figcaption>
    </figure>
    <p><strong>Students:</strong> Student 1, Student 2, Student 3, Student 4</p>
    <p class="caption">Photo slot: advanced track run for the winning robot.</p>
  </section>
  <section class="winner-card">
    <h4>Speed Team 2</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-speed-2.png" alt="Spring 2026 Speed Team 2 robot on the advanced track">
      <figcaption>Upload: web-photos/spring-2026-speed-2.png</figcaption>
    </figure>
    <p><strong>Students:</strong> Student 5, Student 6, Student 7, Student 8</p>
    <p class="caption">Photo slot: advanced track run for the winning robot.</p>
  </section>
</div>

#### People's Choice Design

Recognizing the most popular robot designs selected by the class.

<div class="winner-grid">
  <section class="winner-card">
    <h4>Design Team 1</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-design-1.png" alt="Spring 2026 People's Choice Design Team 1 robot design">
      <figcaption>Upload: web-photos/spring-2026-design-1.png</figcaption>
    </figure>
    <p><strong>Students:</strong> Student 9, Student 10, Student 11, Student 12</p>
    <p class="caption">Photo slot: actual robot design for the popular design winner.</p>
  </section>
  <section class="winner-card">
    <h4>Design Team 2</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-design-2.png" alt="Spring 2026 People's Choice Design Team 2 robot design">
      <figcaption>Upload: web-photos/spring-2026-design-2.png</figcaption>
    </figure>
    <p><strong>Students:</strong> Student 13, Student 14, Student 15, Student 16</p>
    <p class="caption">Photo slot: actual robot design for the popular design winner.</p>
  </section>
</div>

## EE 005: Spring 2025

### Final Robotics Competition

#### People's Choice Design

Recognizing the most popular robot designs selected by the class.

<div class="winner-grid">
  <section class="winner-card">
    <h4>Design Team 1</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2025-design-1.png" alt="Spring 2025 People's Choice Design Team 1 robot design">
      <figcaption>Upload: web-photos/spring-2025-design-1.png</figcaption>
    </figure>
    <p><strong>Students:</strong> Student 9, Student 10, Student 11, Student 12</p>
    <p class="caption">Photo slot: actual robot design for the popular design winner.</p>
  </section>
  <section class="winner-card">
    <h4>Design Team 2</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2025-design-2.png" alt="Spring 2025 People's Choice Design Team 2 robot design">
      <figcaption>Upload: web-photos/spring-2025-design-2.png</figcaption>
    </figure>
    <p><strong>Students:</strong> Student 13, Student 14, Student 15, Student 16</p>
    <p class="caption">Photo slot: actual robot design for the popular design winner.</p>
  </section>
</div>
