use regex::Regex;

pub fn extract(pattern: &str, text: &str) -> Vec<Vec<String>> {
    let re = Regex::new(pattern).unwrap();
    let mut results = vec![];
    for caps in re.captures_iter(text) {
        results.push(
            caps.iter()
                .map(|c| c.unwrap().as_str().to_string())
                .collect(),
        );
    }
    results
}
