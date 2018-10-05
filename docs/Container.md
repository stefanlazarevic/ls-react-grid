# Container component

``<Container>`` component represents the root of a grid layout, but it can be used more then once based on the design you are building.

``Container`` by the default use responsive pixel width to make sure your layout look good across all viewport and device sizes.

``Container`` width is based on Bootstrap 4 media queries, in the following table you can see how aspects of the grid system work across multiple devices.

media | max width
---|---|
<576px | auto
≥576px | 540px
≥768px | 720px
≥992px | 960px
≥1200px | 1140px

To make ``Container`` always 100% across all viewports use property ``fluid``.

prop | type | values | description
---|---|---|---|
fluid | boolean | true \| false | Make container ``width: 100%`` across all viewport and device sizes.

```jsx
<Container fluid>
    <Row></Row>
    <Row></Row>
</Container>
```

Read next: [Row](https://github.com/stefanlazarevic/ls-react-grid/blob/master/docs/Row.md)
