<template>
  <nq-page title="Page"
           max-width="md">
    <template slot="aside">
      <h2>Aside</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus odio nunc, id pellentesque lacus tempor semper. Suspendisse at nulla aliquet, efficitur tellus id, euismod risus. Integer sapien metus, tristique nec venenatis ut, sagittis eu magna. Etiam magna enim, sollicitudin in iaculis quis, pulvinar tempus sem. Nunc et tincidunt nunc. Vestibulum ornare posuere libero, non consectetur ipsum congue a.</p>
    </template>
    <h2>nq-page</h2>
    <p>Creates an internal layout for a page.</p>
    <h3>Attributes</h3>
    <ul>
      <li><code>title</code> The text to be used as title (h1)</li>
      <li><code>max-width</code> xs, sm, md, lg or xl to define the max width of the page </li>
      <li><code>aside-cols</code> from 1 to 12, to set how many columns will the aside slot (if exist) will take. 12 By default, for extra small (xs) devices</li>
      <li><code>aside-cols-sm, aside-cols-md, aside-cols-lg, aside-cols-xl</code> from 1 to 12, to set how many columns will the aside slot (if exist) will take, in small (sm), medium (md), large (lg) and extra large (xl) devices. 4, 3, 3, 3 by default respectively.</li>
    </ul>
    <h3>Slots</h3>
    <ul>
      <li><code>aside</code> Add any element to the aside area, for example a filter form</li>
    </ul>
    <h2>Sample code</h2>
    <vue-code-highlight>
&#x3C;nq-page title=&#x22;Page&#x22;
           max-width=&#x22;md&#x22;&#x3E;
    &#x3C;template slot=&#x22;aside&#x22;&#x3E;
      &#x3C;h2&#x3E;Aside&#x3C;/h2&#x3E;
      &#x3C;p&#x3E;Lorem ipsum dolor sit amet, ....&#x3C;/p&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;h2&#x3E;nq-page&#x3C;/h2&#x3E;
    &#x3C;p&#x3E;Nunc finibus odio nunc, id pellentesque lacus tempor semper....&#x3C;/p&#x3E;
&#x3C;/nq-page title=&#x22;Page&#x22;
    </vue-code-highlight>
  </nq-page>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {}
  }
}
</script>
