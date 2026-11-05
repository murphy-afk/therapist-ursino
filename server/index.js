import express from 'express'

// Minimal server skeleton. Used for the final deployment if a backend is needed.
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
