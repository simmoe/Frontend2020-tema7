# Multiple API's
Say we wanted to fetch data from several api's and display results as tabs in our app. This is an example of a svelte native app with three differrent fetches in App.svelte, implemented as a promise function: 
```html
const getData = (url) => {
    console.log('THIS IS A JS PROMISE ')
    return new Promise( resolve => {
        fetch(url)
        .then( response => response.json() )
        .then( response => {
            console.log('got results')
            if(response.fault){
                console.log(response.fault.faultstring)
            }else{
                return resolve(response)
            }
        })         
    })
} 
``` 
The function takes a Url as a parameter, tries to fetch the data - and in case that works out, returns the resolved promise. If not, it logs an error to the console. 

Don't forget to insert personal api keys to new york times api and moviedb api
