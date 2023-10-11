<template>
  <div id="app">
    <header class="header-footer">
      <h1>State of Javascript</h1>
    </header>
    <main class="framework-container" data-cy="chart">
      <div class="framework-years">
        <table>
          <thead>
            <th data-cy="chart-header-cell"></th>
            <th
              v-for="year in surveyYears"
              :key="year"
              data-cy="chart-header-cell"
            >
              {{ year }}
            </th>
            <th data-cy="chart-header-cell"></th>
          </thead>
        </table>
      </div>
      <div class="framework-items">
        <div
          class="framework-item"
          v-for="(framework, index) in frameworksData"
          :key="framework.name"
          :id="'framework-index-' + index"
        >
          <div class="framework-name" data-cy="chart-data-cell">
            {{ framework.name }}
          </div>
          <div class="framework-retentions">
            <template v-for="year in surveyYears">
              <div id="div1" data-cy="chart-data-cell">
                <div
                  v-if="frameworkHasSurvey(framework, year)"
                  id="div2"
                  data-cy="chart-circle"
                >
                  <p>{{ getRetentionPercentage(framework, year) }}</p>
                </div>
              </div>
            </template>
          </div>
          <div class="framework-name" data-cy="chart-data-cell">
            {{ framework.name }}
          </div>
        </div>
      </div>
    </main>
    <footer class="header-footer">Footer</footer>
  </div>
</template>

<script>
import { frameworksData } from "./frameworksData.js";

export default {
  data() {
    return {
      frameworksData: frameworksData,
      surveyYears: frameworksData[0].surveys.map((survey) => survey.year),
    };
  },
  methods: {
    frameworkHasSurvey(framework, year) {
      return framework.surveys.some((survey) => survey.year === year);
    },
    getRetentionPercentage(framework, year) {
      const survey = framework.surveys.find((survey) => survey.year === year);
      return survey ? survey.retention + "%" : "";
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .framework-container {
    overflow-x: hidden;
  }
}

html,
body {
  max-width: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0;
}

#div1 {
  min-height: 1px;
  min-width: 1px;
}


.header-footer {
  background-color: white;
  padding: 1rem 0;
  text-align: center;
}

.header-footer h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
.framework-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 760px;
}

.framework-retentions {
  display: flex;
  justify-content: flex-end; /* Align the content to the flex-end */
  align-items: center; /* Center content vertically */
}
.framework-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.framework-retentions {
  display: flex;
}
.framework-years {
  margin-left: 3.5rem;
}
.framework-name {
  display: flex;
  font-weight: bold;
  margin-right: 10px;

}

.framework-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}


table {
  border-collapse: separate;
  border-spacing: 5px;
}

th,
td {
  font-weight: bold;
  text-align: center;
  padding: 5px;
  margin: 2px;
  width: 20px;
}

#framework-index-0 {
  color: #4861ec;
}

#framework-index-1 {
  color: #47cfed;
}

#framework-index-2 {
  color: #ef4e88;
}

#framework-index-3 {
  color: #4bc77e;
}

#framework-index-4 {
  color: #fe6a6a;
}

#framework-index-5 {
  color: #ffe589;
}

#framework-index-6 {
  color: #3abbb3;
}

#framework-index-7 {
  color: #ec9c23;
}

#framework-index-8 {
  color: #5a9e38;
}

#framework-index-9 {
  color: #1fa0f2;
}

#framework-index-10 {
  color: #8d4ca8;
}

.framework-td {
  border: 2px solid black;
}

.react {
  border-color: #4861ec;
}

.vue {
  border-color: #49c1db;
}

.angular {
  border-color: #d64a7e;
}

.ember {
  border-color: #4aaf71;
}

.preact {
  border-color: #e06263;
}

.svelte {
  border-color: #e2cd7f;
}

.alpine {
  border-color: #369690;
}

.lit {
  border-color: #e08636;
}

.solid {
  border-color: #508636;
}

.qwik {
  border-color: #2095dd;
}

.stencil {
  border-color: #4861ec;
}
</style>
