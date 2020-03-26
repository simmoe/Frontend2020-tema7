<flexboxLayout class='flex-centered'>
    <label class='h1 text-center' text='page 2' />
        <cardView margin='32' elevation='40'>
            <button text='page 1' on:tap = { () => selectedTab = 0 } />
        </cardView>
</flexboxLayout>

<script>
    export let selectedTab
</script>
