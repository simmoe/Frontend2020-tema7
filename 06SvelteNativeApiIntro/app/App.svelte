<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import Article from './modals/Article.svelte'

    const api_key = 'ed87ebff01bb4f5998eed5fb8a0aba89'
    const url = `https://newsapi.org/v2/top-headlines?country=no&apiKey=${api_key}`

    let articles = []

    onMount(() => {
        fetch(url)
            .then( response => response.json() )
            .then( json => {
                articles = json.articles
            })
            .catch( error => console.log(error) )
    })

    const showArticle = async (article) => {
        await showModal(
            {
                page: Article,
                props:{
                    article:article
                }
            }
        )
    }

</script>

<page>
    <actionBar title="World News" />
    <stackLayout>
        <scrollView>
            <stackLayout class='articles'>            
                {#each articles as article}
                    <stackLayout
                        on:tap={ () => showArticle(article)} 
                        class='article'>
<image class='img-rounded' src='{article.urlToImage}' alt='cover' stretch='aspectFill' />
<label textWrap="{false}" class='h2 text-center white' text='{article.title}' />
<label class='body' text='{article.author}'/>
                    </stackLayout>
                {:else}
                    <activityIndicator busy={true} />
                {/each}
            </stackLayout>
        </scrollView>
    </stackLayout>
</page>

<style>
    page{
        width:100%;
        background:black;
    }
    .article{
        padding-bottom:24;
        animation:leftIn .4s ease;
    }
    @keyframes leftIn{
        from{
            transform:translate(-10,0)
        }
        to{
            transform:translate(0,0)
        }
    }
    .h2{
        margin-left:0;
        padding-left:0;
        margin-top:10;
    }
    .white{
        color:white;
    }
</style>
