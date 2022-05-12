<template>
  <div class="name-and-role">
    <transition-group name="tags" tag="h1">
      <h1
        v-for="item in items"
        :key="item.id"
        v-html="item.label"
        class="name-and-role__tag"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },

  mounted() {
    window.setTimeout(() => {
      this.items.push({
        id: "name",
        label: "Lorenz van Herwaarden",
      });
    }, 500);

    window.setTimeout(() => {
      this.items.push({
        id: "role",
        label: `Software Engineer at <a href="https://www.qlik.com" target="_blank" class="name-and-role__link">Qlik</a>`,
      });
    }, 2000);
  },
};
</script>

<style>
.name-and-role {
  position: fixed;
  left: 28px;
  bottom: 10px;
  margin: var(--spacing-small);
}

.name-and-role__tag {
  transition: all 1s;
}

.name-and-role__link,
.name-and-role__link:hover,
.name-and-role__link:focus {
  font-weight: 700;
  color: var(--color-text);
  border-bottom: solid 2px var(--color-text);
}

.tags-enter-from,
.tags-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.tags-leave-active {
  position: absolute;
}
</style>
