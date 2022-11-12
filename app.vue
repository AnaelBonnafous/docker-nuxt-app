<script setup lang="ts">
const articles = await queryContent("/blog").find();
const articlePath = ref<string | undefined>();
const defaultPath = "/default";

const showArticle = (path: string = defaultPath) => (articlePath.value = path);
</script>

<template>
  <div class="container flex flex-col mx-auto h-screen">
    <div class="p-6 shadow-md">
      <NuxtLink @click.prevent="showArticle(defaultPath)" class="hover:cursor-pointer">
        <h1 class="text-2xl">Blog d'Anaël et Logan</h1>
      </NuxtLink>
    </div>
    <div class="flex justify-center gap-6 overflow-y-auto">
      <div class="flex-none mt-10">
        <p class="font-bold">Nos articles</p>
        <ul class="mt-2 list-disc">
          <li v-for="article in articles">
            <NuxtLink
              @click.prevent="showArticle(article._path)"
              class="hover:text-blue-500"
              :class="{ underline: articlePath === article._path }"
            >
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-32 overflow-y-scroll scrollbar-hide">
        <section class="prose">
          <ContentDoc :key="articlePath" :path="articlePath || defaultPath" />
        </section>
      </div>
    </div>
  </div>
</template>
