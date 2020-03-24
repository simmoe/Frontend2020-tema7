<script>
    import { onMount } from 'svelte'
    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    import { showModal } from 'svelte-native'
    import Article from './modals/Article.svelte'

    let countryNumber = 0 
    let country = 'us'
    $: {
        country = countryNumber == 0 ? 'us' : 'no'
        getData()
    }

    const api_key = 'ed87ebff01bb4f5998eed5fb8a0aba89'

    const getData = () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`
        fetch(url)
            .then( response => response.json() )
            .then( json => {
                articles = json.articles
            })
            .catch( error => console.log(error) )
    } 
    const test = 0

    let articles = []

    onMount(() => {
        if(appSettings.getNumber('default-country')){
            countryNumber = appSettings.getNumber('default-country')
        }
        getData()
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
    const setDefaultCountry = () => {
        appSettings.setNumber('default-country', countryNumber)
    }
</script>

<page>
    <actionBar title="World News" />
    <stackLayout>
    <segmentedBar 
        selectedBackgroundColor='black' 
        style='margin: 12;' 
        bind:selectedIndex={countryNumber}>

        <segmentedBarItem title="USA" />
        <segmentedBarItem title="Norway" />
    </segmentedBar>
    <button on:tap={setDefaultCountry} text='set default'/>
        <scrollView>
            <stackLayout class='articles'>    
                {#each articles as article}
                    <flexBoxLayout
                        on:tap={ () => showArticle(article)} 
                        class='article'
                        style="background-image:url('{article.urlToImage}')"
                        >
                        <!-- <image class='img-rounded image' height='300' src='{}' alt='cover' stretch='aspectFill' /> -->
                        
                        <label textWrap="{true}" class='h2 white article-heading' text='{article.title}' />
                    </flexBoxLayout>
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
        margin:12;
        height:300;
        background-size:cover;
        flex-direction:column;
        justify-content:flex-end;
        align-items:center;
        animation: leftIn .4s ease;
    }
    @keyframes leftIn{
        from{
            transform:translate(-10, -10)
        }
        to{
            transform:translate(0, 0)
        }
    }
    .white{
        color:white;
    }
</style>
