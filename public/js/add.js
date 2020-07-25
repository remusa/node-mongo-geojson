window.addEventListener('DOMContentLoaded', () => {
  const ENDPOINT = '/api/v1/stores'

  const storeForm = document.querySelector('#store-form')
  const storeId = document.querySelector('#store-id')
  const storeAddress = document.querySelector('#store-address')

  storeForm.addEventListener('submit', addStore, false)

  async function addStore(e) {
    e.preventDefault()

    if (storeId.value === '' || storeAddress.value === '') {
      alert('Please fill in the required fields')
    }

    const params = {
      storeId: storeId.value,
      storeAddress: storeAddress.value,
    }

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(params),
      },
    }).catch(e => {
      alert(`Error adding store: ${e.message}`)
      console.error(`Error adding store: ${e.message}`)
      return
    })

    if (res) {
      if (res.status === 400) {
        throw Error('Store already exists')
      }

      alert('Store added')
      window.location.href = '/'
    }
  }
})
