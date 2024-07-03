
interface AdditionalInfo {
  text: string;
  value: boolean;
}

interface ViewRequestData {
    imgSrc: string;
    title: string;
    duration: string;
    location: string;
    datetime: string;
    languages: string[];
    additionalInfo: AdditionalInfo[];
    farmProblemInfo: string;
    corn: string;
    id: string;
    urgent:boolean;
  }
  
  export default ViewRequestData;