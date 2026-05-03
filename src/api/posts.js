export async function getPosts() {
    await new Promise((r) => setTimeout(r, 800));

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return res.json();
}

export async function getPostById({ params }) {
    // console.log(params.id);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return res.json();
}