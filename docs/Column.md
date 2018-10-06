# Column component

## Basic Usage

``<Column>`` components represents a column in your layout. Use ``Column`` component to wrap your column content.

### Import

```js
import { Column } from 'ls-react-grid'
```

```jsx
<Column>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
</Column>
```

By the default column uses flex direction ``column``, if you need column content in reversed direction, pass the property ``reversed`` to the component.

prop | type | values | description
---|---|---|---|
reversed|boolean|true \| false|Make child content in reversed order.

```jsx
<Column reversed>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
</Column>
```

Like in bootstrap, every column comes with side padding of 15px to create space between columns.
In order to remove this space, pass property ``noPadding`` to the component.

```jsx
<Row>
    <Column noPadding>
        <div style={{background: '#3D7E9A', color: '#fff'}}>1</div>
    </Column>
    <Column noPadding>
        <div style={{background: '#3D7E9A', color: '#fff'}}>2</div>
    </Column>
    <Column noPadding>
        <div style={{background: '#3D7E9A', color: '#fff'}}>3</div>
    </Column>
</Row>
```

By the default ``Column`` component uses flex auto value to determine width. If you need to fix column size in your design, you can do so by providing properties ``fixed`` and ``width`` to the column.

```jsx
<Row>
    <Column fixed width="200px">200px Column</Column>
    <Column>auto width column</Column>
</Row>
```

In order to create responsive columns, component provide media hooks which you can use to
tell how much row space it should take on each media.

prop | media | values | Description
---|---|---|---|
xs | <576px | 1-12 | Set column width when viewport is <576px.
sm | ≥576px | 1-12 | Set column width when viewport is ≥576px.
md | ≥768px | 1-12 | Set column width when viewport is ≥768px.
lg | ≥992px | 1-12 | Set column width when viewport is ≥992px.
xlg | ≥1200px | 1-12 | Set column width when viewport is ≥1200px.

```jsx
<Row>
    <Column xs={12}>xs=12</Column>
    <Column xs={12} sm={6}>xs=12 sm=6</Column>
    <Column xs={12} sm={6} md={3}>xs=12 sm=6 md=3</Column>
    <Column xs={12} md={9}>xs=12 md=9</Column>
    <Column xs={8} lg={6} xlg={12}>xs=8 lg=6 xlg=12</Column>
    <Column xs={4} lg={6}>xs=4 lg=6</Column>
</Row>
```

Sometimes you are required to hide column on specific viewport, in order to do so with this package instead of providing column size to the media hook, pass value ``hidden`` and which apply css ``display: none`` to the column on specified viewport.

```jsx
<Row>
    <Column xs={12} md={8}>
        <p>Content column</p>
    </Column>
    <Column xs="hidden" md={4}>
        <p>Desktop Advertise</p>
    </Column>
</Row>
```

As mentioned, by the default column size is set to flex ``auto`` value, but if you need to use auto column width on some specific viewport you can pass value ``auto`` to the respective media hook.

```jsx
<Row>
    <Column xs={12} sm={2} md={3}>1</Column>
    <Column xs={12} sm="auto">2</Column>
    <Column xs={12} sm={2}>3</Column>
</Row>
```
