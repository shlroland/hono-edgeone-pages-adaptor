const files = Deno.args

async function main() {
  if (files.length === 0) return

  // Format files
  const fmtProcess = new Deno.Command('deno', {
    args: ['fmt', ...files],
  })
  await fmtProcess.output()

  // Lint files
  const lintProcess = new Deno.Command('deno', {
    args: ['lint', ...files],
  })
  await lintProcess.output()

  // Type check
  const checkProcess = new Deno.Command('deno', {
    args: ['check', ...files],
  })
  await checkProcess.output()
}

if (import.meta.main) {
  main()
}
