import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import Snackbar from "../../components/atoms/Snackbar";

interface ISnackbarContext {
  newWarning: (message: string) => void;
  newSuccess: (message: string) => void;
}

const defaultContext: ISnackbarContext = {
  newWarning: () => null,
  newSuccess: () => null,
};

const Context = createContext(defaultContext);
const useSnackbar = () => useContext(Context);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [type, setType] = useState<"warning" | "success">("success");

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const emptyTimeout = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }, []);

  const addTimeout = useCallback((callback: () => void) => {
    timeout.current = setTimeout(() => {
      callback();
    }, 3000);
  }, []);

  const clearAll = useCallback(() => {
    setMessage("");
    setType("success");
    setIsVisible(false);
    emptyTimeout();
  }, [emptyTimeout]);

  const setSnackbar = useCallback(
    (type: "warning" | "success", message: string) => {
      setType(type);
      setIsVisible(true);
      setMessage(message);

      emptyTimeout();
      addTimeout(clearAll);
    },
    [addTimeout, clearAll, emptyTimeout]
  );

  const newWarning = useCallback(
    (message: string) => {
      clearAll();
      setTimeout(() => {
        setSnackbar("warning", message);
      }, 0);
    },
    [clearAll, setSnackbar]
  );

  const newSuccess = useCallback((message: string) => {
    clearAll();
    setTimeout(() => {
      setSnackbar("success", message);
    }, 0);
  }, []);

  const providerValue = {
    newWarning,
    newSuccess,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
      <Snackbar
        type={type}
        message={message}
        onClick={clearAll}
        isVisible={isVisible}
      />
    </Context.Provider>
  );
};

export default {
  useSnackbar,
  Provider,
};
