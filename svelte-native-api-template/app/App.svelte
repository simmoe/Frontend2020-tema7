<page>
    <actionBar title="The bestseller list" />
    <scrollView>
        <stackLayout>
            {#each results as item}
                <flexBoxLayout class='book' on:tap={() => onItemTap(item) }>
                    <image src='{item.book_image}' width="150" class="img-rounded" stretch='aspectFit' alt='cover' /> 
                    <stackLayout class='book-description'>
                        <label class='h2 text-primary' text="{item.title}" />
                    </stackLayout>
                </flexBoxLayout>
            {:else}
                <activityIndicator busy="{true}" />
            {/each}
        </stackLayout>
    </scrollView>
</page>

<script>
    import { Template } from 'svelte-native/components'
    import { onMount } from 'svelte'

    const my_api_key = 'g6R76FJJwgaLM8lQCROIJBHQY8BH3Brx' //but that's MINE, get your own at https://api.nytimes.com/
    
    let results = []

    const onItemTap = (item) => {
        console.log('item tapped: ', item.title)
    }

    onMount( () => {
        console.log('ok...')
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${my_api_key}`)
        .then( response => response.json() )
        .then( json => {
            console.log('got results')
            if(json.fault){
                console.log(json.fault.faultstring)
            }else{
                //console.log(json.results.books[0])
                results = json.results.books
            }
        } 
        ).catch((err) => console.log(err))    
    })

</script>

<style>
    .book{
        background-color: black;
        border-bottom-color:gray;
        border-bottom-width:1px;
    }
    .book-description{
        padding:24;
    }
</style>
