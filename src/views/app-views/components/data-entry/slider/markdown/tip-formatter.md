---
order: 3
title:
  zh-CN: 自定义提示
  en-US: Customize tooltip
---

## zh-CN

使用 `tooltip.formatter` 可以格式化 `Tooltip` 的内容，设置 `tooltip.formatter={null}`，则隐藏 `Tooltip`。

## en-US

Use `tooltip.formatter` to format content of `Toolip`. If `tooltip.formatter` is null, hide it.

```jsx
import { Slider } from 'antd';
import React from 'react';
const formatter = (value) => `${value}%`;
const TipFormatter = () => (
  <>
    <Slider
      tooltip={{
        formatter,
      }}
    />
    <Slider
      tooltip={{
        formatter: null,
      }}
    />
  </>
);
export default TipFormatter;
```
