export class Todo {
    // id 是一個可選屬性，其類型是 any，表示它可以是任何類型的數據。
    // 這通常用於標識每個 Todo 項目的唯一識別符。
    id?: any; 

    // title 是一個可選屬性，其類型是 string，表示它應該是一個字串。
    // 這通常用於描述 Todo 項目的標題。
    title?: string; 

    // description 是一個可選屬性，其類型是 string，表示它應該是一個字串。
    // 這通常用於提供 Todo 項目的詳細描述。
    description?: string;
    
    // status 是一個可選屬性，其類型是 boolean，表示它應該是一個布林值（true 或 false）。
    // 這通常用於表示 Todo 項目的完成狀態，true 表示已完成，false 表示未完成。
    status?: boolean; 
}
