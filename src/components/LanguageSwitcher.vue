<template>
  <div class="language-switcher">
    <ul>
        <li :class="{ active: $i18n.locale === 'en' }">
            <a @click.prevent="changeLang('en')" href="#">English</a>
        </li>
        <li :class="{ active: $i18n.locale === 'es' }">
            <a @click.prevent="changeLang('es')" href="#">Español</a>
        </li>
        <li :class="{ active: $i18n.locale === 'pt' }">
            <a @click.prevent="changeLang('pt')" href="#">Português</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'language-switcher',
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a { text-decoration: none; }
.active {
  border-bottom: 1px solid red;
}
</style>
