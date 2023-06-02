import { marked } from "marked";
import "./style.css";

function MarkDownConverter({ value }) {
  const markdownToHtml = value => {
    const renderer = new marked.Renderer();

    // 코드블럭, 인용문, 링크 스타일링을 위한 코드이다.
    renderer.code = code => {
      return `<pre><code>${code}</code></pre>`;
    };

    renderer.blockquote = quote => {
      return `<blockquote>${quote}</blockquote>`;
    };

    renderer.link = (href, title, text) => {
      return `<a href=${href} target="_blank"><strong>${text}<strong></a>`;
    };

    const options = {
      renderer,
      // marked 경고 메시지를 해제하는 옵션이다.
      mangle: false,
      headerIds: false,
    };

    const convertedValue = value
    .replace(/>toggle/g, `<details>`)
    .replace(/>title/g, `<summary>`)
    .replace(/<title/g, `</summary>`)
    .replace(/<toggle/g, `</details>`);

    const html = marked(convertedValue, options);

    return html;
  };

  const html = markdownToHtml(value);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default MarkDownConverter;
