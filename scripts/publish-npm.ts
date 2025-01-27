const command = new Deno.Command('npm', {
  args: ['publish', '--access', 'public'],
  cwd: './npm',
})

const { code } = await command.output()

if (code === 0) {
  console.log('Successfully published to npm!')
} else {
  console.error('Failed to publish to npm')
  Deno.exit(1)
}
