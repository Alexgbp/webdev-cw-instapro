export function sanHtml (string) {
    return string.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
}