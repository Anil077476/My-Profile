export default class Utils {
  static goto(url: URL): void {
    window.open(url.toString(), '_blank');
  }
}
