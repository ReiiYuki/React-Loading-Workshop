import { Skeleton } from "@chakra-ui/react"
import { useState } from "react"

const ImageWithSkeleton = ({ src }: Record<'src', string>) => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            {loading && <Skeleton w="300px" h="300px" />}
            <img width="300px" height="300px" src={src} loading="lazy" onLoad={() => setLoading(false)} />
        </>
    )
}

export default ImageWithSkeleton
