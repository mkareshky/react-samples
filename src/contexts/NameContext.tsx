import { createContext, useState, ReactNode, useContext } from "react";

// Define context type
interface NameContextType {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>
}

interface ChildrenType {
    children: ReactNode;
}

const typeContextState: NameContextType = {
    name: '',
    setName: () => {},
}

// Create the context with a default value
const NameContext = createContext<NameContextType>(typeContextState);

// Create a provider component
export const NameProvider = ({ children }: ChildrenType) => {
    const [name, setName] = useState<string>("Mali");

    return (
      <NameContext.Provider value={{ name, setName }}>
        {children}
      </NameContext.Provider>
    )
  };

  // Custom hook to use NameContext safely
export const useNameContext = () => {
    const context = useContext(NameContext);
    if (!context) {
      throw new Error("useNameContext must be used within a NameProvider");
    }
    return context;
  };

  export default NameContext;