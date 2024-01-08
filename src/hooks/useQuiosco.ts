import { QuioscoContext, QuioscoContextProps } from '@/context/QuioscoProvider';
import { useContext } from 'react'

const useQuiosco = () => {
    return useContext(QuioscoContext) as QuioscoContextProps;
}
export default useQuiosco;