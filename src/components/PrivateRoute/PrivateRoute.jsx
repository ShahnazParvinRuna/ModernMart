'use auth'
import useAuth from '@/hooks/useAuth'
import Loader from '../Loader/Loader'
import { useRouter } from 'next/navigation'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const router = useRouter()
    if (loading) {
        return <Loader/>
    }
    if (!user) {
        return router.push('/login')
    }
    return children
}

export default PrivateRoute