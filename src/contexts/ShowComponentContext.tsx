import { ReactNode, createContext, useEffect, useState } from "react";
import { featureFlagDataServiceCall } from "../assets/data";

interface FeatureFlagType {
    [key: string]: boolean;
}
export interface ShowComponentsType {
    loading: boolean;
    enableFlag: { [key: string]: boolean }
}
export const ShowComponentsContext = createContext<ShowComponentsType>({
    loading: false,
    enableFlag: {}
});

const ShowComponentsGlobalState = ({ children }: { children: ReactNode }) => {

    const [loading, setLoading] = useState(false);
    const [enableFlag, setEnableFlag] = useState({});


    const fetchFeatureFlags = async () => {
        setLoading(true);
        try {
            const res = await featureFlagDataServiceCall() as FeatureFlagType;
            setEnableFlag(res);
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : 'some unknown error happened!')
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchFeatureFlags() }, []);

    return (
        <ShowComponentsContext.Provider value={{ loading, enableFlag }}>
            {children}
        </ShowComponentsContext.Provider>
    )
}

export default ShowComponentsGlobalState;