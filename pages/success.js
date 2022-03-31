import { useRouter } from 'next/router'
import NotifyComponent from '../components/NotifyComponent'

const Success = () => {
  return (
    <>
      <NotifyComponent isBasic={true} isFailed={false} message="Success" />
    </>
  )
}

export default Success
