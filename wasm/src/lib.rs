use wasm_bindgen::prelude::*;
mod regex_example;
use regex_example::extract;
use serde_wasm_bindgen::to_value;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello {} from Wasm!", name)
}

#[wasm_bindgen]
pub fn regex_extract(pattern: &str, text: &str) -> JsValue {
    let result = extract(pattern, text);
    to_value(&result).unwrap()
}
