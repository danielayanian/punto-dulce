import { urls } from './url'

const errorMessageStatus = {
  401: 'Error 401 - No autorizado',
  403: 'Error 403 - Acceso denegado',
  404: 'Error 404 - No se puede guardar',
  405: 'Error 405 - Id de usuario inválido',
  500: 'Error 500 - Error bbdd',
}

export const putCart = async (productId, quantity) => {
  const url =`${urls.cart}/${productId}?quantity=${quantity}`
  const token = localStorage.getItem("jwt") 
  const response = await fetch(url, {
    method: 'PUT',
    headers: {"Authorization": `Bearer ${token}`, "Content-Type":'application/json' },
  })

  if (!response.ok) {
    if(response.status === 403){
      localStorage.removeItem("jwt")
    }
    throw new Error(errorMessageStatus[response.status])
  }
}

export const getCart = async () => {
  // const url = slug ? `${urls.getCart}?slug=${slug}` : urls.getCart
 const token = localStorage.getItem("jwt") 
  
  const response = await fetch(urls.cart, {method:"GET", headers: {"Authorization": `Bearer ${token}`, "Content-Type":'application/json' }})
  if (!response.ok) {
    if(response.status === 403){
      localStorage.removeItem("jwt")
    }
    throw new Error(errorMessageStatus[response.status])
  }

  const data = await response.json()
  return data
}

export const getPreview = async () => {
 const token = localStorage.getItem("jwt") 
  
  const response = await fetch(`${urls.checkout}/preview`, {method:"GET", headers: {"Authorization": `Bearer ${token}`, "Content-Type":'application/json' }})
  console.log(response);
  if (!response.ok) {
    if(response.status === 403){
      localStorage.removeItem("jwt")
    }
    throw new Error(errorMessageStatus[response.status])
  }

  const data = await response.json()
  return data
}
export const getProducts = async (category) => {
  const url = category ? `${urls.getProduct}?category=${category}` : urls.getProduct
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(errorMessageStatus[response.status])
  }

  const data = await response.json()
  return data
}

export const createTopicFetcher = (createdTopic) =>
  fetch(urls.postTopics, {
    method: 'POST',
    body: JSON.stringify(createdTopic),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      if (Object.hasOwnProperty.call(errorMessageStatus, res.status)) {
        throw new Error(errorMessageStatus[res.status])
      } else {
        throw new Error('Error inesperado')
      }
    }
    return res.status === 204 ? {} : res.json()
  })

export const updateTopicFetcher = (updatedTopic) =>
  fetch(urls.patchTopics, {
    method: 'PATCH',
    body: JSON.stringify(updatedTopic),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      if (Object.hasOwnProperty.call(errorMessageStatus, res.status)) {
        throw new Error(errorMessageStatus[res.status])
      } else {
        throw new Error('Error inesperado')
      }
    }
    return res.status === 204 ? null : res.json()
  })

export const getCategories = async () =>
  fetch(urls.getCategories)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching categories: ${res.statusText}`)
      }
      return res.json()
    })
    .catch((err) => {
      throw new Error(`Error fetching categories: ${err.message}`)
    })

export const getTypes = () =>
  fetch(urls.getTypes, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching types: ${res.statusText}`)
      }
      return res.json() 
    })
    .catch((err) => {
      throw new Error(`Error fetching types: ${err.message}`)
    })

export const getItineraries = async () =>
  fetch(urls.getItineraries)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching itineraries: ${res.statusText}`)
      }
      return res.json()
    })
    .catch((err) => {
      throw new Error(`Error fetching itineraries: ${err.message}`)
    })

export const getFavorites = async (slug) => {
  const urlFavorites = slug
    ? `${urls.getFavorites}/${slug}`
    : `${urls.getFavorites}`

  try {
    const response = await fetch(urlFavorites)

    if (!response.ok) {
      throw new Error('Error fetching favorite resources')
    }
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error fetching favorite resources')
  }
}

export const favMutation = async (id) => {
  const response = await fetch(urls.favorites, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  })
  if (!response.ok) {
    throw new Error(`Error updating favorite resource: ${response.statusText}`)
  }
}

export const getUsers = async () => {
  const response = await fetch(urls.users)
  if (!response.ok) {
    throw new Error(`Error fetching users`)
  }
  const data = await response.json()
  return data
}

export const getResources = async (filters) =>
  fetch(`${urls.getResources}?${filters}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching resources: ${res.statusText}`)
      }
      return res.json()
    })
    .catch((err) => {
      throw new Error(`Error fetching resources: ${err.message}`)
    })

export const getResourcesByUser = async (slug) => {
  const urlResourcesByUser = slug
    ? `${urls.getResourcesByUser}?categorySlug=${slug}`
    : `${urls.getResourcesByUser}`

  const response = await fetch(urlResourcesByUser, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Error fetching resources: ${response.statusText}`)
  }

  const data = await response.json()

  return data.map((resource) => ({
    ...resource,
  }))
}

export const getVotes = async (resourceId) => {
  const response = await fetch(`${urls.vote}${resourceId}`)
  if (!response.ok) {
    throw new Error('Error fetching votes')
  }
  const data = await (response.json() )
  return data
}

export const updateVote = async ({ resourceId, vote }) => {
  const response = await fetch(urls.vote, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resourceId, vote }),
  })

  if (!response.ok) {
    throw new Error('Error fetching votes')
  }
}

export const loginUserFetcher = async (user) => {
  const errorMessage = {
    400: 'Error 400 - Error de validación ZOD',
    401: 'Error 401 - Credenciales incorrectas',
    403: 'Error 403 - Acceso denegado (usuario no activo)',
    404: 'Error 404 - Usuario no encontrado.',
    422: 'Error 422 - Contraseña incorrecta.',
    500: 'Error 500 - Error bbdd',
    503: 'Error 503 - "Servicio no disponible',
  }

  const response = await fetch(urls.logIn, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    if (Object.hasOwnProperty.call(errorMessage, response.status)) {
      throw new Error(errorMessage[response.status])
    } else {
      throw new Error('Error inesperado')
    }
  }
  return response.status === 204 ? null : response.json()
}

export const registerUserFetcher = async (useData) => {
  const response = await fetch(urls.register, {
    method: 'POST',
    body: JSON.stringify(useData),
    headers: { 'Content-type': 'application/json' },
  })
  if (!response.ok)
    throw new Error(
      `Error al registrar usuario: ${response.statusText} (Status: ${response.status})`
    )

  if (response.status === 204) {
    return null
  }

  try {
    return await response.json()
  } catch (error) {
    throw new Error('Error parsing JSON response from server')
  }
}

export const createResourceFetcher = (resource) =>
  fetch(urls.createResource, {
    method: 'POST',
    body: JSON.stringify(resource),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error al crear el recurso')
      }
      return res.status === 204 ? {} : res.json()
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error))

export const updateResourceFetcher = (resource) =>
  fetch(urls.updateResource, {
    method: 'PATCH',
    body: JSON.stringify(resource),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error al actualizar el recurso')
      }
      return res.status === 204 ? {} : res.json()
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error))

export const updateStatus = async (id) => {
  const response = await fetch(`${urls.postStatus}/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  })

  if (!response.ok) {
    throw new Error('Error updating status')
  }
}

export const patchUserStatus = async (updatedUser) => {
  const response = await fetch(urls.users, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  })
  if (!response.ok) {
    throw new Error('Failed to update user status')
  }
  return response.status === 204 ? {} : response.json()
}