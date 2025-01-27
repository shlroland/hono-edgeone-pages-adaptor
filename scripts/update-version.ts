const version = Deno.env.get('VERSION')
if (!version) {
  console.error('VERSION environment variable is not set')
  Deno.exit(1)
}

const text = await Deno.readTextFile('./deno.json')
const json = JSON.parse(text)
json.version = version
await Deno.writeTextFile('./deno.json', JSON.stringify(json, null, 2))
