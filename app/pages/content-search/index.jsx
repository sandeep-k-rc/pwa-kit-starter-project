import React from 'react'
import fetch from 'cross-fetch'
import {List, ListItem} from '@chakra-ui/react'
import Link from '@salesforce/retail-react-app/app/components/link'
import {getAppOrigin} from '@salesforce/pwa-kit-react-sdk/utils/url'
import { result } from 'lodash'


const ContentSearch = ({contentResult}) => {

    if(!contentResult) {
        return <div>Loading...</div>
    }
    const {hits=[]} = contentResult 
    return ( 
        <div>
            {hits.length ? (
                <List>

                    {hits.map(({id, name}) => (
                        <Link key={id} to={`/content/${id}`}>
                            <ListItem>
                                {name}
                            </ListItem>
                        </Link>   
                    ))}
                </List>
            ) : (   
                <div>No content found</div>
            )}
        </div>
    )
}

ContentSearch.getTemplateName = () => 'content-search'
ContentSearch.getProps = async () => {
    let contentResult
    const res = await fetch(
        `${getAppOrigin()}/mobify/proxy/ocapi/s/RefArch/dw/shop/v21_3/content_search?q=about&client_id=c5aa78fa-6976-40a4-91de-c6bee8f7a73d`
        )
    if(res.ok) {
        contentResult = await res.json()
    }
    if(process.env.NODE_ENV != 'production') {
        //console.log('contentResult', contentResult)
    }
    return {contentResult}
}   


export default ContentSearch