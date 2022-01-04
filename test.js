function fetchJson() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => console.log(json));
}

async function fetchJson2() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    console.log(json);
}

fetchJson2();
