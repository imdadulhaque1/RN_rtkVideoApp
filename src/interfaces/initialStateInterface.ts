export interface initialStateInterface {
  tags: never[];
  videos: never[];
  video: any;
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface tagsInitialStateInterface {
  tags: never[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface videoInitialStateInterface {
  video: any;
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}
