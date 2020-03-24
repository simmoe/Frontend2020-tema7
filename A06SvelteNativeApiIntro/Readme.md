# Svelte Native simple API setup

This is a simple IOS/Android app that uses the excellent <a href='https://newsapi.org/'>World News API</a> to fetch and display news from around the world. It is build using <a href='https://svelte-native.technology/'>svelte-native</a>, a minimalistic and concise javascript compiler for native development. Svelte-native again builds on <a href='https://www.nativescript.org/'>Nativescript</a>, so in order to build the project you will need to go through their setup guide and install the Telerik cl tools. 

## Setup and build
To test the project, run
```html

npm install
tns run ios/android

```
## Project structure
### App.svelte 
...is the main entrance to the project. This file 
- fetches news-data
- shows an initial scrollable list of news 
- can save a default 'city' value to local storage 
- checks for whether this value is set initially, and thus fetches news from the default location automatically

### ./modals/Article.svelte
Article is a component show via svelte-native's showModal() function. It is a simple article display that
- displays more detailed information about the news article, which is sent from the main component as a prop
- uses closeModal() to get back to the main screen 
   

