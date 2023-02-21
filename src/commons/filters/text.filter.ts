export class TextFilter {
  filter(text?: string, searchText?: string): boolean {
    return text && searchText
      ? text.toUpperCase().includes(searchText.toUpperCase())
      : true;
  }
}
