# Svelte native Firestore 
This is a simple App for IOS/Android that connects to firebase/firestore with a fetch call to the build in REST API.

It uses the <a href='https://svelte-native.technology/docs'>svelte-native</a> framework to build a native application. Svewlte-native is build on top of <a href='http://nativescript.org'>Nativescript</a>, so you need to go through the setup guide there in order to install the TNS CLI tools.   

## Set up
```html
npm install 
ths run [ios|android]
```

## Project structure 
This is a single page application. Everything is handled in app/App.svelte. This file...
- Fetches data from firestore in the svelte onMount function
- uses a <a href='https://svelte-native.technology/docs#scrollview'>scrollView</a> to display the list of items
- you are not able to do anything further with the items - i.e delete, update og add - so the example just serves as a demo of how you vcan include firestore data in a simple app


