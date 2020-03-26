<page actionBarHidden={true}>
   <tabs bind:selectedIndex={selectedTab} tabsPosition='bottom'>
	<tabStrip>
		<tabStripItem class='blue'>
			<label text="Page 1" />
		</tabStripItem>
		<tabStripItem>
			<label text="Page 2" />
		</tabStripItem>
		<tabStripItem >
			<label text="Page 3" />
		</tabStripItem>
	</tabStrip>

	<tabContentItem>
        <cardView margin='32' elevation='40'>
            <Page1 />
        </cardView>
	</tabContentItem>

	<tabContentItem>
        <cardView margin='32' elevation='40'>
            <Page2 bind:selectedTab={selectedTab} />
        </cardView>
	</tabContentItem>

	<tabContentItem>
        <cardView margin='32' elevation='40'>
            <Page3 />
        </cardView>
	</tabContentItem>
</tabs>
</page>

<script>
//first: tns plugin add @nstudio/nativescript-cardview

import { registerNativeViewElement } from 'svelte-native/dom'
 
registerNativeViewElement("cardView", () => 
    require("@nstudio/nativescript-cardview").CardView
)

    import Page1 from './screens/Page1.svelte'
    import Page2 from './screens/Page2.svelte'
    import Page3 from './screens/Page3.svelte'

    let selectedTab = 0

</script>

<style>
    .blue{
        padding:24;
        animation: leftIn 1s ease;
    }
    @keyframes leftIn{
        from{
            transform:translate(-100,0);
        }
        to{
            transform:translate(0,0);
        }
    }
</style>
