import React from "react";
import { useRouter } from 'next/router'

export default function CommunityTags({ }) {
    const router = useRouter()
    const { tags } = router.query

    return <p>Post: {tags}</p>

}

//export default withRouter(CommunityTags);