import React from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const markdown = `Markdown
# 一级菜单
## 二级菜单

### Syntax highlighting (语法高亮插件)
\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

const markdown = '# Your markdown here'

ReactDOM.render(
  <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>,
  document.querySelector('#content')
)
\`\`\`

### GitHub flavored markdown (GFM 插件)
| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

### HTML in markdown (HTML 插件)
<blockquote>
  HTML in markdown is quite unsafe
</blockquote>
`;

export default function MarkDown() {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight, remarkGfm, remarkHtml]}>{markdown}
    </Markdown>
  );
}