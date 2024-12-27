import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    
    if (error.response) {
      // Handle specific HTTP status codes
      switch (error.response.status) {
        case 400:
          message = error.response.data.message + '\n' + error.response.data.missingFields.join('\n');
          break;
        case 500:
          message = "Something went wrong";
          break;
        default:
          message = error.response.data.message;
      }

        toast.error(<div dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }} />, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });

  
      // toast.error(message, {
      //   data: {
      //     title: "Error",
      //     text: 'ssss'
      //   },
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      // });

      // Prevent error from bubbling up to React error boundary
      error.handled = true;
      
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
}

export default errorResponseHandler;
