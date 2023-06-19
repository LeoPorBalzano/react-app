import React, { useState } from 'react'

type ValorSkuId = {
  target: {
    value: string
  }
}

function AppLeoLearning() {
  const [SkuIdInput, setSkuIdInput] = useState('')
  const [recipe, setRecipe] = useState('')

  const searchForRecipe = () => {
    const myHeaders = new Headers()

    myHeaders.append(
      'Cookie',
      'VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IjcxOEQ0RDgzMTFBNzg0MzE2MjQ5NDlCNDg1RTFFMDgyN0NGQ0Y4MDMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJsZW9uYXJkby5iYWx6YW5vQGFjY3QuZ2xvYmFsIiwiYWNjb3VudCI6ImVzdGFnaW9hY2N0IiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiJkZDI3ODc4Zi00ZGVmLTQ2ZDItYjg3MC0wN2MyZGY5MmNiNjgiLCJleHAiOjE2ODcwMjE2OTYsInVzZXJJZCI6ImEyMTAxYTRmLTc4YjktNGZhMy1iMzgyLWFjOTkzNWEzNzY5OCIsImlhdCI6MTY4NjkzNTI5NiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6IjViY2YwNTFiLTVjZmItNDNmZC1iMjgyLWU5NmFmMTFlYWY2MSJ9.swftK8Ne7B94mSpyjSOKLRmCDCHaTib6oYmjTLEAsuzc1TKrGXXR-VcqGljUKRC8RqE-u21i3RwRiWq4azorsg'
    )

    fetch(`/api/dataentities/RL/search?postSKU=${SkuIdInput}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        setRecipe(result[0].postContent)
      })
      .catch((error) => alert(error))
  }

  const handleChange = (event: ValorSkuId) => {
    setSkuIdInput(event.target.value)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          id="SKUid_input"
          onChange={handleChange}
          value={SkuIdInput}
        />
        <button type="button" id="searchButton" onClick={searchForRecipe}>
          Buscar
        </button>
      </div>
      <div>
        <p>{recipe}</p>
      </div>
    </div>
  )
}

export default AppLeoLearning
