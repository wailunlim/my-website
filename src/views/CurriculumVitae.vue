<template>
  <div class="about my-5 container">
    <h1>Curriculum Vitae</h1>
    <Education />
    <WorkExperience />
    <OrganisationalAndCommitteeExperience />
    <Projects />
    <SkillSets />
    <Appendix />
  </div>
</template>

<script>
import Education from "../components/cv/Education.vue";
import WorkExperience from "../components/cv/WorkExperience.vue";
import OrganisationalAndCommitteeExperience from "../components/cv/OrganisationalAndCommitteeExperience.vue";
import Projects from "../components/cv/Projects.vue";
import SkillSets from "../components/cv/SkillSets.vue";
import Appendix from "../components/cv/Appendix.vue";

export default {
  components: {
    Education,
    WorkExperience,
    OrganisationalAndCommitteeExperience,
    Projects,
    SkillSets,
    Appendix
  }
};
</script>

<style scoped>
.education,
.work-experience,
.org-and-comm-exp,
.projects,
.skill-sets {
  text-align: left;
}

h1 {
  font-size: 4em;
}
</style>
