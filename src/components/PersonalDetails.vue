<template>
  <div class="personal-details">
    <img class="personal-details__face" alt="My face" :src="meImgUrl" />
    <div class="personal-details__info">
      <template v-for="(item, index) in itemsWithOffset" :key="index">
        <a v-if="item.href" :href="item.href" target="_blank">
          <span
            v-for="(letter, index2) in item.name"
            :key="`${index}-${index2}`"
            :style="{ transform: getTransform(item.offset + index2) }"
            class="personal-details__letter"
            v-text="letter"
          />
        </a>
        <span
          v-else
          v-for="(letter, index2) in item.name"
          :key="`${index}-${index2}`"
          :style="{ transform: getTransform(item.offset + index2) }"
          class="personal-details__letter"
          v-text="letter"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import meImgUrl from '../assets/me.jpg'
</script>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'linkedin',
          href: 'https://www.linkedin.com/in/lorenzvanherwaarden/',
        },
        {
          name: ' - ',
        },
        {
          name: 'resumé',
          href: '/resume.pdf',
        },
        {
          name: ' - ',
        },
        {
          name: 'github',
          href: 'https://github.com/lorenzvanherwaarden',
        },
        {
          name: ' - ',
        },
        {
          name: 'contact',
          href: 'mailto:lorenz.van.herwaarden@gmail.com',
        },
        {
          name: ' - Lorenz van Herwaarden - ',
        },
        {
          name: 'Software Engineer at Qlik - ',
        },
      ],
    }
  },

  methods: {
    getTransform(offset) {
      return `${this.getTurn(offset)}`
    },

    getTurn(offset) {
      const ratio = offset / this.amountOfLetters
      return `rotate(${ratio}turn)`
    },
  },

  computed: {
    itemsWithOffset() {
      let offset = 0
      return this.items.map((item) => {
        const formatted = {
          ...item,
          offset,
        }

        offset += item.name.length

        return formatted
      })
    },

    amountOfLetters() {
      return this.items.reduce((counter, item) => counter + item.name.length, 0)
    },
  },
}
</script>

<style scoped>
.personal-details {
  --face-dimension: 340px;
  position: relative;
  display: flex;
  align-items: center;
  transform-origin: center;
}

.personal-details a {
  color: var(--color-text);
}

.personal-details a:hover,
.personal-details a:focus {
  color: var(--color-primary);
  opacity: 1;
}

.personal-details__face {
  position: relative;
  left: 0px;
  height: calc(var(--face-dimension));
  width: calc(var(--face-dimension));
  border-radius: 50%;
  border: solid 24px var(--color-background);
  box-sizing: border-box;
}

.personal-details__info {
  position: absolute;
  width: var(--face-dimension);
  height: var(--face-dimension);
  left: calc(50% - 6px);
  top: 1px;
  animation: rotate 50s linear infinite;
  transform-origin: 6px calc(50% - 1px);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.personal-details__letter {
  font-family: 'Source Code Pro', monospace;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 11px;
  height: calc(var(--face-dimension) / 2);
  transform-origin: bottom center;
}

@media (max-width: 460px) {
  .personal-details {
    transform: scale(0.75);
  }

  .personal-details__link {
    font-size: 1.8rem;
  }
}
</style>
