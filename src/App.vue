<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  background-color: #2c3e50;
}

.actions {
  padding: 5px;
  margin: 5px;
  text-align: center;
  color: white;
  font-family: Menlo;
  font-size: 15px;
}

.toggle-btn {
  padding: 5px;
  margin: 5px;
  background-color: #209900;
  cursor: pointer;
  -webkit-user-select: none;
}

#options,
.lane-info-wrapper {
  background-color: #ecf0f1;
  width: 1260px;
  margin: 10px auto;
  padding: 10px;
}

.lane-info {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.lane-l-info,
.lane-r-info {
  font-weight: bold;
}

.lane-l-info {
  padding-right: 25px;
}

.lane-r-info {
  padding-left: 25px;
}

#gameCanvas {
  background-color: #ecf0f1;
}

.team-wrapper {
  width: 50%;
  float: left;
}

.right-team {
  text-align: right;
}

.role {
  font-weight: bold;
  width: 200px;
}

.info-input {
  width: 60px;
}
</style>
