export interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProductList {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}
 
export interface IProductListResponse {
  products: IProductList[],
  total: number,
  skip: number,
  limit: number
}

export interface IPropductProps {
  productList:IProductList[],
  key: string
}

export interface IProductContext {
  productResponse: IProductListResponse,
  handleProductResponse: (data: IProductListResponse) => void,
}

export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}
