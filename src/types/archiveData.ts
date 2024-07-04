interface archiveDateSingleRequest {
  img: String;
  name: String;
  location: String;
  durationTime: String;
  flagImg: String;
  currentRequestId: number;
}
interface AdditionalInfo {
  text: string;
  value?: boolean;
  mvalue?: boolean;
}

interface detailsData {
  imgSrc: string;
  title: string;
  duration: string;
  location: string;
  datetime: string;
  languages: string[];
  urgent: boolean;
  additionalInfo: AdditionalInfo[];
  farmProblemInfo: string;
  corn: string;
  id: string;
}

interface Request {
  img: string;
  name: string;
  location: string;
  durationTime: string;
  flagImg: string;
  currentRequestId: string;
  detailsData: detailsData;
}

interface archiveDateRequests {
  id: String;
  title: String;
  urgent: Boolean;
  subTitle: String;
  reqArr: archiveDateSingleRequest[];
  detailsData: detailsData;
}

export type { archiveDateSingleRequest, detailsData };

export default archiveDateRequests;
