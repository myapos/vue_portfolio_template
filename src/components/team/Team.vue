<template>
  <div
    class="
      team_container
      flex flex-row
      justify-center
      items-center
      flex-wrap
      border-gray-500
    "
    id="team"
  >
    <div>
      <div class="intro_text text-3xl text-center m-5">OUR TEAM</div>
      <app-ruler name="information" />
      <div class="m-5 text-center teaser">Meat our experts</div>
    </div>

    <div
      v-for="member in team"
      :key="member"
      class="m-5 team_card bg-gray-200 dark:bg-gray-500 dark:text-gray-50"
      :style="{
        backgroundImage: 'url(' + member.background_image + ')',
      }"
    >
      <app-team-card :member="member" />
    </div>
  </div>
</template>

<script>
import AppTeamCard from "./TeamCard.vue";
import * as data from "./data";
import AppRuler from "@/shared/ruler/Ruler.vue";
export default {
  name: "Team",
  components: {
    AppRuler,
    AppTeamCard,
  },
  data() {
    return {
      team: data.teamMembers,
    };
  },
};
</script>

<style scoped>
.team_container {
  max-width: 600px;
  margin: 0 auto;
}
.team_card {
  width: 150px;
  height: 150px;
  background-size: contain;
  padding: 2px;
  background-clip: content-box;
  border: 2px solid #1f2937;
}
</style>
