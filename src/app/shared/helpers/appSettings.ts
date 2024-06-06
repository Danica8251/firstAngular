/**
 * 在開始新增 Services 程式前，我們可以考慮將固定的參數值放在 appSettings.ts 中，
 * 來增加一些彈性。在 shared目錄下新增一個　helpers 的子目錄，並新增一支 appSettings.ts 程式，
 * 內容如下。設置一個靜態常數 API_URL，並把它 export 出來，讓外面的程式可以引用它。
*/

export class AppSettings {
    static API_URL = 'http://localhost:5000/api/';
}