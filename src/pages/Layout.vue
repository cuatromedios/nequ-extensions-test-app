<template>
  <nq-page title="Layouts"
           max-width="md">
    <h2>nq-layout</h2>
    <p>Creates a layout that includes a header bar that can contain a logo and a menu.</p>
    <h3>Attributes</h3>
    <ul>
      <li><code>toolbar-class</code> Classes to be added to the toolbar, for examle to change the background, if not set, the default is 'bg-primary text-white'</li>
      <li><code>indicatorColor</code> A named color to use as in the indicator, 'secondary' by default</li>
      <li><code>tabs</code> An array to define the tabs menu (see sample below)</li>
      <li><code>menuIcon</code> The named icon to be used as in the button that toggles the hamburger menu in mobile devices. 'menu' (Material Icon) by default, can be set, for example to 'fal fa-bars' if using fontAwesome</li>
    </ul>
    <h3>Slots</h3>
    <ul>
      <li><code>title</code> Add any element to the title area, for example an image</li>
    </ul>
    <h2>Sample code</h2>
<vue-code-highlight>
&#x3C;template&#x3E;
  &#x3C;nq-layout toolbarClass=&#x22;bg-black text-white&#x22; :tabs=&#x22;tabs&#x22;&#x3E;
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
          to: &#x27;layout&#x27;
        },
        {
          title: &#x27;Fields&#x27;,
          icon: &#x27;code&#x27;,
          children: [
            { title: &#x27;Field&#x27;, to: &#x27;field&#x27; },
            { title: &#x27;Input&#x27;, to: &#x27;input&#x27; },
            { title: &#x27;Number&#x27;, to: &#x27;number&#x27; },
            { title: &#x27;Currency&#x27;, to: &#x27;currency&#x27; },
            { title: &#x27;Percentage&#x27;, to: &#x27;percentage&#x27; },
            { title: &#x27;Select&#x27;, to: &#x27;select&#x27; }
          ]
        },
        {
          title: &#x27;Forms&#x27;,
          icon: &#x27;code&#x27;,
          to: &#x27;form&#x27;
        },
        {
          title: &#x27;Table&#x27;,
          icon: &#x27;code&#x27;,
          to: &#x27;table&#x27;
        }
      ]
    }
  }
}
&#x3C;/script&#x3E;
</vue-code-highlight>
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
