# Row component

## Basic Usage

Use ``<Row>`` component as a column wrapper when you want to define a row in your layout.

### Import

```js
import { Row, Column } from 'ls-react-grid'
```

```jsx
<Row>
    <Column>1</Column>
    <Column>2</Column>
    <Column>3</Column>
</Row>
```

By the default, ``Row`` component uses flex direction value ``row``, in order to make columns in reversed order apply attribute ``reversed``.

prop | type | values | description
---|---|---|---|
reversed|boolean|true \| false|Make child columns in reversed order.

```jsx
<Row reversed>
    <Column>1</Column>
    <Column>2</Column>
    <Column>3</Column>
</Row>
```

``Row`` component supports horizontal column alignment with multiple variations by passing ``justify`` property.

prop | type | values | description
---|---|---|---|
justify | string | start \| center \| end \| between \| around \| even | Define columns horizontal alignment.

```jsx
<Row justify="center">
    <Column xs={2}>1</Column>
    <Column xs={4}>2</Column>
    <Column xs={1}>3</Column>
</Row>
```

``Row`` component also supports vertical column alignment with multiple variations by passing ``align`` property.

prop | type | values | description
---|---|---|---|
align | string | top \| middle \| bottom \| stretch | Define columns vertical alignment.

```jsx
<Row style={{ height: 300, background: '#7A8F3F' }} align="middle">
    <Column>1</Column>
    <Column>2</Column>
    <Column>3</Column>
</Row>
```

> Note: You can use up to 12 columns per one row, every extra column will be wrapped to next line.

Read next: [Column](https://github.com/stefanlazarevic/ls-react-grid/blob/master/docs/Column.md)
