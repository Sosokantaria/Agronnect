interface archiveDateSingleRequest {
  img: String;
  name: String;
  location: String;
  durationTime: String;
  flagImg: String;
  currentRequestId: number;
}
interface archiveDateRequests {
  id: String;
  title: String;
  urgent: Boolean;
  subTitle: String;
  reqArr: archiveDateSingleRequest[];
}

export type { archiveDateSingleRequest };

export default archiveDateRequests;
