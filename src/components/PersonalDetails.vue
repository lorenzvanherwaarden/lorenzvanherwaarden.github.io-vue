<template>
  <div class="personal-details">
    <img class="personal-details__face" alt="My face" :src="meImgUrl" />
    <div class="personal-details__links">
      <a
        v-for="(link, index) in links"
        :key="link.name"
        v-text="link.name"
        :href="link.href"
        class="personal-details__link"
        :class="{
          'personal-details__link--top-origin': index >= links.length / 2,
        }"
        :style="`transform: rotate(${link.angle}rad) translateX(-${link.translate}px);`"
      />
    </div>
  </div>
</template>

<script setup>
import meImgUrl from "../assets/me.jpg";
import getCustomSizeProperty from "../utils/getCustomSizeProperty";
</script>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/lorenzvanherwaarden/",
          angle: 0,
          translate: 0,
        },
        {
          name: "Github",
          href: "https://github.com/lorenzvanherwaarden",
          angle: 0,
          translate: 0,
        },
        {
          name: "Resumé",
          href: "/resume.pdf",
          angle: 0,
          translate: 0,
        },
        {
          name: "Contact",
          href: "mailto:lorenz.van.herwaarden@gmail.com",
          angle: 0,
          translate: 0,
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.links = this.links.map((link, index) => {
        const angle = this.getAngleForIndex(index);

        return {
          ...link,
          angle,
          translate: this.getTranslateForIndex(index, angle),
        };
      });
    });
  },

  methods: {
    getAngleForIndex(index) {
      const linkHeight = getCustomSizeProperty("--font-size-body");
      const mediumSpacingHeight = getCustomSizeProperty("--spacing-medium");
      const linksLength = this.links.length;

      const interSpace = mediumSpacingHeight + linkHeight;
      const heightOffset = (index - (linksLength / 2 - 1) - 0.5) * interSpace;

      return this.calculateAngleFromHeight(heightOffset);
    },

    calculateAngleFromHeight(height) {
      return Math.atan(height / 185.0);
    },

    getTranslateForIndex(index, angle) {
      const mediumSpacingHeight = getCustomSizeProperty("--spacing-medium");

      return Math.abs(Math.tan(angle) * mediumSpacingHeight);
    },
  },
};
</script>

<style scoped>
.personal-details {
  display: flex;
  align-items: center;
}

.personal-details__face {
  height: 230px;
  width: 230px;
  border-radius: 50%;
  animation: 1s ease-out 0s 1 fade;
}

.personal-details__links {
  margin-left: 70px;
}

.personal-details__link {
  display: block;
  margin: var(--spacing-medium) 0;
  transition: transform 1.3s, opacity 0.3s;
  transform-origin: bottom left;
  font-size: 2.2rem;
}

@media (max-width: 460px) {
  .personal-details__face {
    height: 160px;
    width: 160px;
  }

  .personal-details__link {
    font-size: 1.8rem;
  }
}

.personal-details__link--top-origin {
  transform-origin: top left;
}
</style>
