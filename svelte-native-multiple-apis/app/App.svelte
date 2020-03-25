<page>
    <actionBar title="The bestseller list" />
<tabs >
    <tabStrip>
            <tabStripItem>
                <label text="Books" />
            </tabStripItem>
            <tabStripItem>
                <label text="Pop movies" />
            </tabStripItem>
            <tabStripItem>
                <label text="Rated movies" />
            </tabStripItem>
        </tabStrip>

        <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
        <tabContentItem>
            <listView items="{books}" on:itemTap="{onItemTap}">
                <Template let:item>
                    <label text="{item.title}" />
                </Template>
            </listView>
        </tabContentItem>
        <tabContentItem>
            <listView items="{pop_movies}" on:itemTap="{onItemTap}">
                <Template let:item>
                    <label text="{item.title}" />
                </Template>
            </listView>
        </tabContentItem>
        <tabContentItem>
            <listView items="{rate_movies}" on:itemTap="{onItemTap}">
                <Template let:item>
                    <label text="{item.title}" />
                </Template>
            </listView>
        </tabContentItem>
    </tabs>
</page>

<script>
    import { onMount } from 'svelte'
    import { Template } from 'svelte-native/components'
    const nyt_api_key = 'YOUR_NEW_YORK_TIMES_API_KEY' 
    const moviedb_api_key = 'YOUR_MOVIEDB_API_KEY' 
    const api_url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${my_api_key}`
    const pop_movie_api_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${moviedb_api_key}`
    const rate_movie_api_url = `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=${moviedb_api_key}`


    let books = ['hejh', 'per']
    let pop_movies = []
    let rate_movies = []


    const onItemTap = (item) => {
        console.log('item tapped: ', item.title)
    }

    onMount( () => {
        getData(api_url)
        .then(res => books = res.results.books)
        getData(pop_movie_api_url)
        .then(res => pop_movies = res.results)
        getData(rate_movie_api_url)
        .then(res => rate_movies = res.results)
    })

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

</script>

<style>
    page{
        background-color:lightgray;        
    }
    .book{
        height:100;
        margin:24 24 0 24;
        
    }
    .book-description{
        padding:24;
    }
</style>
