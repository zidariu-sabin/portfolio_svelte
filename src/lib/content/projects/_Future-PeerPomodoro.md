---
title: PeerPomodoro
description: "The goal of this project is to develop a real-time collaborative Pomodoro timer web platform that enables users - such as teams, study groups, or remote coworkers - to manage focused work sessions together."
label: planning
url: https://github.com/zidariu-sabin/Finance_tracker_iteration_0_assig_1
updatedAt: "2025-06-11T17:02:36Z"
languages:
- name: HTML
  color: "#e34c26"
  size: 49.4
- name: "C#"
  color: "#178600"
  size: 48.0
- name: CSS
  color: "#663399"
  size: 2.2
- name: JavaScript
  color: "#f1e05a"
  size: 0.3
readMeOid: fa359d7
---
### descriere
- Send a link (ca in jocuri gen colonist/gartic phone sau aplicatii gen Netflix) cu care sa creezi o sesiune in care sa aveti un timer pomodoro comun cu optiunea de play pause

### stack
- Vue.js
- Webockets
### features
- stopping the timer
- create a live session pomodoro shared thrrough a link
- alarm
- notification
	- task bar flickering notification
	- tab bar flickering/coloring
- visual working/paused/break/expired state 
### implementation ideas
- run up a web server on one of the machines to be available for the other
- run up an instance on a dedicated web server for the sessions
- hostat prin firebase cu optiune de donat si redirect catre site ul de portofoliu unde sa am sectiune pentru proiect facuta cu web crawler-ul
- rate limiter pentru request uri
- running my computer as the web socket server and connecting to a cloud served client when a server is available
	- meaning that you would select your server in the frontend interface to hold the connection 