# **EE Bobcats' Robotics Hall of Fame**

<link rel="stylesheet" href="style.css">

<div class="hero-video">
  <video id="ee005-teaser-video" muted autoplay playsinline preload="metadata" poster="web-photos/video-poster.png">
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
    video.muted = true;
    video.defaultMuted = true;

    video.addEventListener("loadedmetadata", function () {
      teaserStart = Math.max(video.duration - 10, 0);
      video.currentTime = teaserStart;
      video.play().catch(function () {});
    });

    video.addEventListener("timeupdate", function () {
      if (video.duration && video.currentTime < teaserStart) {
        video.currentTime = teaserStart;
      }

      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = teaserStart;
        video.play().catch(function () {});
      }
    });
  }());
</script>

## EE 005: Designing and Building EE Systems

<div class="hall-intro">
The teams listed here are recognized for excellence in the final robotics competition for EE 005 at UC Merced.

This Hall of Fame highlights robots that excelled on the basic and advanced track and designs selected by the class for their creativity, engineering, and presentation.

</div>

## EE 005: Spring 2026

### Final Robotics Competition

#### Bobcat Speed Challenge

Recognizing the fastest robots on the basic and advanced tracks.

<div class="winner-grid">
  <section class="winner-card">
    <h4>Fastest Robot</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-speed-1.png" alt="Spring 2026 fastest robot">
      <figcaption>The winning robot</figcaption>
    </figure>
    <p><strong>Students:</strong> Andres Gonzalez-Guevara, Anthony Klostrakis, Jesus Lopez-Alvarez, Justin Ear</p>
    <p class="caption">The fastest robot design: simple and effective</p>
  </section>
  <section class="winner-card">
    <h4>2nd Fastest Robot</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-speed-2.png" alt="Spring 2026 second fastest robot">
      <figcaption>The runner up robot</figcaption>
    </figure>
    <p><strong>Students:</strong> Alan Jimenez, Isaac Anderson, Itzel Gonzalez Hernan, William Cargill</p>
    <p class="caption">The second fastest robot design: ladybird design</p>
  </section>
</div>

#### People's Choice Design

Recognizing the most popular robot designs selected by the class.

<div class="winner-grid">
  <section class="winner-card">
    <h4>Most Popular Design</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-design-1.png" alt="Spring 2026 People's Choice #1">
      <figcaption>Most popular design</figcaption>
    </figure>
    <p><strong>Students:</strong> Alan Jimenez, Isaac Anderson, Itzel Gonzalez Hernan, William Cargill</p>
    <p class="caption">Most popular design: A ladybird by Team 6</p>
  </section>
  <section class="winner-card">
    <h4>Honorable Mention: Most Popular Design</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2026-design-2.png" alt="Spring 2026 honorable mention popular robot design">
      <figcaption>Honorary mention: Most popular design</figcaption>
    </figure>
    <p><strong>Students:</strong> Angelica Ventura, Harkanwal Behniwal, Jayden Zhu, and Quenie Mavic Jean Fornoles</p>
    <p class="caption">Most popular design: A minecraft cat by Team 8</p>
  </section>
</div>

## EE 005: Spring 2025

### Final Robotics Competition

#### People's Choice Design

Recognizing the most popular robot designs selected by the class.

<div class="winner-grid">
  <section class="winner-card">
    <h4>Best Design</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2025-design-1.png" alt="Spring 2025 People's Choice Design Award">
      <figcaption>Best design</figcaption>
    </figure>
  </section>
  <section class="winner-card">
    <h4>Honorable Mention: Most Popular Design</h4>
    <figure class="photo-frame">
      <img class="photo-slot" src="web-photos/spring-2025-design-2.png" alt="Spring 2025 honorable mention popular robot design">
      <figcaption>Honorary mention: Most popular design</figcaption>
    </figure>
  </section>
</div>
