import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llava',
  stream: true,
  messages: [
    {
      role: 'system',
      content: 'Contesta en español por favor'
    },
    {
      role: 'user',
      content: 'Que es el mate argentino?'
    }
  ]
})

for await (const message of response) {
  process.stdout.write(message.message.content)
}
