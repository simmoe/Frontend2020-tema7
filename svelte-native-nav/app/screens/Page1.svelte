<flexboxLayout class='flex-centered'>
    <label class='h1 text-center' text='page 1' />  
    <button text='new world' on:tap={goToPage} />
</flexboxLayout>

<script>

    import { navigate }  from 'svelte-native'
    import Newpage from '../pages/Newpage.svelte'

    const goToPage = () => {
        navigate({
            page:Newpage
        })
    }


</script>