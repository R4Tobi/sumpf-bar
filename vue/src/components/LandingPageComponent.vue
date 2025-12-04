<template>
  <div class="landing">
    <div class="image" v-if="device == 'mobile'"></div>
    <video
      v-if="device == 'desktop'"
      class="video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/background.MP4" type="video/mp4" />
    </video>
    <div class="title">
        <span class="semibold">SUMPF </span>
        <span class="regular">Bar</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const device = navigator.userAgent.match(/Mobi/) ? 'mobile' : 'desktop'
console.log(`Device type: ${device}`)
</script>

<style scoped lang="css">
.landing {
    position: relative;
    width: 100%;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    background: #001600;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    object-position: center;
    filter: blur(4px) brightness(0.6);
    z-index: 10;
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/background.png');
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.6);
    z-index: 10;
}

.title {
    position: absolute;
    z-index: 20;
    font-size: 96pt;
    color: #e2e2e2;
    bottom: 5rem;
    left: 5rem;
}

.title .semibold {
    font-weight: 600;
}

.title .regular {
    font-weight: 400;
}

@media (max-width: 768px) {
    .title {
        font-size: 48pt;
        bottom: 2rem;
        left: 2rem;
    }
}
</style>