import React, { useState } from 'react'
import { useLazyQuery } from 'react-apollo'

import getDocument from './graphql/getDocument.graphql'

function AppLeoLearning() {
  const [currentSkuId, setCurrentSkuId] = useState('')
  const [getRecipes, { data, error, loading }] = useLazyQuery(getDocument)

  return (
    <div>
      <div>
        <input
          type="text"
          id="SKUid_input"
          onChange={(e) => {
            setCurrentSkuId(e.target.value)
          }}
          value={currentSkuId}
        />
        <button
          type="button"
          id="searchButton"
          onClick={() =>
            getRecipes({
              variables: {
                acronym: 'RL',
                fields: ['postContent'],
                where: `postSKU=${currentSkuId}`,
              },
            })
          }
        >
          Buscar
        </button>
        <button
          type="button"
          id="searchButton"
          onClick={() =>
            getRecipes({
              variables: {
                acronym: 'RL',
                fields: ['postContent'],
                sort: 'postDate DESC',
              },
            })
          }
        >
          Buscar mais recente
        </button>
      </div>
      <div>
        {error && <p> Ocorreu um erro </p>}
        {data && (
          <div>
            {!data.documents.length && <p>esse id não existe</p>}
            {!!data.documents.length && (
              <p>{data.documents[0].fields?.[0]?.value}</p>
            )}
          </div>
        )}
        {loading && <p>Carregando </p>}
      </div>
    </div>
  )
}

export default AppLeoLearning
