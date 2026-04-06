# react-blue-bag

A styled React component library using TailwindCSS v4.

## Install

```bash
npm install react-blue-bag
```

> Also install TailwindCSS in your project if you haven't already.

## Usage

```jsx
import Input from "react-blue-bag";
import "react-blue-bag/style.css";

function App() {
  return (
    <Input
      label="Email"
      placeholder="you@example.com"
      hint="We'll never share your email."
    />
  );
}
```

## Input Props

| Prop       | Type                               | Default     | Description                    |
| ---------- | ---------------------------------- | ----------- | ------------------------------ |
| `label`    | `string`                           | —           | Label text above the input     |
| `hint`     | `string`                           | —           | Helper text below the input    |
| `error`    | `string`                           | —           | Error message (overrides hint) |
| `size`     | `'sm' \| 'md' \| 'lg'`             | `'md'`      | Input size                     |
| `variant`  | `'default' \| 'filled' \| 'ghost'` | `'default'` | Visual style variant           |
| `icon`     | `ReactNode`                        | —           | Icon displayed on the left     |
| `required` | `boolean`                          | —           | Marks field as required        |
| `...rest`  | HTML input attributes              | —           | All standard input props       |

## License

MIT
