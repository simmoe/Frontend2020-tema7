<script>
    import { closeModal } from 'svelte-native'
    export let article
</script>

<frame>
<page>
    <scrollView>
        <stackLayout style='padding:24'>
            <textField class='h1' text='{article.title}' />
            <textField class='primary' text='{article.author}' />
            <textView class='body' text='{article.description}' />
            <image 
                class='img-rounded'
                src='{article.urlToImage}'
                alt='article cover image'
                stretch='aspectFill'
                />
            <button on:tap={ () => closeModal() } text='close' />
        </stackLayout>
    </scrollView>
</page>
</frame>