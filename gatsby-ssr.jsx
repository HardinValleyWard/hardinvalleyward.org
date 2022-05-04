const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
    <script key="bootstrap-script" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}