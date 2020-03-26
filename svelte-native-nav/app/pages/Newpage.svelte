<page class='bg-primary'>
    <actionBar title='new world'/>
    <cardView elevation='40' margin='50' >
    <flexboxLayout class='flex-centered'>
        <label class='h2' text='New Navigation context' />
        <label class='text-center' text='This is a new navigation page context. You can either hit back in the top left corner - or set up a navigate handler yourself' textWrap={true} />
        <button text='back' on:tap={goBack} />
    </flexboxLayout>
    </cardView>
</page>

<script>
    import { goBack } from 'svelte-native'
</script>