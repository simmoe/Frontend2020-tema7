<page>
    <actionBar title="Svelte Firestore REST" />
    <scrollView class='main'>
        <stackLayout>
            {#each items as item}
                <flexboxLayout class='product'>
                    <image src={item.fields.image} stretch='aspectFit' />
                    <stackLayout>                
                        <label class='h1' text={item.fields.title} />
                        <label class='body' text={item.fields.price}$ />
                    </stackLayout>
                </flexboxLayout>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</page>

<script>
 import FirestoreParser from 'firestore-parser'
 let items =[]
 const baseUrl = 'https://firestore.googleapis.com/v1/'
 const productsUrl = 
 baseUrl + 'projects/svelte-native-fb-rest/databases/(default)/documents/products'

const getProducts = () => {
    fetch(productsUrl)
    .then( response => response.json() )
        .then( json => FirestoreParser(json) )
            .then( parsed => {
                items = parsed.documents
                console.log(items)
            })
    .catch( error => console.log(error) )
}

getProducts()

</script>

<style>
    .main{
        background-color:#aaa;
    }
    .product{
        margin: 8 8 0 8;
        background-color:lightgray;
        border-radius:8;
        padding:16;
    }
    .product > image{
        height:80;
        margin-right:16;
    }
</style>
