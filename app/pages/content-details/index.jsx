import React from 'react'
import fetch from 'cross-fetch'
import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import {HTTPError} from '@salesforce/pwa-kit-react-sdk/ssr/universal/errors'
import {getAppOrigin} from '@salesforce/pwa-kit-react-sdk/utils/url'

const ContentDetails = () => {
    const params = useParams()
    /*
    const {data, error, isLoading} = useQuery({
        queryKey: [params.id],
        queryFn: () => { return fetch(`http://localhost:3000/mobify/proxy/ocapi/s/RefArch/dw/shop/v20_2/content/${params.id}?client_id=8e90cc31-f040-4dcf-95b6-2c5451c15b48`).then(res=>res.json()).then((json) => {
            console.log(json)
            return json
          })
        },
        cacheTime: 0
    })*/

    const {data, error, isLoading} = useQuery([params.id], () => {
        return fetch(`${getAppOrigin()}/mobify/proxy/ocapi/s/RefArch/dw/shop/v20_2/content/${params.id}?client_id=8e90cc31-f040-4dcf-95b6-2c5451c15b48`).then(res=>res.json()).then((json) => {
            console.log(json)
            return json
          })
    })
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Error query hit: {error}</div>
    } else if (data.fault) {
       // throw new HTTPError(404, data.fault.message)
        return <div>Error: {data.fault.message}</div>
    } else {
        return <div dangerouslySetInnerHTML={{__html: data.c_body}} />
    }
}

ContentDetails.getTemplateName = () => 'content-details'

export default ContentDetails