export type TourType = {
   id: number;
   title: string;
   location: string;
   travelAgencyId: number;
   airlineId: number;
   description: string;
   price: number;
   airlines: {
      name: string;
   }
   travelAgency:{
      name: string;
   }
   pictures: { url: string }[]
}