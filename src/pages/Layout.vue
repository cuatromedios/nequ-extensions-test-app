<template>
  <nq-page title="Layouts"
           max-width="md">
    <template slot="aside">
      <h2>Aside</h2>
    </template>
    <h2>Features</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit lacinia euismod. Maecenas ac ante non velit fringilla ullamcorper ac sit amet justo. Pellentesque quis consequat ante. Vestibulum imperdiet tristique eros, eu dictum nulla tempor eget. Vestibulum erat nibh, eleifend sit amet ullamcorper eget, varius sed augue. Sed finibus quam nisi, ac maximus mauris laoreet quis. Donec suscipit, lacus nec consectetur placerat, nibh felis pellentesque neque, et viverra felis quam vitae nisl. Quisque vel elit purus. Fusce nec lacinia ligula, eu laoreet quam. Sed felis sapien, pellentesque vestibulum purus a, tincidunt malesuada justo. Sed commodo scelerisque metus sit amet sollicitudin. Cras tincidunt blandit justo et pretium. In sagittis, urna at accumsan feugiat, eros magna tincidunt nibh, a ullamcorper augue augue sed nisi.</p>
    <h2>Sample code</h2>
    <pre>
&#x3C;template&#x3E;
  &#x3C;nq-layout toolbarClass=&#x22;&#x22; :tabs=&#x22;tabs&#x22;&#x3E;
    &#x3C;template slot=&#x22;title&#x22;&#x3E;
      &#x3C;q-btn flat label=&#x22;Header&#x22;/&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;router-view /&#x3E;
  &#x3C;/nq-layout&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;

export default {
  name: &#x27;MainLayout&#x27;,
  components: {},
  data () {
    return {
      tabs: [
        {
          title: &#x27;Layouts&#x27;,
          icon: &#x27;code&#x27;,
          route: &#x27;layout&#x27;
        },
        {
          title: &#x27;Fields&#x27;,
          icon: &#x27;code&#x27;,
          children: [
            { title: &#x27;Field&#x27;, route: &#x27;field&#x27; },
            { title: &#x27;Input&#x27;, route: &#x27;input&#x27; },
            { title: &#x27;Number&#x27;, route: &#x27;number&#x27; },
            { title: &#x27;Currency&#x27;, route: &#x27;currency&#x27; },
            { title: &#x27;Percentage&#x27;, route: &#x27;percentage&#x27; },
            { title: &#x27;Select&#x27;, route: &#x27;select&#x27; }
          ]
        },
        {
          title: &#x27;Forms&#x27;,
          icon: &#x27;code&#x27;,
          route: &#x27;form&#x27;
        },
        {
          title: &#x27;Table&#x27;,
          icon: &#x27;code&#x27;,
          route: &#x27;table&#x27;
        }
      ]
    }
  }
}
&#x3C;/script&#x3E;

    </pre>
  </nq-page>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {}
  }
}
</script>
