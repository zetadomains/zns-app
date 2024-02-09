import zetaRegisterControllerABI from '../abi/ZetaRegisterController.json'
import loadericon from '../assets/images/loader-icon.svg';
import { useReadContract } from 'wagmi'
import { toast } from 'react-toastify'; 
import { fromWei } from '../helpers/String';
import { goerli, zetaChain } from 'wagmi/chains'

function DomainPrice({available, name, duration}) { 
 
    const zetaRegisterControllerConfig = {
        address: process.env.REACT_APP_ZETAREGISTERCONTROLLER,
        abi: zetaRegisterControllerABI
    };

    const { data: price, error, isPending } = useReadContract({
        ...zetaRegisterControllerConfig,
        functionName: 'rentPrice',
        args: [name, duration],
        chainId: process.env.REACT_APP_NODE_ENV === "production" ? zetaChain.id: goerli.id
    });
  
    if(error) toast.error(error.message)
    if(!available) return <></>

    if(isPending) {
        <span className='me-3'><img src={loadericon} alt="" /></span>
    } else {
        return ( 
            <> 
                <span className='me-3'>{ fromWei(  price.base.toString() ).toString() } {process.env.REACT_APP_NATIVE_TOKEN} / YEAR</span>
            </>
         );
    }
}

export default DomainPrice;