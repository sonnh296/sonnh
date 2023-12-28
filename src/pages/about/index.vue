<template>
  <div>
    <p class="lg:w-4/5">
      Hi, <br />
      I am Nguyen Hong Son, I am a developer currently based in Vietnam <br />
      I've got experience in both backend and frontend programming. They all are
      cool, but AIs have made them somewhat less appealing to me, so I am going
      to explore about infrastructures and systems, <br />
      It's quite dry, but enough difficult to fvk your brain, and this field is
      called Networks and Cloud :D <br />
      <br />

      I found that many people approach studying coding in a wrong way. And I
      think I can share something valuable<br />
      to everyone. It is useful in a long journey. I love to do this job. <br />
      <br />
    </p>
    <p class="underline">
      I also like sports, let's play together if there are occasions. I'm also a
      person with a lot of feelings, so trust me, you will never be
      disappointed.
    </p>
    <p class="pt-5 text-red-400" v-if="locale == 'vi'">
      This intro has no Vietnamese version!
    </p>
  </div>
</template>

<script setup>
const { locale } = useI18n();
definePageMeta({
  layout: "public",
});
</script>
