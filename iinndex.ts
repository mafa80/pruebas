const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("hello.txt");
console.log(decoder.decode(data));
